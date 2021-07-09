

export default class Word{
    chances=0;
    maxChances=6;
    words1=["alpha","number","spy","cricket","hangman","hyderabad","chennai","banglore"]
    words=this.words1.map(item=>{return item.toUpperCase()});
    word;
    blankWord:any;
    guessed=[]

    getBlankWord(){
        
        this.word= this.words[Math.floor(Math.random()*this.words.length)]
        console.log("word is:"+this.word)
        let temp=""
        for(let i=0;i<this.word.length;i++){
            temp+='_';
        }
        this.blankWord=temp;
        console.log("getBlankword is:"+this.blankWord);
        document.getElementById("blankword").innerHTML=this.blankWord;
    }
    displayChances(){
        document.getElementById("numberOfChances").innerHTML=`${this.chances} chances used out of ${this.maxChances}`
    }

    setCharAt(str,index,chr) {
        if(index > str.length-1) return str;
        return str.substring(0,index) + chr + str.substring(index+1);
    }
    letterCheck(id,obj,tempBlankWord){
        // console.log(",hvsf")
        
        let ch = id;
        let isPresent=false;
        let objWord=obj.word;
        let guessedBool=false;
        
        for(let i=0;i<obj.guessed.length;i++){
            if(obj.guessed[i]==ch){
                guessedBool=true;
                break;
            }
        }
        
        if(guessedBool){
            alert("You already gussed this character")
        }
        else{
            for(let i=0;i<objWord.length;i++){
                console.log(objWord[i]+"  "+ch)
                if(objWord[i]==ch){
                    isPresent=true;
                    break;
                }
            }
            let index=[];
            // console.log("ispresent:"+isPresent);
            if(isPresent){
                for(let i=0;i<objWord.length;i++)
                {
                    if(objWord[i]==ch){
                        // console.log(objWord[i]+"  "+ch+"  "+i)
                        index.push(i);
                    }
                }
                console.log(index);
                console.log("split blankword is:"+tempBlankWord);
                for(let i=0;i<index.length;i++){
                    // console.log(index[i]);
                    tempBlankWord = this.setCharAt(tempBlankWord,index[i],objWord[index[i]]);
                    // this.blankWord[index[i]]=objWord[index[i]];
                }
                console.log("blankword is:"+tempBlankWord);
                obj.blankWord=tempBlankWord;
                document.getElementById("blankword").innerHTML=tempBlankWord;
                obj.guessed.push(ch);
    
            }
            else{
                obj.chances+=1;
                let img = document.getElementById("hangmanImage");
                img.setAttribute("src",obj.chances+".jpg")
            }
        }
        obj.displayChances();
        obj.validChancesLeft();

    }

    validChancesLeft(){
        if(this.chances>=6){
            document.getElementById("blankword").innerHTML=`<b>You loose the game</b>`
            document.getElementById("keyboard").innerHTML="";
            // alert("no more Chance Left for the user");
        }
    }
    
}
