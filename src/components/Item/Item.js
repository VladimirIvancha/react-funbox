import React, { useState } from "react";

function Item({ item }) {
  const [isActive, setActive] = useState(false);
  const [isActiveMouseLeave, setActiveMouseLeave] = useState(false);

  const classNameText = `item__text ${!item.onStock && "item__text_absent"}`;
  const classNameCircle = !item.onStock ? "item__card-circle item__card-circle_absent" : `item__card-circle ${isActive && "item__card-circle_active"}`;
  const classNameCard = !item.onStock ? "item__card item__card_absent" : `item__card ${isActive && "item__card_active"}`;
  const classNameIntroText = !item.onStock ? "item__card-intro-text item__card-intro-text_absent" : `item__card-intro-text ${isActive && isActiveMouseLeave && "item__card-intro-text_hover"}`;

  function handleMouseLeave() {
    setActiveMouseLeave(true);
  }

  function handleSetActive() {
    setActive(!isActive);
    setActiveMouseLeave(false);
  }

  function handleSetActiveLink() {
    setActive(!isActive);
    setActiveMouseLeave(true);
  }

  return (
    <li className="item" id={item.id}>
      <div className="item__container">
        <div className={classNameCard} onMouseDown={handleSetActive} onMouseLeave={handleMouseLeave}>
          <p className={classNameIntroText}>
          </p>
          <div className="item__card-wrapper">
            <h2 className="item__card-title item__card-title_absent">
              Нямушка
            </h2>
            <h3 className="item__card-taste item__card-taste_absent">
              {item.taste}
            </h3>
            <p className="item__card-set item__card-set_absent">{item.set}</p>
            <p className="item__card-mouse item__card-mouse_absent">
              {item.mouse}
            </p>
            <p className="item__card-satisfied item__card-satisfied_absent">
              {item.satisfied}
            </p>
          </div>
          <div className={classNameCircle}>
            <div className="item__card-wrapper item__card-wrapper_vertical">
              <p className="item__card-weight item__card-weight_absent">
                {item.weight}
              </p>
              <p className="item__card-kg item__card-kg_absent">кг</p>
            </div>
          </div>
        </div>
        <p className={classNameText}>
          {!item.onStock
            ? item.notOnStockText
            : isActive
            ? item.activeText
            : "Чего сидишь? Порадуй котэ,"}
          {!isActive && item.onStock && (
            <button
              className="item__buy-btn"
              onClick={handleSetActiveLink}
            >
              купи
            </button>
          )}
        </p>
      </div>
    </li>
  );
}

export default Item;
