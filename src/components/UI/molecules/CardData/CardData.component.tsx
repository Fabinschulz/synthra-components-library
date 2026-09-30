'use client';
import type { FunctionComponent } from 'react';
import type { CardDataProps } from './CardData.interface';
import { Grid } from '@mui/material';
import { Card, ListItem, TooltipIcon } from './CardData.styled';
import { Typography } from '../../atoms';

const CardData: FunctionComponent<CardDataProps> = ({ listItem }) => {
  return (
    <Card>
      {listItem?.map((item) => (
        <ListItem key={item.id}>
          <Grid sx={{ display: 'flex', alignItems: 'center', mr: 3 }}>
            {item.color && <TooltipIcon color={item.color} />}
            <Typography
              variant="body2"
              sx={{ color: 'neutral.darkest', lineHeight: '19px', textAlign: 'left' }}
            >
              {item.title}
            </Typography>
          </Grid>
          <Typography
            variant="caption"
            sx={{
              color: 'neutral.dark',
              lineHeight: '19px',
              textTransform: item.uppercase,
              textAlign: 'right'
            }}
          >
            {item.value}
          </Typography>
        </ListItem>
      ))}
    </Card>
  );
};

export default CardData;
