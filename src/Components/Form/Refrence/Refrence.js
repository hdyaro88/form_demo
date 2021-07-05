import ImageHolder from "./Image_holder";
import styles from "./Refrence.module.css";
import React from "react";
const Refrence = React.memo((props) => {
  return (
    <div className={styles.refrence}>
      <div className={styles.index}>
        <label className={styles.id}> 4 </label>
        <h3 style={{ display: "inline" }}>Refrence</h3>
      </div>
      <br />
      <div className={styles.info}>
        <label className={styles.info_ic}> i </label>
        <h3>Added refrence photos/video to help out influencers!</h3>
      </div>
      <div className={styles.imgbox}>
        <ImageHolder submitisClicked={props.submitisClicked} id="1" />
        <ImageHolder submitisClicked={props.submitisClicked} id="2" />
        <ImageHolder submitisClicked={props.submitisClicked} id="3" />
        <ImageHolder submitisClicked={props.submitisClicked} id="4" />
        <ImageHolder submitisClicked={props.submitisClicked} id="5" />
      </div>
    </div>
  );
});
export default Refrence;
