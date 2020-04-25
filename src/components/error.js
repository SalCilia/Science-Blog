import React from "react";

function Error({ error, setError }) {
 
setTimeout(() => {
    setError(null)
}, 3000);

  function display() {
    if (error) {
      return <h1 style={{ color: 'red' }}>{error}</h1>;
    } else {
      return <></>;
    }
  }
  return display();
}

export default Error;
