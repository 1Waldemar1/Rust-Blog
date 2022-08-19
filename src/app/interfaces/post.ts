import { User } from "src/app/interfaces/service";

export interface Post {
    title: string,
    text: string,
    author: User
  }