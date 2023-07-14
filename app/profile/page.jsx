import FriendSuggestions from "../Components/profile/friend-suggestions/friend-suggestions";
import Friends from "../Components/profile/friends/friends";
import Buttons from "../Components/profile/buttons/buttons";
const Profile = (props) => {
  return (
    <main>
      <FriendSuggestions />
      <Friends />
      <Buttons />
    </main>
  );
};

export default Profile;
