import { useState } from "react";

const useToggler = ival => {
  const [state, setState] = useState(ival);
  const toggle = () => {
    setState(!state);
  };
  return [state, toggle];
};

export default useToggler;
