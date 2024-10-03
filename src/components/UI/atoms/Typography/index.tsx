import { Typography as TypographyMui, TypographyTypeMap } from '@mui/material';

type TextProps = TypographyTypeMap['props'] & {
  component?: React.ElementType;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  className?: string;
  id?: string;
  specialText?: string;
};

const renderText = (variant: TextProps['variant'], props: TextProps) => {
  const { specialText, ...otherProps } = props;
  const componentType =
    variant?.includes('body') || variant?.includes('caption') || variant?.includes('subtitle')
      ? 'p'
      : props.component;

  return (
    <TypographyMui
      className={variant}
      variant={variant}
      component={componentType}
      {...(specialText ? { dangerouslySetInnerHTML: { __html: specialText } } : null)}
      {...otherProps}
    />
  );
};

const Typography = {
  H1: (props: TextProps) => renderText('h1', props),
  H2: (props: TextProps) => renderText('h2', props),
  H3: (props: TextProps) => renderText('h3', props),
  H4: (props: TextProps) => renderText('h4', props),
  H5: (props: TextProps) => renderText('h5', props),
  H6: (props: TextProps) => renderText('h6', props),
  Subtitle1: (props: TextProps) => renderText('subtitle1', props),
  Body1: (props: TextProps) => renderText('body1', props),
  Body2: (props: TextProps) => renderText('body2', props),
  Caption: (props: TextProps) => renderText('caption', props),
  Caption2: (props: TextProps) => renderText('caption2', props),
  ButtonLarge: (props: TextProps) => renderText('button', props)
};

export default Typography;
