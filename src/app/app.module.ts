import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListagemApiComponent } from './listagem-api/listagem-api.component';

@NgModule({
  declarations: [
    AppComponent,
    ListagemApiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
