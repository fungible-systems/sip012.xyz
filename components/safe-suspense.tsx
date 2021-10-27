import { Suspense } from 'react';
import { IS_SSR } from 'jotai-query-toolkit';

export const SafeSuspense = ({ fallback, children }: any) => {
  if (IS_SSR) return <>{fallback}</>;
  return <Suspense fallback={fallback}>{children}</Suspense>;
};
