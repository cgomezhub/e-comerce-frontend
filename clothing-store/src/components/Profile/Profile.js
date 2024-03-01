import "./Profile.css";
import profile from "../../images/profile.svg";
import pencil from "../../images/pencil.svg";
import pencilEdit from "../../images/pencilEdit.png";

function Profile({ onEditProfileClick, onEditAvatarClick }) {
  // const currentUser = useContext(CurrentUserContext);

  return (
    <section className="profile">
      <div className="profile__container-image">
        <img src={profile} alt="profile" className="navigation__icon" />
        <img
          src={pencil}
          alt="Pencil de editar"
          className="profile__avatar-edit"
          onClick={onEditAvatarClick}
        />
      </div>
      <div className="profile__container">
        <span className="profile__name">Hola Carlos</span>
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
