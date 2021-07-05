import { useRef, useState } from "react";
import React from "react";
import { useDispatch } from "react-redux";
import { campaignDataActions } from "../../../store/store";
import styles from "./Deliverables.module.css";
const Deliverables = React.memo((props) => {
  const [List, setList] = useState([]);
  const dispatch = useDispatch();
  const [isClicked, setisClicked] = useState(false);
  const deliverable_instruction = useRef();
  const deliverable_type = useRef();
  const deliverable_do = useRef();
  const deliverable_dont = useRef();
  const selectDeliverableHandler = (event) => {
    const index = event.target.options.selectedIndex;
    deliverable_type.current.value = event.target.options[index].value;
  };
  const addDeliverablesHandler = () => {
    setisClicked(true);
    const deliverable = {
      deliverable_instruction: deliverable_instruction.current.value,
      deliverable_do: deliverable_do.current.value,
      deliverable_dont: deliverable_dont.current.value,
    };
    if (
      !deliverable.deliverable_instruction ||
      !deliverable.deliverable_do ||
      !deliverable.deliverable_dont
    ) {
      return;
    }
    setList((prevList) => {
      return [...prevList, deliverable];
    });
  };
  const removeDeliverablesHandler = () => {
    setList([]);
  };
  if (props.submitisClicked) {
    const Deliverables = {
      deliverable_type: deliverable_type.current.value,
      deliverables: List,
    };
    dispatch(campaignDataActions.adddeliverablesInfoData(Deliverables));
  }
  return (
    <div className={styles.deliverables}>
      <div className={styles.index}>
        <label className={styles.id}> 3 </label>
        <h3 style={{ display: "inline" }}>Deliverables</h3>
      </div>
      <label>Deliverable Type</label>
      <br />
      <select onChange={selectDeliverableHandler} ref={deliverable_type}>
        <option value="Story">Story</option>
      </select>
      <br />
      <div>
        <label>Add Instructions</label>
        <br />
        <textarea
          ref={deliverable_instruction}
          type="text"
          required
          placeholder="Add clear Instructions"
          rows="4"
          cols="50"
        />
      </div>
      <div>
        <label>Add do's</label>
        <br />
        <textarea
          ref={deliverable_do}
          type="text"
          required
          placeholder="PreAdded Example Do's"
          rows="4"
          cols="30"
        />
      </div>
      <div>
        <label>Add dont's</label>
        <br />
        <textarea
          ref={deliverable_dont}
          type="text"
          required
          placeholder="PreAdded Example Dont's"
          rows="4"
          cols="30"
        />
      </div>
      <br />
      <span onClick={addDeliverablesHandler} style={{ color: "skyblue" }}>
        Add Deliverables +
      </span>
      <span onClick={removeDeliverablesHandler} style={{ color: "grey" }}>
        &nbsp; &nbsp;Remove
      </span>
      <br />
      {List.length === 0 && isClicked && <p>Empty Fields Not Allowed</p>}
      {List.length !== 0 && (
        <ul>
          {" "}
          {List.map((deliverable) => {
            return (
              <li key={Math.random()}>
                <span>{deliverable.deliverable_instruction}</span>
                <span>{deliverable.deliverable_do}</span>
                <span>{deliverable.deliverable_dont}</span>
              </li>
            );
          })}{" "}
        </ul>
      )}
    </div>
  );
});
export default Deliverables;
