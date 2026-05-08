// Cal.com embed config — shared by CalInit and BookCallButton.
// Swap CAL_LINK below to your actual Cal.com booking slug, then push.
// Example: 'vyn-studio/moving-partner' for https://cal.com/vyn-studio/moving-partner
//
// You can also override at deploy time without editing code by setting
// NEXT_PUBLIC_CAL_LINK in Netlify env vars.

export const CAL_NAMESPACE = 'moving-partner';

export const CAL_LINK =
  process.env.NEXT_PUBLIC_CAL_LINK ?? 'vyn.studio/moving-partner';
