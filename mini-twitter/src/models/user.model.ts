export class User {
    private role: string;

    constructor(
        private firstName: string,
        private firstLastName: string,
        private secondLastName: string,
        private nickname: string,
        private email: string,
        private createdAt: Date,
        private secondName?: string
    ) {
        this.firstName = firstName;
        if (secondName != null) {
            this.secondName = secondName;
        }
        this.firstLastName = firstLastName;
        this.secondLastName = secondLastName;
        this.nickname = nickname;
        this.email = email;
        this.createdAt = createdAt;
        this.role = 'user';
    }

    getFullName() {
        if (this.secondName != null) {
            return `${this.firstName} ${this.secondName} ${this.firstLastName} ${this.secondLastName}`;
        } else {
            return `${this.firstName} ${this.firstLastName} ${this.secondLastName}`;
        }
    }

    getNickName() {
        return this.nickname;
    }

    getEmail() {
        return this.email;
    }

    getCreationDate() {
        return this.createdAt;
    }

    getRole() {
        return this.role;
    }

    setRole(role: string) {
        this.role = role;
    }
}
