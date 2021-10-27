import { BoxProps, Stack } from '@nelson-ui/react';

export const Card = (props: BoxProps) => {
  return (
    <Stack
      width={'100%'}
      spacing={'$extra-loose'}
      background={'$background-subdued'}
      p={'$extra-loose'}
      borderRadius={'$large'}
      lineHeight={'1.65'}
      {...props}
    />
  );
};
