import styles from "@/components/ProfilePage/Buttons/styles/buttons.module.css";

export default function Buttons() {
  return (
    <div className={styles.buttons}>
      <Button className={styles.findFriends}>FIND FRIENDS</Button>
      <Button className={styles.inviteFriends}>INVITE FRIENDS</Button>
    </div>
  );
}

function Button({ className, children }) {
  return <button className={className}>{children}</button>;
}
