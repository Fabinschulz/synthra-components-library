'use client';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { useServerInsertedHTML } from 'next/navigation';
import React from 'react';
import type { ProviderProps, ThemeMode } from '../theme';
import { initializeTheme, Provider } from '../theme';
import { nextLinkComponents } from './nextLinkComponents';

const options = { key: 'css', prepend: true };

export interface ThemeRegistryProps extends Omit<ProviderProps, 'theme'> {
  /**
   * Modo de cor usado quando `theme` não é informado.
   * @default 'light'
   */
  mode?: ThemeMode;

  /** Tema customizado. Quando informado, `mode` é ignorado. */
  theme?: ProviderProps['theme'];
}

export default function ThemeRegistry({ mode = 'light', theme, ...providerProps }: ThemeRegistryProps) {
  const [{ cache, flush }] = React.useState(() => {
    const cache = createCache(options);
    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted: string[] = [];
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache, flush };
  });

  const [defaultTheme] = React.useState(() =>
    initializeTheme({ mode, overrides: { components: nextLinkComponents } })
  );

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) {
      return null;
    }
    let styles = '';
    for (const name of names) {
      styles += cache.inserted[name];
    }
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <Provider theme={theme ?? defaultTheme} {...providerProps} />
    </CacheProvider>
  );
}
