(()=>{"use strict";var e={607:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(886)),s="abcdefghijklmnopqrstuvwxyz".toUpperCase(),a=document.getElementById("keyboard"),l="";function d(){l="";for(var e=0;e<s.length;e++)l+='<button type="button" class="btn btn-primary mx-2 my-2" id="'+s[e]+'">'+s[e]+"</button>";a.innerHTML=l;var t=function(e){document.getElementById(s[e]).addEventListener("click",(function(){!function(e,t){console.log("id is:"+e);var n=new r.default,o=t.blankWord;n.blankWord=t.blankWord,n.letterCheck(e,t,o)}(s[e],i)}))};for(e=0;e<s.length;e++)t(e)}var i=new r.default;d(),i.getBlankWord(),i.displayChances(),document.getElementById("reset").addEventListener("click",(function(){!function(e){e.getBlankWord(),e.chances=0,e.guessed=[],document.getElementById("hangmanImage").setAttribute("src",e.chances+".jpg"),e.displayChances(),d()}(i)}))},886:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){this.chances=0,this.maxChances=6,this.words1=["alpha","number","spy","cricket","hangman","hyderabad","chennai","banglore"],this.words=this.words1.map((function(e){return e.toUpperCase()})),this.guessed=[]}return e.prototype.getBlankWord=function(){this.word=this.words[Math.floor(Math.random()*this.words.length)],console.log("word is:"+this.word);for(var e="",t=0;t<this.word.length;t++)e+="_";this.blankWord=e,console.log("getBlankword is:"+this.blankWord),document.getElementById("blankword").innerHTML=this.blankWord},e.prototype.displayChances=function(){document.getElementById("numberOfChances").innerHTML=this.chances+" chances used out of "+this.maxChances},e.prototype.setCharAt=function(e,t,n){return t>e.length-1?e:e.substring(0,t)+n+e.substring(t+1)},e.prototype.letterCheck=function(e,t,n){for(var o=e,r=!1,s=t.word,a=!1,l=0;l<t.guessed.length;l++)if(t.guessed[l]==o){a=!0;break}if(a)alert("You already gussed this character");else{for(l=0;l<s.length;l++)if(console.log(s[l]+"  "+o),s[l]==o){r=!0;break}var d=[];if(r){for(l=0;l<s.length;l++)s[l]==o&&d.push(l);for(console.log(d),console.log("split blankword is:"+n),l=0;l<d.length;l++)n=this.setCharAt(n,d[l],s[d[l]]);console.log("blankword is:"+n),t.blankWord=n,document.getElementById("blankword").innerHTML=n,t.guessed.push(o)}else t.chances+=1,document.getElementById("hangmanImage").setAttribute("src",t.chances+".jpg")}t.displayChances(),t.validChancesLeft()},e.prototype.validChancesLeft=function(){this.chances>=6&&(document.getElementById("blankword").innerHTML="<b>You loose the game</b>",document.getElementById("keyboard").innerHTML="")},e}();t.default=n}},t={};!function n(o){if(t[o])return t[o].exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}(607)})();