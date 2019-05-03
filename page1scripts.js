
function generateletter(){
    ascii = Math.floor((Math.random()) * (122-97))+97; 
    return  String.fromCharCode(ascii)
}
function generatenumber(){
    return Math.floor((Math.random()) * 9)+1;     // returns a random integer from 1 to 9
}
function generatedot(){
    if((Math.random()>=0.5)){
        return ',';
    }
    else return '.'

}
function RandString(){
    length = Math.floor((Math.random()) * 5)+3;     // returns a random integer from 1 to 10
    let ciphertext ="";
    for(let i=0;i<length;i++){
        if(Math.random()>=0.5)
            ciphertext = ciphertext.concat(generateletter());
        else if(Math.random()>=0.5){
            ciphertext = ciphertext.concat(generatenumber());
        }
        else ciphertext = ciphertext.concat(generatedot());

    }
    console.log(ciphertext);
    return ciphertext;
}
String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}
function decipherletter(char){
    return String.fromCharCode(((ciphertext[i].charCodeAt()-'a'.charCodeAt()) + 3) % 26 + 'a'.charCodeAt());
}
function deciphernumber(num){

}
function decipher(ciphertext){
    let length=ciphertext.length;
    for(let i=0;i<length;i++){
    // for(let i=Math.floor(ciphertext.length/2);i<ciphertext.length;i++){
        //letter
        if(ciphertext[i].charCodeAt()>='a'.charCodeAt() && ciphertext[i].charCodeAt()<='z'.charCodeAt()){
            console.log("from:",ciphertext[i]);
            newchar=String.fromCharCode(((ciphertext[i].charCodeAt()-'a'.charCodeAt()) + 3) % 26 + 'a'.charCodeAt());
            console.log("to",newchar);
            ciphertext=ciphertext.replaceAt(i,newchar);
            console.log(ciphertext[i]);
        }
        //number
        else if(ciphertext[i].charCodeAt()>='0'.charCodeAt() && ciphertext[i].charCodeAt()<='9'.charCodeAt()){
            console.log("number");
            // newchar=((parseInt(ciphertext[i])+3)%10).toString();
            newchar = (10-parseInt(ciphertext[i])).toString();
            ciphertext=ciphertext.replaceAt(i,newchar);
        }
        //dot.s len=5 i=3 want i=1 5-3-1   a.a12d  i=1 len =6 want i=4 6-1-1
    }
    for(let i=0;i<length;i++){
        // for(let i=Math.floor(ciphertext.length/2);i<ciphertext.length;i++){
            //letter
           
            if((ciphertext[i]=='.' || ciphertext[i]==',')){
                console.log('dot/dash');
                let temp = ciphertext[i];
                if(ciphertext[i]==".")
                    temp='!';
                else if(ciphertext[i]==",")
                    temp=';';
                console.log('placing:',ciphertext[ciphertext.length-i-1],'at index',i); 
                ciphertext = ciphertext.replaceAt(i,ciphertext[ciphertext.length-i-1]);
                // ciphertext[i]=ciphertext[ciphertext.length-i];
                // ciphertext[ciphertext.length-i]=temp;
                ciphertext=ciphertext.replaceAt(ciphertext.length-i-1,temp);
            }
        }
    for(let i=0;i<length;i++){
        if(ciphertext[i]=="!")
            ciphertext=ciphertext.replaceAt(i,'.');
        if(ciphertext[i]==";")
            ciphertext=ciphertext.replaceAt(i,',');
    }
    return ciphertext;
}
ciphertext = RandString();
deciphertext=decipher(ciphertext);
$('#answer').submit(function(e) {
    
    e.preventDefault();
    
    // $(this).serialize(); will be the serialized form
    //$(this).append($(this).serialize() + '<br />');
    if($(this).serializeArray()[0].value==deciphertext){
        console.log('U WIN!'); 
        document.getElementById("result").textContent="Your answer is correct!";
        document.getElementById("Nextbutton").style.opacity=1;
        document.getElementById("Linkbutton").style.pointerEvents='all';
    }
    else{
        console.log("Incorrect!, its actually:",deciphertext);
        document.getElementById("result").textContent="Your answer is incorrect, its actually "+ deciphertext;
    }
});
//document.getElementById("waw").textContent="asd";

console.log("ciphertext is:",ciphertext,"decipher is:", deciphertext);
// document.getElementById("waw").textContent="Well wise guy, can you solve this cipher text?: "+"'"+ciphertext+"'";
$("#waw").html('<p>Well wise guy, can you solve this cipher text? <font style="background:black; color:white" size="+3">'+ciphertext+'</font></p>');
