/**
    * @description      : 
    * @author           : mauri
    * @group            : 
    * @created          : 25/07/2021 - 17:45:38
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 25/07/2021
    * - Author          : mauri
    * - Modification    : 
**/

/*
var table_multiplication= ()=>{
let index=0;
while(index < 13){

    console.log(`3 x ${index}= ${index * 3}`);
    index++;
}
}
table_multiplication();

var table_multiplication= (nb)=>{
    let index=0;
    while(index < 13){
    
        console.log(`${nb} x ${index}= ${index * nb}`);
        index++;
    }
    }
    table_multiplication(5);
    



    var momo={

        nom :"remi",
        prenom:"maurice",
        age: 47,
    },
*/
 let image1 =document.getElementById("image1");
 let image2 =document.getElementById("image2");


 image1.addEventListener('click', toucher);

 function toucher() {
 alert ("vous avez cliquer sur l'image 1 ");

 }

 image2.addEventListener('click',toucher2);


 function toucher2() {
 alert ("vous avez cliquer sur l'image 2");

 }

 function myFunction(){

    alert ('aaaaaaahhhhhh');
 }

// Create Object here
// =========================================

let episode = {
    title: 'Dark Beginning',
    duration: 45,
    hasBeenWatched: false
  }
  
  
  // =========================================
  
  document.querySelector('#episode-info').innerText = `Episode: ${episode.title}
  Duration: ${episode.duration} min
  ${episode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`



  let episode = {
    title: 'Dark Beginnings',
    duration: 45,
    hasBeenWatched: false
  };
  
  // Create variables here
  // =====================================
  
  let episodeTitle = episode.title;
  let episodeDuration = episode.duration;
  let episodeHasBeenWatched = episode.hasBeenWatched;
  
  // =====================================
  
  document.querySelector('#episode-info').innerText = `Episode: ${episodeTitle}
  Duration: ${episodeDuration} min
  ${episodeHasBeenWatched ? 'Already watched' : 'Not yet watched'}`



  
class Episode {
    constructor(title, duration, hasBeenWatched) {
      this.title = title;
      this.duration = duration;
      this.hasBeenWatched = hasBeenWatched;
    }
  }
  
  let firstEpisode = new Episode('Dark Beginnings', 45, true);
  let secondEpisode = new Episode('The Mystery Continues', 45, false);
  let thirdEpisode = new Episode('The Unexpected Climax', 60, false);
  
  // =====================================
  
  document.querySelector('#first-episode-info').innerText = `Episode: ${firstEpisode.title}
  Duration: ${firstEpisode.duration} min
  ${firstEpisode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`;
  
  document.querySelector('#second-episode-info').innerText = `Episode: ${secondEpisode.title}
  Duration: ${secondEpisode.duration} min
  ${secondEpisode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`;
  
  document.querySelector('#third-episode-info').innerText = `Episode: ${thirdEpisode.title}
  Duration: ${thirdEpisode.duration} min
  ${thirdEpisode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`;