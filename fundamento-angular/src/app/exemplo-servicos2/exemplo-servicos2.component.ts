import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-exemplo-servicos2',
  templateUrl: './exemplo-servicos2.component.html',
  styleUrls: ['./exemplo-servicos2.component.css']
})
export class ExemploServicos2Component {
  descricao = "";

  constructor(public logger: LoggerService) {}

  adicionarProduto(){
    this.logger.logar(`Característica "${this.descricao}" foi adicionado ao produto.`);
  }
}
