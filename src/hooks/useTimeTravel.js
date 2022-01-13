import { useState } from 'react';

export default function useTimeTravel() {
  const [dates, setDates] = useState([]);
  const [index, setIndex] = useState(-1);

  let current = dates[index];

  //look synchronous but are batched behind the scenes.
  //basing it off of current index.
  const save = (value) => {
    //setDates((prevState) => [...prevState, value]);
    setDates((prevState) => {
      return [
        ...prevState.slice(0, index + 1),
        value,
        ...prevState.slice(index + 1, dates.length + 1),
      ];
    });
    setIndex((prevIndex) => prevIndex + 1);
  };

  const undo = () => {
    setIndex((prevIndex) => prevIndex - 1);
  };
  const redo = () => {
    setIndex((prevIndex) => prevIndex + 1);
  };

  return { save, undo, redo, current };
}
