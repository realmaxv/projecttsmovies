import './style.css'
import './movies.ts'
import { movies } from './movies.ts'


const movies2 = [...movies];
const input = document.getElementById("input") as HTMLInputElement;
const genre = document.getElementById("genre") as HTMLSelectElement;
const output = document.querySelector<HTMLDivElement>(".output")!;

const liste = document.createElement("ul");
liste.className = "output1";
const neu = document.createElement("div");
neu.className = "buttonsAll";

const filmeAction = movies2.filter(film=> film[4].some(genreNew=>genreNew.toLowerCase().includes('action')));
const filmeScience = movies2.filter(film=> film[4].some(genreNew=>genreNew.toLowerCase().includes('sci')));
const filmeHorror = movies2.filter(film=> film[4].some(genreNew=>genreNew.toLowerCase().includes('horror')));
const filmeDrama = movies2.filter(film=> film[4].some(genreNew=>genreNew.toLowerCase().includes('drama')));
const filmeComedy = movies2.filter(film=> film[4].some(genreNew=>genreNew.toLowerCase().includes('comedy')));
// let suchArray = [];



// input.addEventListener("keydown",() => {
//   let inputFilm= input.value.toLowerCase();
// if(inputFilm === ""){


// }else{
// suchArray.push( movies2.map(item => item[0].includes(inputFilm) ));

// createProbertyOut(suchArray);
// }
// });



function createProbertyOut(filmeListe: any[]){
liste.innerHTML = "";
neu.innerHTML =""
const button1 = document.createElement("button");
const button2 = document.createElement("button");
const button3 = document.createElement("button");
button1.className = "yearup";
button2.className = "yeardown";
button3.className = "ranking";

  filmeListe.forEach(element =>{
    const item = document.createElement("li");
   
    button1.textContent ="YEAR UP";
    button2.textContent = "YEAR DOWN";
    button3.textContent ="BEST RATE";
    item.className = "list-item";

        const titel = element[0];  // Titel
        const jahr = element[1];   // Erscheinungsjahr
        const regisseur = element[2];  // Dauer in Minuten
        const dauer = element[3]; // Regisseur
        const genres = element[4].join(", ");
        const rank = element[5];

        item.innerHTML = `
        <strong>${titel}</strong> (${jahr})<br><br>
        <span>Regisseur: ${regisseur} Min</span><br>
        <span>Filmlänge: ${dauer}</span><br>
        <span>Genres: ${genres}</span><br>
         <span>IMDB: ${rank}</span><br>
    `;

    liste.appendChild(item);
  
  })


neu.appendChild(button1);
neu.appendChild(button2);
neu.appendChild(button3);

  output.appendChild(neu);
  output.appendChild(liste);
 
}





function genreOut(){

 
console.log(filmeAction);


document.getElementById("genre")?.addEventListener("change",()=>{

switch(genre.value){

  case "All":
  createProbertyOut(movies2);
  break;

  case "Action":

  createProbertyOut(filmeAction);
  break;

  case "Science-Fiction":
    createProbertyOut(filmeScience);
  break;

  case "Horror":
    createProbertyOut(filmeHorror);
  break;

  case "Drama":
    createProbertyOut(filmeDrama);
  break;

  case "Komödie":
    createProbertyOut(filmeComedy);
  break;

  default:


}


})


}




genreOut();