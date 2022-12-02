import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(24),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

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
      //TODO: peticion http
      alert('Formulario enviado: ' + JSON.stringify(this.form.value));
    } else {
      this.password.markAsTouched();
      this.username.markAsTouched();
    }
  }
}
