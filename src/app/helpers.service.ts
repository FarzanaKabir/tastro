import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';
import {forEach} from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {
  private history = [];
  private authRoutes = ['/login', '/signup'];
  private durationInSeconds = 5;

  protected globalServerErrorMessage = 'Operation failed due to server failure. Wer are working on it. Thank you';

  constructor(
    private router: Router,
    private snackBar: MatSnackBar
  ) {
  }

  // static setUserDataToLocalStorage(data: SuccessLoginData) {
  //   localStorage.setItem('token', data.token);
  //   localStorage.setItem('user', JSON.stringify(data.user));
  // }

  private errorSnackBar(message) {
    this.snackBar.open(message, null, {
      duration: this.durationInSeconds * 1000,
    });
  }

  showErrors(response: HttpErrorResponse) {
    const {error} = response;
    let errors: string | string[];

    try {
      if ('detail' in error || 'non_field_errors' in error) {
        errors = error.detail || error.non_field_errors;
      }

      if (Array.isArray(errors)) {
        forEach(errors, err => this.errorSnackBar(err));
      } else {
        this.errorSnackBar(errors);
      }
    } catch (e) {
      this.errorSnackBar(this.globalServerErrorMessage);
    }

    return throwError(error);
  }

  // loadRouting() {
  //   this.router.events
  //     .pipe(filter(event => event instanceof NavigationEnd))
  //     .subscribe(({urlAfterRedirects}: NavigationEnd) => {
  //       this.history = [...this.history, urlAfterRedirects];
  //     });
  // }

  getPreviousUrl() {
    return this.history[this.history.length - 2] || '/';
  }

  getAuthRoutes() {
    return this.authRoutes;
  }
}
