import Word from "./word"
let keys="abcdefghijklmnopqrstuvwxyz".toUpperCase();
let keyboard = (<HTMLElement>document.getElementById("keyboard"));
let button="";

function displayKeyboard(){
    button="";
    for(let i=0;i<keys.length;i++){
        button+= `<button type="button" class="btn btn-primary mx-2 my-2" id="${keys[i]}">${keys[i]}</button>`
    }
    keyboard.innerHTML=button

    for(let i=0;i<keys.length;i++){
        let button = <HTMLButtonElement>(document.getElementById(keys[i]));
        button.addEventListener("click",()=>{
            display(keys[i],obj);
        });
    }
}




let obj = new Word();
displayKeyboard();
obj.getBlankWord();
obj.displayChances();

document.getElementById("reset").addEventListener("click",()=>{
    resetFunction(obj);
});

function resetFunction(obj){
    obj.getBlankWord();
    obj.chances=0;
    obj.guessed=[];
    let img = document.getElementById("hangmanImage");
    img.setAttribute("src",obj.chances+".jpg")
    obj.displayChances();
    displayKeyboard();
    
}

// for(let i=0;i<keys.length;i++){
//     let button = <HTMLButtonElement>(document.getElementById(keys[i]));
//     button.addEventListener("click",()=>{
//         display(keys[i],obj);
//     });
// }

function display(id1:string,objWord){
    console.log("id is:"+id1);
    var obj = new Word();
    let tempBlankWord = objWord.blankWord;
    obj.blankWord=objWord.blankWord;
    
    obj.letterCheck(id1,objWord,tempBlankWord)

}
