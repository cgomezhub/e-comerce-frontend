class Api {
  constructor(options) {
    this.address = options.address;
    this.headers = options.headers;
  }

  // enviar email

  sendEmail(data) {
    return fetch(`${this.address}`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(data),
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

export const apiMail = new Api({
  address: "https://mail-sender-api1.p.rapidapi.com/",
  headers: {
    "content-type": "application/json",
    "X-RapidAPI-Key": "74cac37338msh7bf7caf92807cc5p133777jsnb1a5375cd6cd",
    "X-RapidAPI-Host": "mail-sender-api1.p.rapidapi.com",
  },
  body: {
    sendto: "",
    name: "Custom",
    replyTo: "",
    ishtml: "false",
    title: "consulta de usuario de la tienda",
    body: "",
  },
});
