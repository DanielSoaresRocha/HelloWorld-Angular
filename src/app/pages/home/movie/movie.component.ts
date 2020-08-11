import { Component, OnInit, Input } from '@angular/core';

export interface Movie {
  title: string;
  overview: string;
  poster_path: string;
  vote_average: string;
}

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})

export class MovieComponent implements OnInit {

  @Input() data: Movie = {
    title: '',
    overview: '',
    poster_path: '',
    vote_average: ''
  };

  constructor() { }

  ngOnInit (): void {
  }
}
