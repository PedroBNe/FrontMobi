import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.type';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  apiUrl: string = 'https://mobibank.com.br/api';

  constructor(private httpClient: HttpClient) {}

  login(email: string, password: string) {
    return this.httpClient
      .post<LoginResponse>(this.apiUrl + '/login', { email, password })
      .pipe(
        tap((value) => {
          sessionStorage.setItem('auth-token', value.token);
          sessionStorage.setItem('username', value.name);
        })
      );
  }

  signup(
    name: string,
    email: string,
    cep: string,
    street: string,
    city: string,
    state: string,
    country: string,
    cpfCnpj: string,
    birthDate: Date,
    phoneNumber: string,
    password: string
  ) {
    return this.httpClient
      .post<LoginResponse>(this.apiUrl + '/signup', {
        name,
        email,
        cep,
        cpfCnpj,
        birthDate,
        phoneNumber,
        password,
        street,
        city,
        state,
        country,
      })
      .pipe(
        tap((value) => {
          sessionStorage.setItem('auth-token', value.token);
          sessionStorage.setItem('username', value.name);
        })
      );
  }
}
