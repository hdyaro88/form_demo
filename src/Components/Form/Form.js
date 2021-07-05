import CampaignInfo from "./Campaign_info/Capaign-Info";
import Product from "./Product/Product";
import Deliverables from "./Deliverables/Deliverables";
import Refrence from "./Refrence/Refrence";
import styles from "./Form.module.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Spinner from "../UI/Slider/Loader/Spinner";
const Form = () => {
  const [submitClicked, setsubmitClicked] = useState(false);
  const data = useSelector((state) => state.campaignData);
  const status = useSelector((state) => state.status);
  const submitHandler = (event) => {
    event.preventDefault();
    setsubmitClicked(true);
  };
  useEffect(() => {
    const sendData = async () => {
      const response = await fetch(
        "https://react-9e703-default-rtdb.firebaseio.com/camapignDetails.json",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Some Error Occured");
      }
      window.location.reload();
    };
    if (
      submitClicked &&
      data.campaignInfo &&
      data.productInfo &&
      data.deliverablesInfo
    ) {
      sendData();
      setsubmitClicked(false);
    }
  }, [data, submitClicked]);
  return (
    <>
      <form onSubmit={submitHandler} className={styles.form}>
        <CampaignInfo submitisClicked={submitClicked} />
        <Product submitisClicked={submitClicked} />
        <Deliverables submitisClicked={submitClicked} />
        <Refrence submitisClicked={submitClicked} />
        {status.imageStatus === "pending" && <Spinner />}
        <button
          disabled={status.imageStatus === "pending"}
          className={styles.submit}
        >
          {status.imageStatus === "pending"
            ? "Files Uploading..."
            : "Save Preferences"}
        </button>
      </form>
    </>
  );
};
export default Form;
