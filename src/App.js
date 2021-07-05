import React, { useState } from "react";
import Form from "./Components/Form/Form";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";
import "./App.css";
const App = () => {
  const [showSidebar, setshowSidebar] = useState(false);
  const togglerSidebar = () => {
    console.log("changed");
    setshowSidebar(!showSidebar);
  };
  return (
    <Provider store={store}>
      <Header showSidebar={togglerSidebar} />
      <Sidebar style={{ display: showSidebar ? "block" : "" }} />
      <div className="form_section">
        <Form />
      </div>
    </Provider>
  );
};

export default App;
