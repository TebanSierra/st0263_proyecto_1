import { User } from './user.model';

export class Post {
    private author: string;
    private comment: string;
    private topics: Array<string>;
    private createdAt: Date;

    constructor(author: string, comment: string, topics: Array<string>) {
        this.author = author;
        this.comment = comment;
        this.topics = topics;
        this.createdAt = new Date();
    }
}
