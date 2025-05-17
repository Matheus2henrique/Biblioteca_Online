import { Component, Input } from '@angular/core';
import { Chapter } from 'src/app/models/chapter.models';

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.css']
})
export class ChapterListComponent {
  @Input() chapters: Chapter[] = [];
  @Input() bookId: number = 0;
}
