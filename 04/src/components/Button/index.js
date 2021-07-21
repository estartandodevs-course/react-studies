import { useEffect } from "react";
import "./styles.scss";

const Button = (props) => {
  useEffect(() => {
    return () => console.log(`FUI! -> ${props.children}`);
  }, [props.children]);

  return (
    <button id="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export { Button };
