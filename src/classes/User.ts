export class User {
  username;
  password;

  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  verifyPassword(value) {
    return value === this.password;
  }
}