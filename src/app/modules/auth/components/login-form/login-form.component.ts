import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  isLoading = false;
  error: string | null = null;

  public form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(24),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  constructor(private authService: AuthService, private router: Router) {}

  get username() {
    return this.form.get('username') as AbstractControl;
  }

  get usernameErrors(): string {
    if (this.username.hasError('required'))
      return 'Ingrese un nombre de usuario';
    else if (this.username.errors!['minlength'])
      return 'Debe tener al menos 5 caracteres';
    else if (this.username.errors!['maxlength'])
      return 'Debe tener como maximo 24 caracteres';
    else return '';
  }

  get password() {
    return this.form.get('password') as AbstractControl;
  }

  get passwordErrors(): string {
    if (this.password.errors!['required']) {
      return 'Ingrese una contraseña';
    } else if (this.password.errors!['minlength']) {
      return 'Debe tener al menos 8 caracteres';
    }
    return '';
  }

  public onFormSubmit(e: Event) {
    e.preventDefault();

    if (this.form.valid) {
      this.isLoading = true;
      this.authService
        .logIn(this.form.value.username!, this.form.value.password!)
        .pipe(
          tap({
            error: (e) => {
              console.log(e);
              this.isLoading = false;
              this.error = e;
            },
            complete: () => {
              this.isLoading = false;
            },
          })
        )
        .subscribe(() => this.router.navigate(['/admin']));
    } else {
      this.password.markAsTouched();
      this.username.markAsTouched();
    }
  }
}
