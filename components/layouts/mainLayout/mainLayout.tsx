import styles from "../../../styles/Home.module.css";
import { Footer, Header, Main, MenuLink } from "../../../components";
import React, { ReactNode } from "react";

interface MainProps {
  children: ReactNode | ReactNode[];
}

const MainLayout: React.FC<MainProps> = ({ children }) => {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <nav>
          <MenuLink link={"/"} text={"Vulnerable NextApp"}></MenuLink>
          <MenuLink link={"/markup"} text={"[ Markup Injections ]"}></MenuLink>
          <MenuLink link="/path" text={"[ Path Manipulation ]"}></MenuLink>
          <MenuLink link="/payloads" text={"[ Payloads ]"}></MenuLink>
          <MenuLink link="/users" text={"[ REST ]"}></MenuLink>
        </nav>

        <Main>{children}</Main>
        <Footer />
      </div>
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

        main {
          margin-top: 60px;
          padding: 1rem;
        }
      `}</style>
    </>
  );
};

export default MainLayout;
