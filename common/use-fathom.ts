import { useEffect } from 'react';
import * as Fathom from 'fathom-client';
import { useRouter } from 'next/router';

function onRouteChangeComplete(fathom: typeof Fathom) {
  fathom.trackPageview();
}

export const useFathom = () => {
  const router = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development' && typeof document !== 'undefined') {
      Fathom.load('WVYOYYXH', {
        includedDomains: ['sip012.xyz'],
      });

      const handleRouteChange = () => onRouteChangeComplete(Fathom);

      router.events.on('routeChangeComplete', handleRouteChange);

      return () => {
        router.events.off('routeChangeComplete', handleRouteChange);
      };
    }
  }, []);
};
