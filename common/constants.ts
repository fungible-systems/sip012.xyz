import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
const ENV_VAR =
  publicRuntimeConfig?.NEXT_PUBLIC_VERCEL_URL ||
  process.env.NEXT_PUBLIC_VERCEL_URL ||
  process.env.VERCEL_URL;

const VERCEL_URL = ENV_VAR ? `https://${ENV_VAR}` : null;

export const API_URL = VERCEL_URL || 'http://localhost:3000';
