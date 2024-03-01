class Api {
  constructor(options) {
    this.address = options.address;
    this.headers = options.headers;
  }

  getProductList() {
    return fetch(`${this.address}`, {
      headers: this.headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject("Error: " + res.status);
      })
      .catch((err) => {
        console.log(err);
        console.error("Error message");
        alert("Error: Something went wrong");
      });
  }
}

const api = new Api({
  address: "https://fakestoreapi.com/products",
  headers: {
    "Content-Type": "application/json",
  },
});

/*
const api = new Api({
  address: "https://api.jsonbin.io/v3/b/65df8e97266cfc3fde90b900",
  headers: {
    "X-Master-Key":
      "$2a$10$zcDLAP9dOXIBeB5IMxyWge3c9wUS3mSCzglmcnkUROKztDUq3sNs.",
    "Content-Type": "application/json",
  },
});
*/
export default api;
