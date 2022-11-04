import styles from "../../../styles/Home.module.css";
import { Footer, Header, Main } from "../../../components";
import React, { ReactNode } from "react";
import Link from "next/link";

interface MainProps {
  children: ReactNode | ReactNode[];
}

const MainLayout: React.FC<MainProps> = ({ children }) => {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <nav>
          <Link href={"/"} className={styles.title}>
            Vulnerable NextApp
          </Link>
          <Link href={"/markup"} className={styles.title}>
            [ Markup Injections ]
          </Link>
          <Link href="/path" className={styles.title}>
            [ Path Manipulation ]
          </Link>
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
