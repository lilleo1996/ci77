import { useRef } from 'react';

const UseRef = () => {
    const inputRef = useRef(null);

	const handleFocus = () => {
		// document.getElementById("myTxt").focus()
        inputRef.current.focus();
	}

	return (
		<div>
			<input ref={inputRef} id="myTxt" type="text" />
			<button onClick={handleFocus}>Focus</button>
		</div>
	)
}

export default UseRef;