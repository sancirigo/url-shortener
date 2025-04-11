import { createHash } from 'crypto';

export const generateHash = (url: string): string => {
  const hash = createHash('sha256');
  hash.update(url);
  return hash.digest('hex').slice(0, 8);
};
