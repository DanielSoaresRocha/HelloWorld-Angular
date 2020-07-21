import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-api',
  templateUrl: './listagem-api.component.html',
  styleUrls: ['./listagem-api.component.css']
})
export class ListagemApiComponent implements OnInit {

  filmes = [
    { id: 1, name: 'Avengers', description: 'A description of Avengers' },
    { id: 2, name: 'Mad Max', description: 'A description of Mad Max' }
  ]

  constructor() { }

  ngOnInit (): void {
  }

}
