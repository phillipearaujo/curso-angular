import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoRoutingModule } from './carrinho/carrinho-routing.module';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';

const routes: Routes = [
  { path: 'produtos', loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule) },
  { path: "", redirectTo: "produtos", pathMatch: "full" },
  { path: "**", component: NaoEncontradoComponent},
  { path: 'carrinho', component: CarrinhoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CarrinhoRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
