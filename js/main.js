var arr = [`“Be yourself; everyone else is already taken.” <br>
    ― Oscar Wilde` , 

    `“So many books, so little time.” <br>
― Frank Zappa` ,

`“A room without books is like a body without a soul.” <br>
― Marcus Tullius Cicero` , 

`“Be the change that you wish to see in the world.” <br>
― Mahatma Gandhi` ,

`“A day without sunshine is like, you know, night.” <br>
― Steve Martin`,

`“Never put off till tomorrow what may be done day after tomorrow just as well.” <br>
― Mark Twain` , 

`“That which does not kill us makes us stronger.” <br>
― Friedrich Nietzsche` , 

`“It is never too late to be what you might have been.” <br>
― George Eliot` ,

`“For every minute you are angry you lose sixty seconds of happiness.” <br>
― Ralph Waldo Emerson` ,

`“If you judge people, you have no time to love them.” <br>
― Mother Teresa`
 ] ;
var x = document.getElementById ("Quote");
function SayHello () {
    random = Math.floor(Math.random() * arr.length) ;
    x.innerHTML = arr[random] ;
}
// Help
// can i make switch as a Dynamic 
// I mean when add new element in arr i must do new case so how can i solve it
//var i = 0 ;
//     switch (i) {
//         case i = 0: x.innerHTML = arr[i]
//             break;
//             case i = 1: x.innerHTML = arr[i]
//             break;
//             case i = 2: x.innerHTML = arr[i]
//             break;
//             case i = 3: x.innerHTML = arr[i]
//             break;
//             case i = 4: x.innerHTML = arr[i]
//             break;
//             case i = 5: x.innerHTML = arr[i]
//             break;
//             case i = 6: x.innerHTML = arr[i]
//             break;
//             case i = 7: x.innerHTML = arr[i]
//             break;
//             case i = 8: x.innerHTML = arr[i]
//             break;
//         default: x.innerHTML = arr[0] 
//             break;
//     }
//   i++
//   if (i >= arr.length) {
//     i = 0 ;
//   }
