export class User {
    constructor(
        private firstName: string,
        private firstLastName: string,
        private secondLastName: string,
        private nickname: string,
        private secondName?: string
    ) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.firstLastName = firstLastName;
        this.secondLastName = secondLastName;
        this.nickname = nickname;
    }

    fullName() {
        if (this.secondName != null) {
            return `${this.firstName} ${this.secondName} ${this.firstLastName} ${this.secondLastName}`;
        } else {
            return `${this.firstName} ${this.firstLastName} ${this.secondLastName}`;
        }
    }
}
