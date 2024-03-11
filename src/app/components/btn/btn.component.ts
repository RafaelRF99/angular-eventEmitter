import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss'],
})
export class BtnComponent {
  @Input() texto: string = '';
  @Output() trocarTela = new EventEmitter();

  lidarTrocaTela() {
    this.trocarTela.emit();
  }
}
