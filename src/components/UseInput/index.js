import useInput from "../../utils/useInput";

const UseInput = () => {
  const input1 = useInput();
  const input2 = useInput();
  const input3 = useInput();

  return (
    <form className="use-input">
      <input type="text" value={input1.value} onChange={input1.onChange} />
      <br />
      <input type="text" value={input2.value} onChange={input2.onChange} />
      <br />
      <input type="text" value={input3.value} onChange={input3.onChange} />
    </form>
  );
};

export default UseInput;
