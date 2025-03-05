import React from "react";
import "./App.css";
// import Home from "./pages/Home";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/counterSlice";

import { getCountries } from "./redux/homeSlice";

function App() {
  const dispatch = useDispatch();
  let count = useSelector((state) => state.counter.count);
  let data = useSelector((state) => state.home.homeData);
  let status = useSelector((state) => state.home.status);
  let countries = useSelector((state) => state.home.country);

  return (
    <div className="App">
      <h1>Counter App</h1>
      <button onClick={() => dispatch(decrement())}>Increment</button>
      count: {count}
      <button onClick={() => dispatch(increment())}>Decrement</button>
      <br />
      home : {data.title} <br />
      data : {data.description}
      {/* <Home /> */}
      <button onClick={() => dispatch(getCountries())}>get Country</button>
      <br></br>
      {countries?.map((item, key) => {
        return (
          <div key={key}>
            <span>
              {" "}
              <b>{item.name.common} - </b>
            </span>
            <span>{item.capital} - </span>
            <span>{item.region}</span>
          </div>
        );
      })}

      {status}
    </div>
  );
}

export default App;
