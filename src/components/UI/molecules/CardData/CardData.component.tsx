import type { FunctionComponent } from 'react';
import type { CardDataProps } from './CardData.interface';
import { Grid } from '@mui/material';
import { Card, ListItem, TooltipIcon } from './CardData.styled';
import { Typography } from '../../atoms';
import { activeTheme } from '@/utils';

const theme = activeTheme()?.palette;
const CardData: FunctionComponent<CardDataProps> = ({ listItem }) => {
  return (
    <Card>
      {listItem?.map((item) => (
        <ListItem key={item.id}>
          <Grid sx={{ display: 'flex', alignItems: 'center', mr: 3 }}>
            {item.color && <TooltipIcon color={item.color} />}
            <Typography
              variant="body2"
              color={theme?.neutral?.darkest}
              sx={{ lineHeight: '19px', textAlign: 'left' }}
            >
              {item.title}
            </Typography>
          </Grid>
          <Typography
            variant="caption"
            color={theme?.neutral?.dark}
            sx={{ lineHeight: '19px', textTransform: item.uppercase, textAlign: 'right' }}
          >
            {item.value}
          </Typography>
        </ListItem>
      ))}
    </Card>
  );
};

export default CardData;
