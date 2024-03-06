class Api {
  constructor(options) {
    this.address = options.address;
    this.headers = options.headers;
  }

  getHeaders() {
    return {
      ...this.headers,
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
  }

  // registrar usuario
  register(user) {
    return fetch(`${this.address}/signup`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(user),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject("Error: " + res.status);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // login usuario

  loginUser(user) {
    return fetch(`${this.address}/signin`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(user),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject("Error: " + res.status);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //obtener EL usuario y fijar su email en el header

  getUser() {
    return fetch(`${this.address}/users/me`, {
      headers: this.getHeaders(),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject("Error: " + res.status);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // actualizar el perfil del usuario

  userProfileUpdate(updatedData) {
    return fetch(`${this.address}/users/me`, {
      method: "PATCH",
      headers: this.getHeaders(),
      body: JSON.stringify(updatedData),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject("Error: " + res.status);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Actualizar la foto de perfil

  userAvatarUpdate(updatedAvatar) {
    return fetch(`${this.address}/users/me/avatar`, {
      method: "PATCH",
      headers: this.getHeaders(),
      body: JSON.stringify(updatedAvatar),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject("Error: " + res.status);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export const api = new Api({
  address: "https://api.around.myremotetest.eu",
  headers: {
    authorization: `Bearer ${localStorage.getItem("token")}`,
    "Content-Type": "application/json",
  },
});

export const apiAuth = new Api({
  address: "https://api.around.myremotetest.eu",
  headers: {
    "Content-Type": "application/json",
  },
});
