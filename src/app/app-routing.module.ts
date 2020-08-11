import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemApiComponent } from './listagem-api/listagem-api.component';

const routes: Routes = [
  { path: '', component: ListagemApiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
