'use client';

import { useEffect } from 'react';
import { getCalApi } from '@calcom/embed-react';
import { CAL_NAMESPACE } from './moving-commission/cal-config';

export default function CalInit() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      cal('ui', {
        theme: 'light',
        cssVarsPerTheme: {
          light: { 'cal-brand': '#2563eb' },
          dark: { 'cal-brand': '#2563eb' },
        },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();
  }, []);

  return null;
}
