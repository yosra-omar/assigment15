
//======================= question 1 ================================
class User {
   public notebooks :NoteBook[] =[]
    public get Password(): string {
        return this._Password;
    }
    public set Password(value: string) {
        this._Password = value;
    }

    constructor(
            protected Id:number,
            public name :string,
            public email: string,
            private _Password: string,
            public Phone :string,
            public age :number,
            notebooks :NoteBook[]
){
    if(age< 18 || age>60){
        throw new Error("Age must be between 18 and 60");
    }

    this.notebooks = notebooks
}

displayInfo():void{
       console.log(this.name);
        console.log(this.email);
        console.log(this.Phone);
        console.log(this.age);
}
}

//======================= question 2 ================================

class Admin  extends  User {
  constructor( 
      public  role: string,
        Id: number,
        name: string,
        email: string,
        Password: string,
        Phone: string,
        age: number,
        notebooks:NoteBook[]
    ){
        super(Id, name, email, Password, Phone, age,notebooks);

      this.role = role;
    }
}

//======================= question 3 ================================

class Note  {
    constructor(
     public Id :number,
     public tittle : string,
     public content : string,
    // public  userId :  User,
     public  author : User
    ){
     }

    preview(){
        return`short view ${this.content}`
    }
}
 
 
//======================= question 4 ================================
//parent class
 class NoteBook {
      public  notes:Note[] =[]
    constructor(public name : string){}
      
    addNote( note: Note) {
          this.notes.push(note)
      }
     removeNote(note:Note){
       const noteExist= this.notes.filter(ele => ele !== note)
        return noteExist
     }
  }
 
  const notes1 = new NoteBook("notes1")
 const notes2 = new NoteBook("notes2")

 const user1 = new User(  1, "Yosra", "yosra@gmail.com", "123456", "0123456789", 22,[notes1,notes2])
console.log(user1);

//======================= question 7 ================================


class Storage<T>{
   public items : T[] =[]

   constructor(){}

    addItem(item: T): void {
        this.items.push(item);
    }

    removeItem(item: T): void {
        this.items = this.items.filter(
            element => element !== item
        );
    }

    getAllItems(): T[] {
        return this.items;
    }
}






// class User {
//   static count :number=0;
//     public get password() :string{
//         return this._password
//     }

//     public set password (val:string){
//         this._password=val
//     }
//     constructor(public username : string , private _password: string){
//         User.count++
//     }

//     public getName(){
//         return `name ${this.username}`
//     }
// }

// class Person extends User {
//     constructor(username : string ,   _password: string,protected phone:string){
//         super(username, _password)
//     }
// }

// const user = new User("yosra","123")
// const   person = new Person("omar","123","0101888")
// console.log(user);
// console.log(person);
//  console.log(person.getName());
// console.log( user.getName());
// console.log(User.count);
