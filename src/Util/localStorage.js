const LocalStorage = {
  user: null,
  getUser: function () {
    const rawUser = localStorage.getItem("user");
    this.user = JSON.parse(rawUser);
    return rawUser ? { ...JSON.parse(rawUser), isLoggedIn: true } : null;
  },
  getToken: function () {
    return this.user ? this.user.token : null;
  },
  setUser: (obj) => localStorage.setItem("user", JSON.stringify(obj)),
  deleteUser: () => localStorage.removeItem("user"),
};

export { LocalStorage };
