export class User {
    id: Number = 0;
    name: string;
    email: string;
    password: string; 
   
    constructor(Name: string, Email: string, Password: string) {
        this.name = Name;
        this.email = Email;
        this.password = Password;
    }
    
}
