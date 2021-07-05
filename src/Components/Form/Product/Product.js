import styles from "./Product.module.css";
import React from "react";
import Slider from "../../UI/Slider/Slider";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { campaignDataActions } from "../../../store/store";
const Product = React.memo((props) => {
  const [Checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const [List, setList] = useState([]);
  const [isClicked, setisClicked] = useState(false);
  const product_name = useRef();
  const product_cost = useRef();
  const product_link = useRef();
  const addProducthandler = () => {
    setisClicked(true);
    const product = {
      product_name: product_name.current.value,
      product_cost: `₹${product_cost.current.value}`,
      product_link: product_link.current.value,
    };
    if (
      !product.product_name ||
      !product.product_cost ||
      !product.product_link
    ) {
      return;
    }
    setList((prevList) => {
      return [...prevList, product];
    });
  };
  const removeProductHandler = () => {
    setList([]);
  };
  const clickHandler = () => {
    setChecked(!Checked);
  };
  if (props.submitisClicked) {
    const Product_details = {
      products: List,
      self_order_for_review: Checked,
    };
    dispatch(campaignDataActions.addprodInfoData(Product_details));
  }
  return (
    <div className={styles.product_info}>
      <div className={styles.index}>
        <label className={styles.id}> 2 </label>
        <h3 style={{ display: "inline" }}>Product/Service</h3>
      </div>
      <div>
        <label>Product/Service Name</label>
        <br />
        <input required ref={product_name} type="text" placeholder="T-shirt" />
      </div>
      <div>
        <label>Cost</label>
        <br />
        <input required ref={product_cost} type="number" placeholder="₹ 500" />
      </div>
      <div>
        <label>Product Link</label>
        <br />
        <input
          required
          ref={product_link}
          type="text"
          placeholder="productLink.com"
        />
      </div>
      <br />
      <span onClick={addProducthandler} style={{ color: "skyblue" }}>
        Add products+
      </span>
      <span onClick={removeProductHandler} style={{ color: "grey" }}>
        &nbsp; &nbsp;Remove
      </span>
      <br />
      {List.length === 0 && isClicked && <p>Empty Fields Not Allowed</p>}
      {List.length !== 0 && (
        <ul>
          {" "}
          {List.map((product) => {
            return (
              <li key={Math.random()}>
                <span>{product.product_name}</span>
                <span>{product.product_cost}</span>
                <a href={product.product_link}>
                  <span>{product.product_link}</span>
                </a>
              </li>
            );
          })}{" "}
        </ul>
      )}
      <Slider clickHandler={clickHandler} Checked={Checked} />
      <br />
      <h4>Self Order for review</h4>
    </div>
  );
});
export default Product;
