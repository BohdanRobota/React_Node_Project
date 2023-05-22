import { useState, useLayoutEffect } from 'react';
import { IMedia } from '../types/media.type';
import { MEDIA_QUERIES } from '../consts/app-keys.const';

const queries = [MEDIA_QUERIES.isMobile, MEDIA_QUERIES.isTablet, MEDIA_QUERIES.isDesktop];

export const useMatchMedia = (): IMedia => {
  const mediaQueryLists = queries.map((query) => window.matchMedia(query));

  const getValues = () => mediaQueryLists.map((list) => list.matches);

  const [values, setValues] = useState(getValues);

  useLayoutEffect(() => {
    const handler = () => setValues(getValues);

    mediaQueryLists.forEach((list) => list.addEventListener('change', handler));

    return () => mediaQueryLists.forEach((list) => list.removeEventListener('change', handler));
  }, []);

  return ['isMobile', 'isTablet', 'isDesktop'].reduce(
    (acc, screen, index) => ({
      ...acc,
      [screen]: values[index]
    }),
    {} as IMedia
  );
};
