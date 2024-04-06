import "./Profile.css";
import profileImage from "../../images/profile.svg";
import pencil from "../../images/pencil.svg";
import pencilEdit from "../../images/pencilEdit.png";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile({ onEditProfileClick, onEditAvatarClick }) {
  const currentUser = useContext(CurrentUserContext);
  //console.log(currentUser);
  return (
    <section className="profile">
      <div className="profile__container-image">
        <img
          className="profile__avatar"
          alt="profile"
          src={currentUser.avatar || profileImage}
        />
        <img
          src={pencil}
          alt="Pencil de editar"
          className="profile__avatar-edit"
          onClick={onEditAvatarClick}
        />
      </div>
      .
      <div className="profile__container">
        <span className="profile__name">
          Hola! {currentUser.name || "usuario"}
        </span>
        <img
          src={pencilEdit}
          alt="Pencil de editar"
          className="profile__name-edit"
          onClick={onEditProfileClick}
        />
      </div>
    </section>
  );
}
export default Profile;
