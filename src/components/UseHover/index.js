import useHover from "../../utils/useHover";

const UseHover = () => {
    const [elementRef, isHover] = useHover();
  
    return (
      <div>
        <div
          ref={elementRef}
          style={{ width: 100, height: 100, backgroundColor: 'green'}}
        >
          {isHover ? "Hovering" : "Not hovering"}
        </div>
      </div>
    );
  };

export default UseHover;