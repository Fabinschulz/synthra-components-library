import type { FunctionComponent } from 'react';
import type { CardDataProps } from './CardData.interface';
import { Grid2 } from '@mui/material';
import { Card, ListItem, TooltipIcon } from './CardData.styled';
import { Typography } from '../../atoms';
import { activeTheme } from '@/utils';

const theme = activeTheme()?.palette;
const CardData: FunctionComponent<CardDataProps> = ({ listItem }) => {
  return (
    <Card>
      {listItem?.map((item) => (
        <ListItem key={item.id}>
          <Grid2 display="flex" alignItems="center" mr={3}>
            {item.color && <TooltipIcon color={item.color} />}
            <Typography
              variant="body2"
              color={theme?.neutral?.darkest}
              lineHeight="19px"
              textAlign="left"
            >
              {item.title}
            </Typography>
          </Grid2>
          <Typography
            variant="caption"
            color={theme?.neutral?.dark}
            lineHeight="19px"
            textTransform={item.uppercase}
            textAlign="right"
          >
            {item.value}
          </Typography>
        </ListItem>
      ))}
    </Card>
  );
};

export default CardData;
