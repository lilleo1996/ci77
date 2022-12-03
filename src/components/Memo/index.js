import { useState, memo } from "react";

const Memo = () => {
  const [value, setValue] = useState({ name: "MindX", age: 20 });

  const updateValue = () => {
    setValue({ name: "MindXx", age: 22 });
  };

  const updateName = () => {
    setValue({ ...value, name: value.name + "x" });
  };

  const increaseAge = () => {
    setValue({ ...value, age: value.age + 1 });
  };

  return (
    <div>
      <div>Check your console</div>
      <button onClick={updateValue}>Change value</button>
      <button onClick={updateName}>Change name</button>
      <button onClick={increaseAge}>Increase age</button>
      <Normal name={value.name} age={value.age} />
      <Memoized name={value.name} age={value.age} />
    </div>
  );
}

const Normal = (props) => {
  console.log("Normal, Re-render");
  return <div>Normal: {props.name + " " + props.age}</div>;
};

const Pure = (props) => {
  console.log("Pure, Re-render");
  return <div>Pure: {props.name + " " + props.age}</div>;
};

const Memoized = memo(Pure);

export default Memo;