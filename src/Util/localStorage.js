const LocalStorage = {
  getUser: () => {
    const rawUser = localStorage.getItem("user");
    return rawUser ? { ...JSON.parse(rawUser), isLoggedIn: true } : null;
  },
  getToken: function () {
    return this.user ? this.user.token : null;
  },
  setUser: (obj) => localStorage.setItem("user", JSON.stringify(obj)),
  deleteUser: () => localStorage.removeItem("user"),
};

export { LocalStorage };
