import React, { useState, useContext } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./EditAvatarModal.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function EditAvatarModal({ isOpen, onClose, onUpdateAvatar }) {
  const [avatar, setAvatar] = useState("");

  function handleAvatarChange(e) {
    setAvatar(e.target.value);
  }

  const currentUser = useContext(CurrentUserContext); // suscribe to the context

  React.useEffect(() => {
    if (currentUser && currentUser.avatar) {
      setAvatar(currentUser.avatar);
    }
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = { avatar };

    onUpdateAvatar(user);
  };

  return (
    <ModalWithForm
      title="Cambiar foto de perfil"
      name="avatar-profile"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <img src={currentUser.avatar} alt="Avatar" className="avatar" />

      <input
        id="user-avatar"
        type="url"
        value={avatar}
        onChange={handleAvatarChange}
        className="modal__form-input"
        placeholder="ingresa tu avatar (url)"
        minLength="2"
        maxLength="200"
        required
      />
      <span className="modal__form-error"></span>
      <button type="submit" className="modal__form-register">
        Continuar
      </button>
    </ModalWithForm>
  );
}
export default EditAvatarModal;
