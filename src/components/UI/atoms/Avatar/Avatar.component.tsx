import React from 'react';
import { Avatar as AvatarMui, Box } from '@mui/material';
import { AvatarProps } from './Avatar.interface';
import { Typography } from '../Typography';
import AvatarSkeleton from './Avatar.skeleton';

// Função para gerar uma cor baseada em uma string
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

// Função para gerar as props do Avatar quando não houver imagem
function stringAvatar(name: string) {
  const initials = name
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return {
    sx: {
      bgcolor: stringToColor(name)
    },
    children: initials
  };
}

const Avatar: React.FC<AvatarProps> = ({
  imageSrc,
  title,
  subtitle,
  altText,
  showText,
  sx = {},
  isLoading = false
}) => {
  return (
    <AvatarSkeleton isLoading={isLoading} showText={showText}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <AvatarMui
          src={imageSrc}
          alt={altText}
          {...(!imageSrc && title ? stringAvatar(title) : {})}
          sx={{ ...sx, ...(imageSrc ? {} : stringAvatar(title).sx) }}
        />
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
