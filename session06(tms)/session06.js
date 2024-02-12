function greet (){
    console.log("Hello!")
}
greet()
// function somme(a,b){
//     return a + b  
// }
// let sm =somme(5,9)



// function expressions
let somme =function (a,b){
    return a + b
}
let sm = somme (5,9)


console.log(sm)

// Les fonctions flechées (arrow function)


// let ay= function (){
//     return console.log ("Welcome to Js world !!")
// };



// let greet = ()=> {
//     console.log ("Welcome to JS world !!")
// };


let Nomcomplet = (nom,prenom )=> {


    let fullname =  nom  +" " + prenom

    return fullname
  
}
console.log(Nomcomplet("ait taleb","nadir"));



const variable=()=> {
    return "ma_variable"
}
console.log(variable())


// les exepression lamdas
const language = [
    'Java',
    'Python',
    'PHP',
    'javascript',
];

//console.Fore( langages.map( L => ))



 // exemple 2
let jours = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi",,"Dimanche"]


jours.map(function(item){

    return console.log(item)
});
const jour =[
    "lundi",
    "Mardi",
    "mercredi",
    "jeudi",
    "vendredi",
    "samedi",
    "dimanche",
];
jours.map((item)=>{
    if (item=== "jeudi"){
        item=item+"*jour ferier"
    }
    return console.log(item);
});
console.log(jours);

const stagiaire =[
    {nom:"ait taleb",prenom:"nadir",age:"18"},
    {nom:"adibia",prenom:"amine",age:"22"},

];
let nameage;
nameage =stagiaire.map((info,index,arrstagiaire)=>{
   let st;
   st={...item,branche:"dd",id:index + 1};
   return st;
});
console.log(nameage);
