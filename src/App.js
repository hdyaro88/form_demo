import React from "react";
import Form from "./Components/Form/Form";
import { Provider } from "react-redux";
import { store } from "./store/store";
const App = () => {
  return (
    <Provider store={store}>
      <Form />
    </Provider>
  );
};

export default App;
