class SessionHelper {
  static getLanguage() {
    return localStorage.getItem("i18nextLng");
  }
  static setLanguage(language) {
    return localStorage.setItem("i18nextLng", language);
  }
  static getAccessToken() {
    return localStorage.getItem("todoAccessToken");
  }
  static setAccessToken(accessToken) {
    if (!accessToken) return undefined;
    return localStorage.setItem("todoAccessToken", accessToken);
  }
  static removeTokens() {
    localStorage.removeItem("todoAccessToken");
  }
  static getUser() {
    return (
      localStorage.getItem("user") ?? JSON.parse(localStorage.getItem("user"))
    );
  }
  static setUser(user) {
    if (!user) return undefined;
    return localStorage.setItem("user", JSON.stringify(user));
  }
  static removeUser() {
    localStorage.removeItem("user");
  }
}

export default SessionHelper;
