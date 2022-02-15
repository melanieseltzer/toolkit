/*
  This patch is a workaround for a longstanding ESLint feature request that would allow 
  a shared ESLint config to bring along its own plugins, rather than imposing peer dependencies 
  on every consumer of the config.

  Please see for more info: https://www.npmjs.com/package/@rushstack/eslint-patch
*/
require('@rushstack/eslint-patch/modern-module-resolution');

console.log('testing!');
