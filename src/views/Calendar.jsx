import React from 'react';
import useTimeTravel from '../hooks/useTimeTravel.js';

export default function Calendar() {
  const { save, undo, redo, current } = useTimeTravel();

  return (
    <>
      <button onClick={undo}> Undo </button>
      <button onClick={redo}> Redo </button>
      <input
        aria-label="input"
        type="date"
        value={current}
        onChange={(e) => {
          save(e.target.value);
        }}
      ></input>
      <div>{!current ? <h3>Select A Date</h3> : current}</div>
    </>
  );
}
