import React from "react";
import { FoodCard } from "../FoodCard";
export const Menu = ({ menuItems, addToOrders }) => {
  const [selectedSubMenu, setSelectedSubMenu] = React.useState(0);
  const [selectedMainMenu, setSelectedMainMenu] = React.useState(0);
  React.useEffect(() => {}, [selectedSubMenu, selectedMainMenu]);
  return (
    <div className="menu-wrap">
      <div className="menu-slider">
        {menuItems.map((eachMenu, index) => {
          return (
            <h2>
              <a
                key={`menu-${index}`}
                onClick={() => {
                  setSelectedMainMenu(index);
                }}
                className={
                  eachMenu.menu_name.toLowerCase().trim() ===
                  menuItems[selectedMainMenu].menu_name.toLowerCase().trim()
                    ? "active"
                    : ""
                }
              >
                {eachMenu.menu_name}
              </a>
            </h2>
          );
        })}
      </div>
      <div className="menu-section-slider">
        {menuItems[selectedMainMenu].menu_sections[0].menu_categories.map(
          (each, index) => {
            return (
              <h2>
                <a
                  key={`submenu-${index}`}
                  onClick={() => {
                    setSelectedSubMenu(index);
                  }}
                >
                  {each.name}
                </a>
              </h2>
            );
          }
        )}
      </div>
      <div className="menu-section-header">
        <h1>
          {menuItems[selectedMainMenu].menu_sections[0].menu_categories[
            selectedSubMenu
          ]
            ? menuItems[selectedMainMenu].menu_sections[0].menu_categories[
                selectedSubMenu
              ].name
            : ""}
        </h1>
      </div>
      {menuItems[selectedMainMenu].menu_sections[0].menu_categories[
        selectedSubMenu
      ].items.map((eachData) => {
        return <FoodCard foodItems={eachData} addToOrders={addToOrders} />;
      })}
    </div>
  );
};
