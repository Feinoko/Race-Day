let launchBox = document.querySelector('p');

launchBox.addEventListener('click', insertFunction);

function insertFunction() {
   let age = prompt('insert age');
   let time = prompt('did you register in morning or afternoon(type AM or PM) ?');
   let earlyReg = true;

   let raceNumberEarly = Math.round(Math.random() * 1001 + 1000);
   let raceNumberLate = Math.round(Math.random() * 1000);

   if (age>0 && age<18) {
      alert('Your race starts at 1230 hrs' + ` & your race number is ${raceNumberLate}`);
   } else if (age>18 && time === 'AM') {
      alert('Your race starts at 0930 hrs since you are over 18 and registered early' + ` & your race number is ${raceNumberEarly}`);
   } else if (age>18 && time === 'PM') {
      alert('Your race starts at 1100 hrs since you are over 18 and registered late' + ` & your race number is ${raceNumberLate}`);
   } else {
      alert('enter valid age!');
      insertFunction();
   }



}