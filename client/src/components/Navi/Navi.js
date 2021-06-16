import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";
const Navi = () => {
  return (
    <div>
      <Menu inverted size="huge">
        <Menu.Item name="Ana Sayfa" as={NavLink} to="/" />
        <Menu.Item name="Öğrenci Detayları" as={NavLink} to="/studentDetails" />
        <Menu.Item name="Öğrenci Ekle" as={NavLink} to="/addStudent" />
      </Menu>
    </div>
  );
};

export default Navi;
