import  { useReducer, useContext, useRef, useState, useEffect } from "react";
import "./lowerdiv.css";
import { ThemeContextProvider } from "./ThemeContextProvide";

function Lowerdiv() {
  const [currcolor, iscurrcolor] = useState("#FFFFFF");
  const color_change = useRef();
  const color = useContext(ThemeContextProvider);


  const reducer = (state, action) => {
    switch (action.type) {
      case "Increament":
        return { ...state, count: state.count + 1 };
      case "Decreament":
        return { ...state, count: state.count - 1 };
      case "Reset":
        return { ...state, count: 0 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  useEffect(() => {
    color_change.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div
      className="bottom_page"
      ref={color_change}
      onDoubleClick={() => {
        const len = color.length;
        const i = Math.floor(Math.random() * len);
        iscurrcolor(color[i]);
        color_change.current.style.backgroundColor = color[i];
      }}
    >
      <h1 className="theme_name">Theme: {currcolor}</h1>
      <div className="button_container">
        <div className="reset_button">
          <button
            onDoubleClick={(e) => {
              e.stopPropagation();
            }}
            onClick={(e) => {
              e.stopPropagation();
              dispatch({ type: "Reset" });
            }}
          >
            Reset
          </button>
        </div>
        <div className="button_and_count">
          <button
            onDoubleClick={(e) => {
              e.stopPropagation();
            }}
            onClick={(e) => {
              e.stopPropagation();
              dispatch({ type: "Increament" });
            }}
          >
            Increament
          </button>
          <p>
            Count: {state.count}
          </p>
          <button
            onDoubleClick={(e) => {
              e.stopPropagation();
            }}
            onClick={(e) => {
              e.stopPropagation();
              dispatch({ type: "Decreament" });
            }}
          >
            Decreament
          </button>
        </div>
      </div>
    </div>
  );
}

export default Lowerdiv;
