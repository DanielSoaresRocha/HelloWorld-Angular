import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  contatosUrl = 'https://api.themoviedb.org/3/movie/top_rated'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzBjOTQyMmJmNWRkOGJlNTNmMDBkM2Y0NzFjOTU5NSIsInN1YiI6IjVmMTczNDUzYTZkOTMxMDAzNzdlNjYwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s0TJRevXLiCWMYoofyJvmj3FdWCajc32m2f7OJtU3cY'
    })
  };

  constructor(private http: HttpClient) { }

  listar () {
    return this.http.get<any>(`${this.contatosUrl}`, this.httpOptions);
  }

}
