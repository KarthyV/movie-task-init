import React, { useState } from "react";
import colors from "../data/colorList";

const ColorGame = () => {
  const [colorList, setColorList] = useState(colors);
  const [colorName, setColorName] = useState("");
  function onSubmit(e) {
    e.preventDefault();
    setColorList([...colorList, colorName]);
    setColorName("");
  }
  return (
    <div>
      <h1>Color Game</h1>
      <form action="#" onSubmit={onSubmit} className="ui form">
        <div className="two fields">
          <input
            placeholder="Enter a Color"
            value={colorName}
            name={colorName}
            style={{ backgroundColor: `${colorName}` }}
            onChange={(e) => setColorName(e.target.value)}
            type="text"
          />
          <button type="submit" className="ui black button">
            Add Color
          </button>
        </div>
      </form>
      <div className="ui stackable four column grid ">
        {colorList.map((color, i) => {
          return (
            <div className="column" key={i}>
              <div className="ui segment colorcard">
                <div
                  style={{
                    backgroundColor: `${color}`,
                    height: "200px",
                    width: "200px",
                  }}
                ></div>
                {color.toUpperCase()}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ColorGame;
