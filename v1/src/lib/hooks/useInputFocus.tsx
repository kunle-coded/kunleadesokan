import { useState } from "react";

function useInputFocus() {
  const [isFocus, setIsFocus] = useState(false);

  const onFocus = () => {
    setIsFocus(true);
  };
  const onBlur = () => {
    setIsFocus(false);
  };

  return { isFocus, onFocus, onBlur };
}

export default useInputFocus;
