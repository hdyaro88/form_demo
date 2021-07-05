import styles from "./Sidebar.module.css";
import { MdDashboard, MdMessage, MdPayment } from "react-icons/md";
import { IoIosStats } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { IoListSharp, IoAnalyticsSharp } from "react-icons/io5";
import { FiThumbsUp } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { BiMessageAltError } from "react-icons/bi";
const Sidebar = (props) => {
  return (
    <div className={styles.sidebar} style={props.style}>
      <header>
        <h1>Growlance</h1>
      </header>
      <main>
        <ul className={styles.tab_section}>
          <li>
            <label>
              <MdDashboard color="white" />
            </label>
            <span>Dashboard</span>
          </li>
          <li>
            <label>
              <IoIosStats color="white" />
            </label>
            <span>Compaign</span>
          </li>
          <li>
            <label>
              <BsSearch color="white" />
            </label>
            <span>Search</span>
          </li>
          <li>
            <label>
              <IoListSharp color="white" />
            </label>
            <span>List</span>
          </li>
          <li>
            <label>
              <MdMessage color="white" />
            </label>
            <span>Message</span>
          </li>
          <li>
            <label>
              <IoAnalyticsSharp color="white" />
            </label>
            <span>Analyse</span>
          </li>
          <li>
            <label>
              <FiThumbsUp color="white" />
            </label>
            <span>Approval</span>
          </li>
          <li>
            <label>
              <MdPayment color="white" />
            </label>
            <span>Payment</span>
          </li>
        </ul>
      </main>
      <footer>
        <li>
          <label>
            <CgProfile color="white" />
          </label>
          <span>Profile</span>
        </li>
        <li>
          <label>
            <BiMessageAltError color="white" />
          </label>
          <span>Support</span>
        </li>
      </footer>
    </div>
  );
};
export default Sidebar;
