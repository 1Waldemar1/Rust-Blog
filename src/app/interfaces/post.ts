import { User } from "src/app/interfaces/user";

export interface Post {
    title: string,
    text: string,
    author: User
}
