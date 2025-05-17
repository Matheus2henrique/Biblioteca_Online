import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books: Book[] = [];

  constructor(
    private bookService: BookService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe({
      next: (books) => {
        console.log('Livros recebidos:', books);
        this.books = books;
      },
      error: (error) => console.error('Erro ao buscar livros:', error)
    });
  }

  getCoverImagemUrl(bookId: number): string{
    return `http://localhost:8080/api/books/${bookId}/cover`;
  }

}

