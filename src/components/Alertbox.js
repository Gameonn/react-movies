import classes from "../styles/Alertbox.module.css";

const Alertbox = ({ message }) => {
  return (
    <div className={`${classes["alert"]} ${classes["alert-danger"]}`}>
      <strong>{message}</strong>
    </div>
  );
};

export default Alertbox;
