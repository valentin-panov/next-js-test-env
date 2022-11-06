import styles from "../../styles/Home.module.css";
import { MainLayout } from "../../components";
import React from "react";
import { useRouter } from "next/router";
import { NextPageContext } from "next";
import { IUser } from "../../interfaces/user";

interface Props {
  user: IUser | null;
}

export default function User({ user }: Props) {
  const { query } = useRouter();
  return (
    <MainLayout>
      <h2>Query injection</h2>
      <div className={styles.grid}>
        {user ? (
          <div className={styles.card}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.address.city}</p>
          </div>
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
