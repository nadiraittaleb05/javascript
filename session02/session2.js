let texte1 ="OFPPT";
texte1 +="";
let texte2="en force";
let texte3= texte1 + texte2;
console.log(texte3);
//if
let a=14
let b=10

if(a===b){
    console.log(a,"a le meme type de",b ,"est egale a ",b)
}
else if(a==b){
    console.log(a, "egale a" ,b)
}
else{
    console.log(a,"different de",b)
};
//and or not
let statut="etudiant";
let age ="19";
if (statut=="etudiant"&& age=="20"){
    console.log("HELLO",statut)
}
else if(statut="etudiant"&& age=="20"||age=="19"){
    console.log("hello", statut ,"your age",age)
}
let valide =true;
if (!true){//false=false
    console.log("ce stagiaire n est pas inscrit")
};