// small pizza prijs $9.00    medium pizza prijs $11,00     large pizza prijs $ 13,00
var size = prompt("Wat voor afmeting pizza wilt u? U kunt kiezen uit small, medium en large"); 
var hoeveelpizza = prompt("hoeveel pizza's wilt u?");
var small =("small")
var medium =("medium")
var large =("large")
// de * 9 is voor de prijs keer negen en dat zorgt dat de prijs goed klopt
if (size == "small"){
   kostenpizza =  (hoeveelpizza * 9)
}
else if (size == "medium"){
    kostenpizza =  (hoeveelpizza * 11)
}
else if (size == "large"){
    kostenpizza =  (hoeveelpizza * 13)
}
// hier laat zien dat de grote en aantal en prijs apart is
document.write("je hebt gekozen voor een " + size +" pizza en het zijn er " + hoeveelpizza +"  en dit kost :  &euro; "+ kostenpizza +"<br>"  )

//document.write(size +" &euro;"+ hoeveelpizza +" ");

var more = prompt("Wilt u nog meer pizza's?")

if (more == "ja"){
    var size = prompt("Wat voor afmeting pizza wilt u? U kunt kiezen uit small, medium en large"); 
    var hoeveelpizza1 = prompt("hoeveel pizza's wilt u?");
// hier laat ik zien dat dit niet hetzelfde is en dat het als een andere variabele moet registreren
     if (size == "small"){
        kostenpizza1 = (hoeveelpizza1 * 9)
}
else if (size == "medium"){
   kostenpizza1 = (hoeveelpizza1 * 11)
}
else if (size == "large"){
   kostenpizza1 = (hoeveelpizza1 * 13)
}
}
else if (more == "nee"){
    Exit;
}


document.write("je hebt gekozen voor een " + size +" pizza en het zijn er " + hoeveelpizza1 +"  en dit kost :  &euro; " + kostenpizza1 +"<br>" )

var more = prompt("Wilt u nog meer pizza's?")
//hetzelfde als hier
if (more == "ja"){
    var size = prompt("Wat voor afmeting pizza wilt u? U kunt kiezen uit small, medium en large"); 
    var hoeveelpizza2 = prompt("hoeveel pizza's wilt u?");

if (size == "small"){
   kostenpizza2 = (hoeveelpizza2 * 9)
}
else if (size == "medium"){
   kostenpizza2 = (hoeveelpizza2 * 11)
}
else if (size == "large"){
   kostenpizza2 = (hoeveelpizza2 * 13)
}
}
else if (more == "nee"){
        Exit;
}
document.write("je hebt gekozen voor een " + size +" pizza en het zijn er " + hoeveelpizza2 +"  en dit kost :  &euro; "+ kostenpizza2)