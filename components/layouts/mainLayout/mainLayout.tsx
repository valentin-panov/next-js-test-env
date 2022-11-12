import styles from "../../../styles/Home.module.css";
import { Footer, Header, Main, MenuLink } from "../../../components";
import React, { ReactNode } from "react";
import Head from "next/head";

interface MainProps {
  children: ReactNode | ReactNode[];
  keywords?: string;
}

const MainLayout: React.FC<MainProps> = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content={"vulnerable, nextjs, security" + keywords && `, ${keywords}`}
        />
        <meta name={"author"} content={"Valentin Panov"} />
        <title>Vulnerable NextJS App</title>
      </Head>
      <div className={styles.container}>
        <Header />
        <nav>
          <MenuLink link={"/"} text={"Vulnerable NextApp"}></MenuLink>
          <MenuLink link={"/markup"} text={"[ Markup  ]"}></MenuLink>
          <MenuLink link="/path" text={"[ Path  ]"}></MenuLink>
          <MenuLink link="/queryInjection?payload=" text={"[ URL ]"}></MenuLink>
          <MenuLink link="/payloads" text={"[ Cookies ]"}></MenuLink>
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
