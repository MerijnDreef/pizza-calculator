// Merijn Dreef Pizza calculator
// small pizza prijs $9.00    medium pizza prijs $11,00     large pizza prijs $ 13,00
var size = prompt("Wat voor afmeting pizza wilt u? U kunt kiezen uit small, medium en large"); 
var hoeveelpizza = prompt("hoeveel pizza's wilt u?");
var total = 0;
var totalPriceSmall = 0;
var totalPriceMedium = 0;
var totalPriceLarge = 0;

 
// de * 9 is voor de prijs keer negen en dat zorgt dat de prijs goed klopt
if (size == "small"){
   kostenpizza =  (hoeveelpizza * 9)
   totalPriceSmall = totalPriceSmall + kostenpizza;
}
else if (size == "medium"){
    kostenpizza =  (hoeveelpizza * 11)
    totalPriceMedium = totalPriceMedium + kostenpizza;
}
else if (size == "large"){
    kostenpizza =  (hoeveelpizza * 13)
    totalPriceLarge = totalPriceLarge + kostenpizza;
}
// hier laat zien dat de grote en aantal en prijs apart is

document.write("je hebt gekozen voor een " + size +" pizza en het zijn er " + hoeveelpizza +"  en dit kost :  &euro; "+ kostenpizza +"<br>"  )


//document.write(size +" &euro;"+ hoeveelpizza +" ");

var more = prompt("Wilt u nog meer pizza's?")

if (more == "ja"){
    size = prompt("Wat voor afmeting pizza wilt u? U kunt kiezen uit small, medium en large"); 
    hoeveelpizza = prompt("hoeveel pizza's wilt u?");
// hier laat ik zien dat dit niet hetzelfde is en dat het als een andere variabele moet registreren
    if (size == "small"){
        kostenpizza = (hoeveelpizza * 9)
        totalPriceSmall = totalPriceSmall + kostenpizza;
    }
    else if (size == "medium"){
        kostenpizza = (hoeveelpizza * 11)
        totalPriceMedium = totalPriceMedium + kostenpizza;
    }
    else if (size == "large"){
        kostenpizza = (hoeveelpizza * 13)
        totalPriceLarge = totalPriceLarge + kostenpizza;
    }
    document.write("je hebt gekozen voor een " + size +" pizza en het zijn er " + hoeveelpizza +"  en dit kost :  &euro; " + kostenpizza +"<br>" )
    
    var more = prompt("Wilt u nog meer pizza's?")
    //hetzelfde als hier
    if (more == "ja"){
        size = prompt("Wat voor afmeting pizza wilt u? U kunt kiezen uit small, medium en large"); 
        hoeveelpizza = prompt("hoeveel pizza's wilt u?");
    
        if (size == "small"){
            kostenpizza = (hoeveelpizza * 9)
            totalPriceSmall = totalPriceSmall + kostenpizza;
        }
        else if (size == "medium"){
            kostenpizza = (hoeveelpizza * 11)
            totalPriceMedium = totalPriceMedium + kostenpizza;
        }
        else if (size == "large"){
            kostenpizza = (hoeveelpizza * 13)
            totalPriceLarge = totalPriceLarge + kostenpizza;
        }
        document.write("je hebt gekozen voor een " + size +" pizza en het zijn er " + hoeveelpizza +"  en dit kost :  &euro; "+ kostenpizza);
    }
    else if (more == "nee"){
    
    }
}
else if (more == "nee"){

}

total = totalPriceSmall + totalPriceMedium + totalPriceLarge;
document.write('<br> total : &euro;' + total);