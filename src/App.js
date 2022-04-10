import "./App.css";
import "./firebase/ConfigureFirebase";
import Router from "./Routes/Router";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "../src/Redux/store";
import React, { useState } from "react";
import { UserProvider } from "./Context/ContextFile";

function App() {
  const [searchedData, setSearchedData] = useState([]);
  const [searchedDataFlights, setSearchedDataFlights] = useState([]);
  const [searchedTrains, setSearchedTrains] = useState([]);
  return (
    <div className="App">
      <UserProvider
        value={{
          searchedData,
          setSearchedData,
          searchedDataFlights,
          setSearchedDataFlights,
          searchedTrains,
          setSearchedTrains,
        }}
      >
        <Provider store={store}>
          <ToastContainer />
          <Router />
        </Provider>
      </UserProvider>
    </div>
  );
}

export default App;
