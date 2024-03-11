import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenMockService } from 'src/app/services/token-mock.service';

@Component({
  selector: 'app-logado',
  templateUrl: './logado.component.html',
  styleUrls: ['./logado.component.scss'],
})
export class LogadoComponent {
  constructor(private router: Router, private tokenMock: TokenMockService) {}

  deslogar(e: any) {
    this.router.navigate(['/']);
    this.tokenMock.clearToken();
  }
}
