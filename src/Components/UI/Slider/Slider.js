import styles from "./Slider.module.css";
const Slider = (props) => {
  let Css = styles.round;
  if (props.Checked) {
    Css = `${styles.round} ${styles.Checked}`;
  } else {
    Css = `${styles.round} ${styles.unChecked}`;
  }
  return (
    <div
      onClick={props.clickHandler}
      className={styles.slider}
      style={{ background: props.Checked ? "#1269ff" : "" }}
    >
      <div className={Css}></div>
    </div>
  );
};
export default Slider;
