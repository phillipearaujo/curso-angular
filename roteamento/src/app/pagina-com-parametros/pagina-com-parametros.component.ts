import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina-com-parametros',
  templateUrl: './pagina-com-parametros.component.html',
  styleUrls: ['./pagina-com-parametros.component.css']
})
export class PaginaComParametrosComponent {
 
  id: number | null = null;
  idade: number | null = null;
  nome: string | null = "";

  constructor( private route: ActivatedRoute ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number( params.get( "id" ));
    });

    this.route.queryParamMap.subscribe( params =>{
      this.idade = Number( params.get( "idade" ));
      this.nome = params.get("nome");
    })
  }
}
