import { useRef } from "react";
import React from "react";
import { useDispatch } from "react-redux";
import { campaignDataActions } from "../../../store/store";
import styles from "./Campaign.module.css";
const CampaignInfo = React.memo((props) => {
  const dispatch = useDispatch();
  const cmp_name = useRef();
  const cmp_platform = useRef();
  const cmp_description = useRef();
  const cmp_st_date = useRef();
  const cmp_ed_date = useRef();
  const selectPlatformHandler = (event) => {
    const index = event.target.options.selectedIndex;
    cmp_platform.current.value = event.target.options[index].value;
  };
  if (props.submitisClicked) {
    const campaign_details = {
      campaign_name: cmp_name.current.value,
      campaign_platform: cmp_platform.current.value,
      campaign_description: cmp_description.current.value,
      campaign_start_date: cmp_st_date.current.value,
      campaign_end_date: cmp_ed_date.current.value,
    };
    dispatch(campaignDataActions.addcmpInfoData(campaign_details));
  }
  return (
    <div className={styles.campaign_info}>
      <div className={styles.index}>
        <label className={styles.id}> 1 </label>
        <h3 style={{ display: "inline" }}>Campaign Info</h3>
      </div>
      <br />
      <div>
        <label htmlFor="cmp_name">Campaign Name</label>
        <br />
        <input
          ref={cmp_name}
          id="cmp_name"
          type="text"
          required
          placeholder="Capaign 1.0"
        />
      </div>
      <div>
        <label htmlFor="cmp_platform">Select Platform</label>
        <br />
        <select
          ref={cmp_platform}
          onChange={selectPlatformHandler}
          id="cmp_platform"
          name="platforms"
        >
          <option value="not selected">...please select</option>
          <option value="Instagram">instagram</option>
          <option value="Facebook">facebook</option>
          <option value="Twitter">twitter</option>
        </select>
      </div>
      <div>
        <label htmlFor="cmp_desc">Campaign Description</label>
        <br />
        <input
          ref={cmp_description}
          id="cmp_desc"
          type="text"
          required
          placeholder="Awareness Campaign"
        />
      </div>
      <div>
        <label htmlFor="cmp_st_date">Start Date</label>
        <br />
        <input ref={cmp_st_date} id="cmp_st_date" type="Date" required />
      </div>
      <div>
        <label htmlFor="cmp_ed_date">End Date</label>
        <br />
        <input ref={cmp_ed_date} id="cmp_ed_date" type="Date" required />
      </div>
    </div>
  );
});
export default CampaignInfo;
