import { useState, useEffect, useCallback } from 'react';

// Mostly taken from https://stackoverflow.com/a/55880860/13246690 but added improvements
// to prevent context menu from popping up.
export default function useLongPress(callback = () => {}, ms = 300) {
  const [startLongPress, setStartLongPress] = useState(false);
  const [preventDefault, setPreventDefault] = useState(false);

  // On 'down' press like gestures.
  const start = useCallback(() => {
    setStartLongPress(true);
  }, []);

  // On 'up' press like gestures.
  const stop = useCallback((e) => {
    setStartLongPress(false);
    // Prevent the context menu popping up after a long press.
    if (preventDefault === true && e && e.cancelable) {
      e.preventDefault();
      setPreventDefault(false);
    }
  }, [preventDefault]);

  useEffect(() => {
    let timer;
    if (startLongPress) {
      timer = setTimeout(() => {
        setPreventDefault(true);
        callback();
        stop();
      }, ms);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [callback, ms, startLongPress, stop]);

  return {
    onMouseDown: start,
    onMouseUp: stop,
    onMouseLeave: stop,
    onTouchStart: start,
    onTouchEnd: stop,
    onTouchMove: stop
  };
}
