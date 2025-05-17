import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Book } from 'src/app/models/book.models';
import { Chapter } from 'src/app/models/chapter.models';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-reader',
  templateUrl: './book-reader.component.html',
  styleUrls: ['./book-reader.component.css']
})
export class BookReaderComponent implements OnInit {
  book: Book | null = null;
  chapter: Chapter | null = null;
  currentChapterIndex: number = -1;
  isLoading: boolean = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const bookId = Number(params.get('bookId'));
      const chapterId = Number(params.get('chapterId'));

      if (!bookId || !chapterId) {
        this.error = 'ID do livro ou capítulo inválido';
        this.isLoading = false;
        return;
      }

      this.loadBookAndChapter(bookId, chapterId);
    });
  }

  loadBookAndChapter(bookId: number, chapterId: number): void {
    this.isLoading = true;
    this.error = null;

    this.bookService.getBook(bookId).subscribe({
      next: (book) => {
        this.book = book;
        this.currentChapterIndex = book.chapters.findIndex(ch => ch.id === chapterId);

        if (this.currentChapterIndex === -1) {
          this.error = 'Capítulo não encontrado';
          this.isLoading = false;
          return;
        }

        // Agora sim: carrega o capítulo só depois que o livro está definido
        this.bookService.getChapter(bookId, chapterId).subscribe({
          next: (chapter) => {
            this.chapter = chapter;
            this.isLoading = false;

            window.scrollTo(0, 0);
          },
          error: (err) => {
            this.error = 'Erro ao carregar o capítulo: ' + err.message;
            this.isLoading = false;
          }
        });
      },
      error: (err) => {
        this.error = 'Erro ao carregar o livro: ' + err.message;
        this.isLoading = false;
      }
    });
  }

    goToChapter(chapterId : number):void{
      if(this.book){
        this.router.navigate([`/book` , this.book.id , `chapter` , chapterId]);
      }
    }
}
