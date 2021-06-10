import logo from "./logo.svg";
import "./App.css";
// import Table from "./Components/Table";
import Button from "./Components/Button";

const buttonClick = () => {
  console.log("Button has been clicked");
};

function App() {
  return (
    <div className="App">
      {/* <Table /> */}

      <Button
        label={"Read Text"}
        onClick={() => {}}
        color="info"
        tooltip="Readable text"
        onLongPress={() => {}}
        size="sm"
        disabled={false}
      />
      <Button
        label={"Add New Data"}
        onClick={() => {}}
        color="success"
        tooltip="Add new Entry"
        onLongPress={() => {}}
        size="md"
        disabled={false}
      />
      <Button
        label={"Delete"}
        onClick={() => {}}
        color="danger"
        tooltip="Text message"
        onLongPress={() => {}}
        size="xlg"
        disabled={false}
      />
    </div>
  );
}

export default App;
