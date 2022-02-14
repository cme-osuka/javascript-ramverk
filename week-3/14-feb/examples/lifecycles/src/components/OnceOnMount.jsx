import React, { useEffect } from "react";

function OnceOnMount() {

  useEffect(() => {
    console.log("MyComponent har mountas")

    return () => {
      console.log("MyComponent ska mountas av (Cleanup)")
    }
  }, [])


  return (
    <div>MyComponent</div>
  )
}

export default OnceOnMount