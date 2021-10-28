import { Stack, StackProps } from '@nelson-ui/react';

export const Card = (props: StackProps) => {
  return (
    <Stack
      fontSize={'16px'}
      position={'relative'}
      spacing={'$extra-loose'}
      borderRadius={'$large'}
      lineHeight={'1.65'}
      css={{
        '@bp2': {
          fontSize: '22px',
        },
      }}
      {...props}
    />
  );
};
