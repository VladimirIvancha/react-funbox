import React from "react";
import { initialItemsInfo } from "../../utils/initial-data";
import Item from "../Item/Item";

function App() {
  return (
    <div className="app">
      <h1 className="app__title">Ты сегодня покормил кота?</h1>
      <div className="app__container">
        <ul className="app__items">
          {
            initialItemsInfo.map(item => 
              (
                <Item 
                  key={item.id}
                  item={item}
                />
              ) 
            )
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
