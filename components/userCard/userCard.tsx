import React from "react";
import styles from "../../styles/Home.module.css";
import { IUser } from "../../interfaces/IUser";

interface VulnerableProps {
  value: IUser;
}

const UserCard: React.FC<VulnerableProps> = ({ value }) => {
  return (
    <div className={styles.card}>
      <p>{value.name}</p>
      <p>{value.email}</p>
      <p>{value.phone}</p>
      <p>{value.address.city}</p>
    </div>
  );
};

export default UserCard;
