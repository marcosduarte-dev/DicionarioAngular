import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DicionarioAbertoService {

  constructor(private http: HttpClient) { }

  getWord(palavra: string): Observable<any[]> {
    return this.http.get<any[]>(`https://api.dicionario-aberto.net/word/${palavra}`);
  }
}
