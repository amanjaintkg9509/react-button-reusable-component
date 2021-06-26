import logo from "./logo.svg";
import "./App.css";
// import Table from "./Components/Table";
import Button from "./Components/Button";
import Input from "./Components/Input";

const inputHandle = (value) => {
  console.log("Parent Input change", value);
};

function App() {
  return (
    <div className="App">
      {/* <Table /> */}
      <Input
        disabled={false}
        type={"search"}
        placeholder={"Enter Your Name"}
        action={inputHandle}
      />
      {/* <Button
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
      /> */}
    </div>
  );
}

export default App;
