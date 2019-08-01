import { User } from './user.model';

export class Post {
    constructor(
        public comment: string,
        public author: User,
        public createdAt: Date,
        public topics: Array<string>
    ) {
        this.comment = comment;
        this.author = author;
        this.createdAt = createdAt;
        this.topics = topics;
    }
}
