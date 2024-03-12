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

const apiProducts = new Api({
  address: "https://fakestoreapi.com/products",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiProducts;
