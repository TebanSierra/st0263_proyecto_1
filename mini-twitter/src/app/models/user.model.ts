export class User {
    private nickname: string;
    private email: string;
    private password: string;

    constructor(
        nickname: string,
        email: string,
        password: string
    ) {
        this.email = email;
        this.nickname = nickname;
        this.password = password;
    }

    getNickname(){
        return this.nickname;
    }
}
