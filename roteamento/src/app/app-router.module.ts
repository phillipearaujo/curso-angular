import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { PaginaComParametrosComponent } from './pagina-com-parametros/pagina-com-parametros.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { PaginaProtegidaComponent } from './pagina-protegida/pagina-protegida.component';
import { PrimeiraPaginaComponent } from './primeira-pagina/primeira-pagina.component';
import { SegundaPaginaComponent } from './segunda-pagina/segunda-pagina.component';

const routes: Routes = [
  { path: "primeira-pagina", component: PrimeiraPaginaComponent },
  { path: "segunda-pagina", component: SegundaPaginaComponent },
  { path: "", redirectTo: "primeira-pagina", pathMatch: "full" }, //redireciona para a prim. página a partir da url raiz(localhost:4200)
  { path: "pagina-com-parametros/:id", component: PaginaComParametrosComponent},
  { path: "pagina-protegida", component: PaginaProtegidaComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent},
  
  { path: "**", component: PaginaNaoEncontradaComponent } //manter o path de página não encontrada sempre no final da constante de routes
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule { }
