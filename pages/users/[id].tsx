import styles from "../../styles/Home.module.css";
import { MainLayout } from "../../components";
import React, { lazy, Suspense, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { NextPageContext } from "next";
import { IUser } from "../../interfaces/IUser";
import { Box, LinearProgress } from "@mui/material";

const UserCard = lazy(() => import("../../components/userCard/userCard"));
const Redirect = lazy(
  () => import("../../components/nextRedirect/nextRedirect")
);

interface Props {
  user: IUser | null;
}

export default function User({ user }: Props) {
  const { query } = useRouter();
  const [isAdmin, setIsAdmin] = useState<string>("idle");

  useEffect(() => {
    setIsAdmin(
      localStorage.getItem("ROLE") === "admin" ? "admin" : "non-admin"
    );
  }, []);

  return (
    <MainLayout>
      <h2>Query injection. User role: {isAdmin ? "admin" : "non-admin"}</h2>
      <Suspense
        fallback={
          <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box>
        }
      >
        {isAdmin === "non-admin" ? (
          <Redirect to="/users" />
        ) : (
          <div className={styles.grid}>
            {user ? (
              <UserCard value={user} />
            ) : (
              <div className={styles.card}>
                User ID#{query.id} was not found.
              </div>
            )}
          </div>
        )}
      </Suspense>
    </MainLayout>
  );
}

// TODO inject the check into the =>
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
