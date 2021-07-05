import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./Header.module.css";
const Header = (props) => {
  return (
    <div className={styles.header}>
      <span>Growlance</span>
      <label>
        <GiHamburgerMenu size="1.5rem" onClick={props.showSidebar} />
      </label>
    </div>
  );
};
export default Header;
