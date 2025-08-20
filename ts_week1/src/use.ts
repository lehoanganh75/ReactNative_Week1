class User{
    private name1:string;

    constructor(name1:string){
        this.name1 = name1;
    }

    getUser(): string {
        return this.name1;
    }

    setUser(nameUser:string){
        this.name1 = nameUser;
    }
}
