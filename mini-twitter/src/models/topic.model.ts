export class Topic {
    title: string;
    description: string;
    createdBy: string;
    createdAt: Date;

    constructor(
        title: string,
        description: string,
        createdBy: string,
        createdAt: Date
    ) {
        this.title = title;
        this.description = description;
        this.createdBy = createdBy;
        this.createdAt = createdAt;
    }
}
