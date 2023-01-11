import styles from "../../styles/Home.module.css";
import { MainLayout } from "../../components";
import React from "react";
import { IUser } from "../../interfaces/user";
import Link from "next/link";
import AuthModule from "../../components/authModule/authModule";

interface Props {
  users: IUser[];
}

export default function Users({ users }: Props) {
  return (
    <MainLayout>
      <h2>AUTHORIZATION</h2>
      <AuthModule />
      <div className={styles.grid}>
        {users.length > 0 ? (
          users.map((user) => (
            <div
              className={styles.card}
              key={user.id}
              id={`user-id-${user.id}`}
            >
              <Link href={"/users/[id]"} as={`/users/${user.id}`}>
                <div>
                  #{user.id}&nbsp;{user.name}
                </div>
                <div>{user.email}</div>
              </Link>
            </div>
          ))
        ) : (
          <div className={styles.card}>No data came from server</div>
        )}
      </div>
    </MainLayout>
  );
}

export async function getStaticProps() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users: IUser[] = response.status === 200 ? await response.json() : [];
    return {
      props: { users }, // will be passed to the page component as props
    };
  } catch (e) {
    const users: IUser[] = [];
    return {
      props: { users },
    };
  }
}
