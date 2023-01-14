import styles from "../../../styles/Home.module.css";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import {IUser} from "../../../interfaces/IUser";
import {AuthModule, MainLayout} from "../../../components";

/**
 * Function gets users array from remote.
 */
const fetchUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users: IUser[] = response.status === 200 ? await response.json() : [];
    return users;
  } catch (e) {
    return [];
  }
};

/**
 * Component securely fetch sensitive data on frontend side.
 */
export default function Users() {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    setIsAdmin(localStorage.getItem("ROLE") === "admin");
  }, []);

  useEffect(() => {
    if (isAdmin) {
      fetchUsers().then((data) => {
        setUsers(data);
      });
    }
  }, [isAdmin]);

  return (
    <MainLayout>
      <h2>SECURE FETCH</h2>
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

/**
 * inactive ss fetching.
 */
// export async function getStaticProps() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users: IUser[] = response.status === 200 ? await response.json() : [];
//     return {
//       props: { users }, // will be passed to the page component as props
//     };
//   } catch (e) {
//     const users: IUser[] = [];
//     return {
//       props: { users },
//     };
//   }
// }
