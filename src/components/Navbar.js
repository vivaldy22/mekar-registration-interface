import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const Navbar = ({ onLogout, auth }) => {
  return (
    <div style={{ backgroundColor: "white" }}>
      {auth ? (
        <Menu attached="top" size="massive" color="orange" pointing secondary>
          <Menu.Item as={NavLink} to="/home" name="home">
            <Icon name="home" />
            Home
          </Menu.Item>
          <Menu.Item as={NavLink} to="/users" name="users">
            <Icon name="user" />
            Users
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item name="logout" onClick={onLogout}>
              <Icon name="log out" />
              Logout
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Navbar;
