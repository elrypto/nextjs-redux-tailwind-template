import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOn, faSpinner, faToggleOff } from '@fortawesome/free-solid-svg-icons'

interface RealTimeToggleProps {
  startingState: boolean;
  togglerFunction: Function;
  howLongToRun?: number;
}


export const RealTimeToggle = ({ startingState, howLongToRun = 10000, togglerFunction }: RealTimeToggleProps) => {
  const [rtIsOn, setRtIsOn] = useState(startingState);

  return (
    <>
      {rtIsOn ?
        <>
          <FontAwesomeIcon className="fa-spin mb-1" size="lg" icon={faSpinner} />
          <span className="ml-2 text-gray-400">
            <button
              data-testid="rtButton"
              className="focus:outline-none hover:text-gray-200"
              aria-label="toggle real time on"
              onClick={() => {
                setRtIsOn(!rtIsOn);
                togglerFunction();
              }}
              type="button"><FontAwesomeIcon size="2x" icon={faToggleOn} /></button>
          </span>
        </>
        :
        <>
          <FontAwesomeIcon className="text-gray-600 mb-1" size="lg" icon={faSpinner} />
          <span className="ml-2">
            <button
              data-testid="rtButton"
              className="focus:outline-none hover:text-gray-400"
              aria-label="toggle real time off"
              onClick={() => {
                setRtIsOn(!rtIsOn);
                togglerFunction();
              }}
              type="button"><FontAwesomeIcon size="2x" icon={faToggleOff} /></button>
          </span>
        </>
      }
    </>
  )
}
