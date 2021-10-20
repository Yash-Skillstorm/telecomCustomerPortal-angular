export class User {
    id: Number = 0;
    name: string;
    password: string;    
   
    constructor(Name: string, Password: string) {
        this.name = Name;
        this.password = Password;
    }
    
}
