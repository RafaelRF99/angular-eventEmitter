import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenMockService } from './token-mock.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FormularioService {
  form!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private tokenMock: TokenMockService
  ) {
    this.form = this.formBuilder.group({
      login: [
        null,
        Validators.compose([Validators.required, Validators.minLength(4)]),
      ],
      senha: [null, Validators.required],
    });
  }

  informacao() {
    if (this.form.valid) {
      console.log(this.form.value);
      localStorage.setItem('token', this.tokenMock.getToken());
      this.router.navigate(['/logado']);
    }
  }
}
