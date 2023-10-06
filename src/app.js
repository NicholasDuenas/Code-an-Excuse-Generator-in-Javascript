/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector('#btn').addEventListener('click', () => {
 codespace-jubilant-space-capybara-r4g5xvjw9ppv3x65g
    document.querySelector("excuse").innerHTML = generateExcuse();

    document.querySelector("excuse").innerHTML = generateExcuse();
 main
  });

  let randomnumber = Math.random() * 10;
  
  console.log("Hello Rigo from the console!" + randomnumber);
};

  let generateExcuse = () => {
    let pronoun = ['A','The',''];
    let subject = ['jogger','racoon','driver','dog','comedian','pinecone'];
    let actions = ['took my', 'threw my','yelled at my','stole my','but my'];
    let posession = ['Homework','Toe','car','shoe','']
    let where = ['on the street','in my house','in my driveway',];

    let proIndx = Math.floor(Math.random() * pronoun.length);
    let subjIndx = Math.floor(Math.random() * subject.length);
    let actIndx = Math.floor(Math.random() * actions.length);
    let posIndx = Math.floor(Math.random() * posession.length);
    let whereIndx = Math.floor(Math.random() * where.length);

    return pronoun[proIndx] + ' ' + subject[subjIndx] + ' ' + action[actIndx] + ' ' + posession[posIndx] + ' ' + where[whereIndx];
  };
