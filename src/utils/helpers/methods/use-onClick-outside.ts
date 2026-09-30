import { useEffect } from 'react';

/**
 * Hook that alerts clicks outside of the passed ref
 */
export function useOnClickOutside(ref: any, handler: () => void, timeout: number = 300) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setTimeout(() => {
          handler();
        }, timeout);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, handler, timeout]);
}
