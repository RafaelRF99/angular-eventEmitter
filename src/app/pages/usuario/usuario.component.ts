import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormularioService } from 'src/app/services/formulario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
})
export class UsuarioComponent {
  form!: FormGroup;

  constructor(private formularioService: FormularioService) {
    this.form = this.formularioService.form;
  }

  infor() {
    this.formularioService.informacao();
  }
}
