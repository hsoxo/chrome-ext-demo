import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { DURATION } from '../../constants';

const formatProgress = (num: number) => `-${(1 - num) * 100}%`;
const ProgressButton = forwardRef((props, ref) => {
  const [progress, setProgress] = useState(0);
  const [timeoutRef, setTimeoutRef] = useState(null);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (progress < 1 && !pause) {
      setTimeoutRef(setTimeout(() => setProgress(prev => Math.min((prev + (1 / DURATION) * 100).toFixed(6), 1)), 100));
    }
    if (progress === 1) {
      props.onTimeout && props.onTimeout();
    }
  }, [progress, pause]);

  useImperativeHandle(ref, () => ({
    reset: () => {
      clearTimeout(timeoutRef);
      setProgress(0);
    },
    start: () => setPause(false),
    stop: () => setPause(true),
  }));

  return (
    <div className="relative ml-auto w-18 overflow-hidden rounded-lg ">
      <div className="absolute h-8 w-18 bg-gradient-to-r from-[#FFE78E] to-[#FFF96C]" />
      <div
        className="absolute h-8 w-18 bg-gradient-to-r from-[#D8FB00]/[0] to-[#d8fb00]"
        style={{ transform: `translateX(${formatProgress(progress)})` }}
      />
      <button className="absolute h-8 w-18 text-md font-medium text-base-color">Done</button>
    </div>
  );
});

export default ProgressButton;
