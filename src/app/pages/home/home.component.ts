import { Component, OnInit } from '@angular/core';
import { FilmeService } from '../../filme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  filmes: Array<any>;

  constructor(private filmeService: FilmeService) { }

  ngOnInit (): void {
    this.listar();
  }

  listar () {
    this.filmeService.listar().subscribe(data => {
      this.filmes = data.results

      // mudando url do filme para casar com a api
      this.filmes.map(filme => {
        filme.poster_path = `https://image.tmdb.org/t/p/w500${filme.poster_path}`
        return filme
      })
      console.log(this.filmes)
    })
  }
}
