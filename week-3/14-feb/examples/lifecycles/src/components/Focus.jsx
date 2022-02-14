import React, { useEffect, useRef } from "react";

function Focus() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, [])

  return <input type="text" ref={inputRef} />
}

export default Focus;