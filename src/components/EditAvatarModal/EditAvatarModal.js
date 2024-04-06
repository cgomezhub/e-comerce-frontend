import React, { useState, useContext } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./EditAvatarModal.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import pencil from "../../images/pencil.svg";
import profile from "../../images/profile.svg";

function EditAvatarModal({
  isOpen,
  onClose,
  onUpdateAvatar,
  onUpdateAvatarByFile,
}) {
  const [avatar, setAvatar] = useState("");

  function handleAvatarChange(e) {
    setAvatar(e.target.value);
  }

  const currentUser = useContext(CurrentUserContext); // suscribe to the context
  // console.log(currentUser);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = { avatar };

    onUpdateAvatar(user);
  };

  const fileInputRef = React.useRef();

  const handleAvatar = () => {
    // Programatically click the hidden file input
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    // console.log(file);

    // Llama a la función onUpdateAvatarByFile con el archivo seleccionado
    onUpdateAvatarByFile(file);
  };

  return (
    <ModalWithForm
      title="Cambiar foto de perfil"
      name="avatar-profile"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <div className="profile__container-image">
        <img
          className="profile__avatar-change"
          alt="profile"
          src={currentUser.avatar ? currentUser.avatar : profile}
        />
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          ref={fileInputRef}
          onChange={handleFileChange}
        />
        <img
          src={pencil}
          alt="Pencil de editar"
          className="profile__avatar-edit-change"
          onClick={handleAvatar}
        />
      </div>
      <input
        id="user-avatar"
        type="url"
        value={avatar}
        onChange={handleAvatarChange}
        className="modal__form-input"
        placeholder="o ingresa imagen mediante URL"
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
