import Styles from "app/Components/profile/buttons/styles/buttons.module.css";
export default function Buttons() {
  return (
    <div className={Styles.buttons}>
      <Button className={Styles.findFriends}>FIND FRINEDS</Button>
      <Button className={Styles.inviteFriends}>INVITE FRIENDS</Button>
    </div>
  );
}

function Button({className, children }) {
  return <button className={className}>{children}</button>;
}
