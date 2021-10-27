import { BoxProps, Text } from '@nelson-ui/react';

export const CardTitle = (props: BoxProps) => (
  <Text
    textTransform={'uppercase'}
    color={'$text-subdued'}
    css={{
      lineHeight: 1,
      fontSize: '$2',
      fontFamily: 'unset',
    }}
    {...props}
  />
);
export const Link = (props: BoxProps) => (
  <Text
    color={'$action-primary'}
    as={'a'}
    target="_blank"
    textDecoration={'none'}
    _hover={{
      textDecoration: 'underline',
    }}
    {...props}
  />
);
