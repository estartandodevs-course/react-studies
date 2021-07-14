import "./styles.scss";

const Button = (props) => {
  return (
    <button id="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export { Button };
