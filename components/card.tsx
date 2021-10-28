import { Stack, StackProps } from '@nelson-ui/react';

export const Card = (props: StackProps) => {
  return (
    <Stack
      position={'relative'}
      width={'100%'}
      spacing={'$extra-loose'}
      background={'$background-subdued'}
      p={'48px'}
      borderRadius={'$large'}
      lineHeight={'1.65'}
      {...props}
    />
  );
};
