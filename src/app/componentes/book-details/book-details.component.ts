import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book.models';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: Book | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) { }

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Buscando livro com ID:', id);
    this.bookService.getBook(id).subscribe({
      next: (book) => {
        console.log('Livro recebido:', book);
        this.book = book;
      },
      error: (error) => {
        console.error('Erro ao buscar livro:', error);
        console.log('Detalhes do erro:', error.message, error.error);
      }
    });
    
  }

  goToChapter(chapterId: number): void {
    this.router.navigate(['/book', this.book?.id, 'chapter', chapterId]);
  }

}
