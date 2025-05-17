import { Chapter } from "./chapter.models";

export interface Book {
  id: number;
  title: string;
  author: string;
  coverImagem?: string;
  description : string;
  chapters: Chapter[];
}
