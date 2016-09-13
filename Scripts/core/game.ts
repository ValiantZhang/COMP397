    class Person {
        protected _name : string;
        
        constructor(name:string){
            this._name = name;
        }
        
        public speak() : void {
            console.log(this._name = "I have the best walls");
        }
    }
    
    class Student extends Person {
        private _studentNum : number;
        
        constructor(name : string, studentNum: number){
        super(name);
        this._studentNum = studentNum;
        }
        
        public studies(){
            console.log(this._name + " is studying")
        }
    }
    
    var person : Person =  new Person("Trump");
    person.speak();
    
    var student : Person = new Student("Melanie, 696969");
    student.speak();
    student.studies();