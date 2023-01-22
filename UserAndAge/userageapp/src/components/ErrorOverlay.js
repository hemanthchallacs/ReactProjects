import "../components-css/ErrorOverlay.css";


const ErrorOverlay = (props) => {
  const ageErrorComponent = <p>Age Should be greater than equal to 18</p>;
  const nameErrorComponent = <p>useName could not be null</p>;

  let err;
  if (props.overlayValue === 1) err = ageErrorComponent;
  else if (props.overlayValue === 2) err = nameErrorComponent;
  else return;

  return (
    <div
      className="errorOverlay"
      style={{ display: props.overlayValue ? "block" : "none" }}
    >
      <div className="errorBox">
        <p>{err}</p>
        
        <button onClick={props.invalidateOverlay}>OK</button>
      </div>
    </div>
  );
};

export default ErrorOverlay;
