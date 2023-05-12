import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [LoginFormComponent, AuthComponent],
  imports: [CommonModule, ReactiveFormsModule, AuthRoutingModule],
  bootstrap: [AuthComponent],
})
export class AuthModule {}
