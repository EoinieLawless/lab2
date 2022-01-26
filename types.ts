// boolean 
let flag: boolean = true;
console.log("value assigned to flag is: "+flag);

let message:String  = "hello world";
console.log("my string value is: "+message);

let num:number = 5.43434543;
console.log("my number value is: "+num);

let myarray:number[] = [4,5,6];
for (let i=0;i<myarray.length;i++){
console.log("my number at position" +(i+1)+ " is: " +myarray[i])
}

let notSure:any = "not sure datatype";
console.log("The value of notSure is: "+notSure);

let unknown:any[] = [2,"hello",false];
for (let i=0;i<unknown.length;i++){
    console.log("my value at position" +(i+1)+ " is: " +unknown[i])
}