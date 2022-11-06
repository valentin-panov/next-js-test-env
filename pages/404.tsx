import Link from "next/link";
import styles from "../styles/Home.module.css";
import { MainLayout } from "../components";

export default function Error404() {
  return (
    <MainLayout>
      <h2 className={styles.error}>Error 404</h2>
      <p className={styles.description}>
        Please{" "}
        {/*<Link href={`${process.env.HOST_URL}`} className={styles.link}>*/}
        <Link href={`/`} className={styles.link}>
          go back
        </Link>{" "}
        to safety
      </p>
    </MainLayout>
  );
}
