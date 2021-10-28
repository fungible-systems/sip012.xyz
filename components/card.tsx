import { Stack, StackProps } from '@nelson-ui/react';

export const Card = (props: StackProps) => {
  return (
    <Stack
      position={'relative'}
      width={'100%'}
      spacing={'$extra-loose'}
      borderRadius={'$large'}
      lineHeight={'1.65'}
      {...props}
    />
  );
};
