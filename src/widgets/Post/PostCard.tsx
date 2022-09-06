import React, { useRef } from 'react';
import Lock from '../../icons/Lock';
import World from '../../icons/World';
import Button from '../../components/Button';
import ProgressButton from '../../components/ProgressButton';

const Card: React.FC<{
  onTimeout: () => void;
}> = ({ onTimeout }) => {
  const doneButtonRef = useRef();

  const handleMouseEnter = () => {
    doneButtonRef.current.stop();
    doneButtonRef.current.reset();
  };

  const handleMouseLeave = () => {
    doneButtonRef.current.start();
  };

  return (
    <div
      className="relative m-6 p-4 shadow-elevation/3-lifted rounded-2xl w-72 bg-white"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="pb-3.5">
        <div className="absolute float-left">
          <Button>Cancel</Button>
        </div>
        <div className="text-center">Roll up</div>
      </div>

      <textarea className="bg-base-color/[.05] rounded-lg px-3 py-2 w-full resize-none" placeholder="Add a note..." />

      <div className="flex mt-4 justify-between">
        <div className="bg-base-color/[.05] rounded-lg p-1 w-[156px] flex items-center justify-items-center">
          <div className="bg-white rounded shadow-sm shadow-c/[.20] w-20 h-6 flex">
            <div className="flex items-center justify-items-center m-auto cursor-pointer">
              <World />
              <div className="text-sm font-medium pl-1">World</div>
            </div>
          </div>
          <div className="w-20 h-6 flex">
            <div className="flex items-center justify-items-center m-auto cursor-pointer">
              <Lock />
              <div className="text-sm font-medium text-base-color/75 pl-1">Myself</div>
            </div>
          </div>
        </div>
        <ProgressButton ref={doneButtonRef} onTimeout={onTimeout} />
      </div>
    </div>
  );
};

export default Card;
