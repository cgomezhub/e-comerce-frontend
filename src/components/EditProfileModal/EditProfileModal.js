import React, { useState, useContext } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

import "./EditProfileModal.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function EditProfileModal({
  isOpen,
  onClose,
  onUpdateUser,
  onEditProfileClick,
}) {
  const [name, setName] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  const currentUser = useContext(CurrentUserContext);

  React.useEffect(() => {
    if (currentUser && currentUser.name && currentUser.about) {
      setName(currentUser.name);
    }
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = { name };

    onUpdateUser(user);
  };

  return (
    <ModalWithForm
      title="Cambiar tu nombre"
      name="edit-profile"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      onEditProfileClick={onEditProfileClick}
    >
      <input
        id="user-name"
        type="name"
        value={name}
        onChange={handleNameChange}
        className="modal__form-input"
        placeholder="ingresa tu nombre de usuario"
        minLength="4"
        maxLength="25"
        required
      />
      <span className="modal__form-error"></span>
      <button
        id="user-login"
        type="submit"
        className="modal__form-register"
        onClick={onClose}
      >
        Continuar
      </button>
    </ModalWithForm>
  );
}
export default EditProfileModal;
