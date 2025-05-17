import { NgModule } from '@angular/core';
import { RouterModule, Routes , RouteReuseStrategy } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { BookReaderComponent } from './componentes/book-reader/book-reader.component';
import { BookDetailsComponent } from './componentes/book-details/book-details.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'book/:id',
    component: BookDetailsComponent
  },
  {
    path: 'book/:bookId/chapter/:chapterId',
    component: BookReaderComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes , { onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
