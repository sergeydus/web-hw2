var base=10;
function ConvertBase(number, initial_base, change_base) {
     return parseInt(number, initial_base).toString(change_base);
}
function takeValue(x) {
	document.getElementById('inputwindow').value += x;
}

function clearInput(y) {
	document.getElementById('inputwindow').value = y;
}

function calculateResult() {
	var result = eval(document.getElementById('inputwindow').value);
	document.getElementById('inputwindow').value = result;
}
function Changebase(){
    let prev=base;
    base = parseInt(document.getElementById("mySelect").value);
    let text = $("#inputwindow").val();
    if($("#Warning").css("display")=="none" && text.length>0){
        let number = parseInt(text);
        let res=ConvertBase(number,prev,base);
        $("#inputwindow").val(res);
    }
}
function CheckInput(text){
    if(!isNaN(parseInt(+text))||text.length==0){
        //will return a number if its a number
        $('#Warning').hide(100);
        $('#inputwindow').css('background-color', '#999');
    }
    else{
        //returns error otherwise
        $('#inputwindow').css('background-color', 'red');
        $('#Warning').show(100);
    }
}
$("#calculator").submit(function(e) {
    e.preventDefault();
});
/*
(function(){

    var ConvertBase = function (num) {
        return {
            from : function (baseFrom) {
                return {
                    to : function (baseTo) {
                        return parseInt(num, baseFrom).toString(baseTo);
                    }
                };
            }
        };
    };
        
    // binary to decimal
    ConvertBase.bin2dec = function (num) {
        return ConvertBase(num).from(2).to(10);
    };
    
    // binary to hexadecimal
    ConvertBase.bin2hex = function (num) {
        return ConvertBase(num).from(2).to(16);
    };
    
    // decimal to binary
    ConvertBase.dec2bin = function (num) {
        return ConvertBase(num).from(10).to(2);
    };
    
    // decimal to hexadecimal
    ConvertBase.dec2hex = function (num) {
        return ConvertBase(num).from(10).to(16);
    };
    
    // hexadecimal to binary
    ConvertBase.hex2bin = function (num) {
        return ConvertBase(num).from(16).to(2);
    };
    
    // hexadecimal to decimal
    ConvertBase.hex2dec = function (num) {
        return ConvertBase(num).from(16).to(10);
    };
    
    this.ConvertBase = ConvertBase;
    
})(this);
*/