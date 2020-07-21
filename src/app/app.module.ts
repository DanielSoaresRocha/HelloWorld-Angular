import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListagemApiComponent } from './listagem-api/listagem-api.component';
import { FilmeService } from './filme.service';

@NgModule({
  declarations: [
    AppComponent,
    ListagemApiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [FilmeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
