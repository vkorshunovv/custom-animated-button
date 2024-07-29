import "./App.css";
import { useRef, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <AnimatedButton />
    </div>
  );
}

export default App;

const AnimatedButton = () => {
  const btnRef = useRef(null);

  function handleBtnClick() {
    btnRef.current.classList.add("btn-animate");
    setTimeout(() => {
      btnRef.current.classList.remove("btn-animate");
      btnRef.current.classList.add("btn-hide");
    }, 3000);
  }

  useEffect(() => {
    const btnElem = btnRef.current;
    const addBounceClass = () => {
      btnElem.classList.add("btn-bounce");
    };

    const timeoutId = setTimeout(addBounceClass, 4000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="style-container">
      <button
        ref={btnRef}
        className=" main-btn btn-animate-start"
        onClick={handleBtnClick}
      ></button>
    </div>
  );
};
