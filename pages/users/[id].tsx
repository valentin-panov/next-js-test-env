import styles from "../../styles/Home.module.css";
import { MainLayout, UserCard } from "../../components";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { NextPageContext } from "next";
import { IUser } from "../../interfaces/user";

interface Props {
  user: IUser | null;
}

export default function User({ user }: Props) {
  const { query } = useRouter();
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  useEffect(() => {
    setIsAdmin(localStorage.getItem("ROLE") === "admin");
  }, []);

  return (
    <MainLayout>
      <h2>Query injection. User role: {isAdmin ? "admin" : "non-admin"}</h2>
      <div className={styles.grid}>
        {user ? (
          <UserCard value={user} />
        ) : (
          <div className={styles.card}>User ID#{query.id} was not found.</div>
        )}
      </div>
    </MainLayout>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  const { id } = context.query;
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/" + id
    );
    const user: IUser = response.status === 200 ? await response.json() : null;
    return {
      props: { user }, // will be passed to the page component as props
    };
  } catch (e) {
    return {
      props: { user: null },
    };
  }
}
