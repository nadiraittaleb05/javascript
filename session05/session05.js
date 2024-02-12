// let today=new Date().getDay();
// switch(today){
//     case 0:
//         jour ="dimanche"
//     break;
//     case 1:
//         jour ="lundi"
//     break;
//     case 2:
//         jour ="mardi"
//     break;
//     case 3:
//         jour ="mercredi"
//     break;
//     case 4:
//         jour ="jeudi"
//     break;
//     default:
//         jour="null"
// }
// console.log("cest le jour"+jour)
jours=["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"]
for(i=0 ;i<=6;i++){
    console.log(jours[i]);
}
for(item in jours){
    console.log(jours[item]);
}
for (jr of jours){
    console.log(jr);
}
let n=10;
while (n>=0){
    console.log(n)
    n =n-1
}
do{
    console.log(n)
    n=n-1
}
while(n>= 0)
for (let i =0;i<10;i++)
{
    if(i===3) {break;}
    text += "le nombre est" + i +"<br>";
}