
//Toast

/*1
function myFunction(toast) {
        if(toast==undefined){
        var x = document.getElementById("snackbar");
        x.className = "show";
          
        setTimeout(function(){ 
            x.className = x.className.replace("show", "");
        }, 3000);
        }
    else{
        
        var x = [toast];
        var x = document.getElementById("snackbar");
        x.className="show";
        setTimeout(function(){ 
        x.className = x.className.replace("show", "");
        }, 3000);
    }
    }
*/

function bsToast(str, length ,divStyle)
{
    var toastDiv = $("<div>");
    if(!isDefined(divStyle))
        divStyle = {'position': 'fixed', 'bottom': '30px', 'left': '0', 'right' : '0', 'background' : 'black', 'color' : '#fff', 'padding': '10px','text-align' : 'center', 'width' : '50%', 'margin-left' : '25%', 'border-radius': '9px' };
    toastDiv.css(divStyle);
    toastDiv.text(str);
    $(document.body).append(toastDiv);
    setTimeout(function(){
        toastDiv.animate({'bottom': '-50px','opacity' : 0});
    }, length);
}


//Modal

/*
    Mo0del Object:    
    {
        header,
        body,
        footer
    }
    
*/

function isDefined(x)
{
    if(typeof(x) == "undefined")
        return false;
    else
        return true;
}


 var heading=$('<h1>').text("This is heading");
 heading.css({'color':'red'});
 heading.attr("class","text-center");

var header = $("#bs-model-header");
var body = $("#bs-model-body");
var footer = $("#bs-model-footer");



function bsModel(header, body, footer) //JQuery objects
{
    //get body element
    var main=document.getElementById('main-body');
    main.style.opacity="0.7";
    main.style.display="block";
    main.style.background="#000000";
    
    var model = $("<div>").addClass('bs-modal');
    
    //set model styling 
    model.css({'background':'white', 'color':'black', 'width' : '50%','height':'auto','box-shadow':'0 0 10px rgba(0, 0, 0, .6)','border-radius':'18px','transition': 'all 900ms ease-in-out','opacity':'1', 'position' :'fixed', 'top' : '-100%', 'left' : '25%'});
    
    console.log("Before if ...");
    
    if(isDefined(header)){
        
        if(header=="undefined"){
            model.append(heading);        
            model.append('<hr>');
        }
        else{
           //append header
        model.append(header); 
        model.append('<hr>');
        console.log("In if ...");
        console.log(header);
        console.log(header); 
        }
        
    }
    else {
       
        model.append(heading);        
        model.append('<hr>');
        console.log("Not in if ...");
    }
    
    console.log("After if ...");
    
    //append body
    model.append(body);

    model.append('<hr>');

    //append footer
    model.append(footer);

    //append modal in page body
    $(document.body).append(model);
  
    
    //animate down the model
     setTimeout(function(){
        model.animate( {"top": "+=10%"} );
         console.log(model);
    },2000);
    
}


//Loader from console

var loader=$("#loading");

function bsLoader(loader)
{
    
      //get body element
    var main=document.getElementById('main-body');
    main.style.opacity="0.7";
    main.style.display="block";
    main.style.background="#000000";
    
    loader.show();
    var load = $("<div>");
    load.append(loader);
    
    $(document.body).append(load);
    
        $(window).ready(function() {
    loader.hide();
});
 
    
 
}

   $(window).ready(function() {
    $('#loading').hide();
});



//Split function

function split(number){

    var x =number;  

    var suffix = x.match(/\d+/g).map(Number); // getting number
    
    $("#txt-split").val(suffix);// setting number

}

//Print Div

function printDiv(divName) {
     var printContents = document.getElementById(divName).innerHTML;
     var originalContents = document.body.innerHTML;

     document.body.innerHTML = printContents;

     window.print();

     document.body.innerHTML = originalContents;
}



