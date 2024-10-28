import { useEffect } from 'react';
/**
 * Hook that alerts clicks outside of the passed ref
 */
export function useOnClickOutside(ref: any, handler: () => void, timeout: number = 300) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setTimeout(() => {
          handler();
        }, timeout);
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, handler, timeout]);
}
