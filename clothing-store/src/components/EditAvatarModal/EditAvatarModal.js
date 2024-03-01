import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./EditAvatarModal.css";
import profilAvatar from "../../images/avatar.svg";
//import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditAvatarModal({ isOpen, onClose, onUpdateUser }) {
  const [avatar, setAvatar] = useState("");

  function handleNameChange(e) {
    setAvatar(e.target.value);
  }
  /*
  const currentUser = useContext(CurrentUserContext); // suscribe to the context

  React.useEffect(() => {
    if (currentUser && currentUser.name && currentUser.about) {
      setName(currentUser.name);
    }
  }, [currentUser]);

  */

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = { avatar };

    onUpdateUser(user);
  };

  return (
    <ModalWithForm
      title="Cambiar foto de perfil"
      name="avatar-profile"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <img src={profilAvatar} alt="Avatar" className="profile__avatar" />

      <input
        id="user-name"
        type="url"
        value={avatar}
        onChange={handleNameChange}
        className="modal__form-input"
        placeholder="ingresa tu avatar (url)"
        minLength="2"
        maxLength="200"
        required
      />
      <span className="modal__form-error"></span>
      <button id="user-login" type="submit" className="modal__form-register">
        Continuar
      </button>
    </ModalWithForm>
  );
}
export default EditAvatarModal;
