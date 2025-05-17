import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book.models';
import { Chapter } from '../models/chapter.models';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'http://localhost:8080/api/books';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    console.log('Buscando livros em:', this.apiUrl);
    return this.http.get<Book[]>(this.apiUrl).pipe(
      tap(response => console.log('Livros recebidos:', response)),
      catchError(error => {
        console.error('Erro ao buscar livros:', error);
        return throwError(error);
      })
    );
  }

  getBook(id: number): Observable<Book> {
    const url = `${this.apiUrl}/${id}`;
    console.log('Buscando livro em:', url);
    return this.http.get<Book>(url).pipe(
      tap(response => console.log('Resposta bruta:', response)),
      catchError(error => {
        console.error('Erro ao buscar livro:', error);
        return throwError(error);
      })
    );
  }

  getChapter(bookId: number, chapterId: number): Observable<Chapter> {
    const url = `${this.apiUrl}/${bookId}/chapters/${chapterId}`;
    console.log('Buscando capítulo em:', url);
    return this.http.get<Chapter>(url).pipe(
      tap(response => console.log('Capítulo recebido:', response)),
      catchError(error => {
        console.error('Erro ao buscar capítulo:', error);
        return throwError(error);
      })
    );
  }

  loadJson(fileName: string): Observable<Book> {
    return this.http.post<Book>(`${this.apiUrl}/load-json/${fileName}`, {}).pipe(
      tap(response => console.log('JSON carregado:', response)),
      catchError(error => {
        console.error('Erro ao carregar JSON:', error);
        return throwError(error);
      })
    );
  }
}
