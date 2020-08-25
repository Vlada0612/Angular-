import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  constructor() {
  }

  authenticate(username, password) {
    return (Object.is(username, "javainuse") && Object.is(password,"password"))
           ? AuthenticationService.authenticateByUserName(username)
           : false;
    }

  private static authenticateByUserName(username: any) {
    sessionStorage.setItem('username', username);
    return true;
  }

  isUserLoggedIn() {
    return !Object.is(sessionStorage.getItem('username'), null);
  }

  logOut() {
    sessionStorage.removeItem('username');
  }
}
