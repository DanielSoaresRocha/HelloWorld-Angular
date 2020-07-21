import { Component, OnInit } from '@angular/core';
import { FilmeService } from '../filme.service';

@Component({
  selector: 'app-listagem-api',
  templateUrl: './listagem-api.component.html',
  styleUrls: ['./listagem-api.component.css']
})
export class ListagemApiComponent implements OnInit {

  filmes: Array<any>;

  constructor(private filmeService: FilmeService) { }

  ngOnInit (): void {
    this.listar();
  }

  listar () {
    this.filmeService.listar().subscribe(data => {
      this.filmes = data.results
      console.log(this.filmes)
    })
  }
}
