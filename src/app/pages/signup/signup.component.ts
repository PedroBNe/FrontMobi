import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';

interface SignupForm {
  name: FormControl;
  email: FormControl;
  cep: FormControl;
  street: FormControl;
  city: FormControl;
  state: FormControl;
  country: FormControl;
  cpfCnpj: FormControl;
  birthDate: FormControl;
  phoneNumber: FormControl;
  password: FormControl;
  passwordConfirm: FormControl;
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    DefaultLoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent,
  ],
  providers: [LoginService],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignUpComponent {
  signupForm!: FormGroup<SignupForm>;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastService: ToastrService
  ) {
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      cep: new FormControl('', [Validators.required, Validators.minLength(8)]),
      street: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      cpfCnpj: new FormControl('', [
        Validators.required,
        Validators.minLength(11),
      ]),
      birthDate: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(11),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      passwordConfirm: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  submit() {
    this.loginService
      .signup(
        this.signupForm.value.name,
        this.signupForm.value.email,
        this.signupForm.value.cep,
        this.signupForm.value.street,
        this.signupForm.value.city,
        this.signupForm.value.state,
        this.signupForm.value.country,
        this.signupForm.value.cpfCnpj,
        this.signupForm.value.birthDate,
        this.signupForm.value.phoneNumber,
        this.signupForm.value.password
      )
      .subscribe({
        next: () => this.toastService.success('Registro feito com sucesso!'),
        error: () =>
          this.toastService.error(
            'Erro inesperado! Tente novamente mais tarde'
          ),
      });
  }

  navigate() {
    this.router.navigate(['login']);
  }
}
