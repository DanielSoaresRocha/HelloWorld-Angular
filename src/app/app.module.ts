import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FilmeService } from './filme.service';
import { AppRoutingModule } from './app-routing.module';
import { MovieComponent } from './pages/home/movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [FilmeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
