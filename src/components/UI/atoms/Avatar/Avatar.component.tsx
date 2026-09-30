'use client';
import { Avatar as AvatarMui, Box } from '@mui/material';
import React from 'react';
import { Typography } from '../Typography';
import { AvatarProps } from './Avatar.interface';
import AvatarSkeleton from './Avatar.skeleton';

function stringToColor(string: string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';
  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

function getInitials(name: string) {
  return name
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

const Avatar: React.FC<AvatarProps> = ({
  imageSrc,
  title,
  subtitle,
  altText,
  showText,
  sx = {},
  skeleton = false
}) => {
  const hasImage = !!imageSrc;

  const initialsA11y = showText
    ? { 'aria-hidden': true }
    : { role: 'img', 'aria-label': altText || title };

  return (
    <AvatarSkeleton skeleton={skeleton} showText={showText}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <AvatarMui
          src={imageSrc}
          alt={altText || title}
          {...(hasImage ? {} : initialsA11y)}
          sx={[
            hasImage ? {} : (theme) => ({
              bgcolor: stringToColor(title),
              color: theme.palette.getContrastText(stringToColor(title))
            }),
            ...(Array.isArray(sx) ? sx : [sx])
          ]}
        >
          {!hasImage && title ? getInitials(title) : undefined}
        </AvatarMui>
        {showText && (
          <Box sx={{ ml: 2 }}>
            <Typography variant="subtitle2">{title}</Typography>
            {subtitle && (
              <Typography variant="body2" color="textSecondary">
                {subtitle}
              </Typography>
            )}
          </Box>
        )}
      </Box>
    </AvatarSkeleton>
  );
};

export default Avatar;
