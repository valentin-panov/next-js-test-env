import { MenuLink } from "../../index";
import React from "react";

const Menu = () => {
  return (
    <nav>
      <MenuLink link={"/"} text={"Vulnerable NextApp"}></MenuLink>
      <MenuLink link="/test" text={"TEST"}></MenuLink>
      <MenuLink link={"/markup"} text={"Markup"}></MenuLink>
      <MenuLink link="/path" text={"Path"}></MenuLink>
      <MenuLink link="/queryInjection?payload=" text={"URL"}></MenuLink>
      <MenuLink link="/payloads" text={"Cookies"}></MenuLink>
      <MenuLink link="/users" text={"Auth"}></MenuLink>
      <style jsx>{`
        nav {
          position: fixed;
          height: 60px;
          left: 0;
          top: 0;
          right: 0;
          background: #0070f3;
          display: flex;
          justify-content: flex-start;
          gap: 2rem;
          padding: 1rem;
          align-items: center;
        }

        nav a {
          color: #eaeaea;
          text-decoration: none;
        }
      `}</style>
    </nav>
  );
};

export default Menu;
