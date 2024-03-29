import styles from "../../styles/Home.module.css";
import { AuthModule, MainLayout } from "../../components";
import React, { useEffect, useState } from "react";
import { IUser } from "../../interfaces/IUser";
import Link from "next/link";

interface Props {
  users: IUser[];
}

export default function Users({ users }: Props) {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  useEffect(() => {
    setIsAdmin(localStorage.getItem("ROLE") === "admin");
  }, []);

  return (
    <MainLayout>
      <h2>VULNERABLE AUTHORIZATION</h2>
      <AuthModule admin={{ isAdmin, setIsAdmin }} />
      {isAdmin ? (
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
      ) : (
        <div>You must have admin role to see users data</div>
      )}
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
