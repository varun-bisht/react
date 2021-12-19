import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

function Greeting() {
  return (
    <div>
      <Name />
      <Bio />
    </div>
  );
}

// implicit return
const Name = () => <h1>varun</h1>;

// explicit return
const Bio = () => {
  return <h1>software engineer</h1>;
};

ReactDOM.render(<Greeting></Greeting>, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
