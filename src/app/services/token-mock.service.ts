import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenMockService {
  private readonly token = '123';

  constructor() {}

  getToken() {
    return this.token;
  }

  clearToken() {
    localStorage.clear();
  }
}
