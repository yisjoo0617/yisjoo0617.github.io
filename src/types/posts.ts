export type Category =
  | 'All'
  | 'next.js'
  | 'react'
  | 'typescript'
  | 'javascript'

export interface Post {
  id: number;
  title: string;
  date: string;
  description: string;
  category: Category;
  path: string;
  featured: boolean;
  content: string;
  readingTime: number;
  related: string[];
  thumbnail?: string;
}
