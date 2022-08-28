import { User } from "src/app/interfaces/user";

export interface Post {
    id: string,
    title: string,
    text: string,
    author: User
}
