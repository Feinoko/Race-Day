/* let launchBox = document.querySelector('p');

launchBox.addEventListener('click', insertFunction); */

function insertFunction() {
   /* let age = prompt('insert age');
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
      insertFunction(); */
      
      let age1 = document.getElementById('less').checked;
      let age2 = document.getElementById('more').checked;

      // checks if no radio button is filled by falsy check, function exited
      if (age1 === false && age2 === false) {
         alert('please inform us about your age');
         return;
      }

      if (!age1) {
         age2 = document.getElementById('more').value;
      }

      let firstname = document.getElementById('fname').value;
      let lastname = document.getElementById('lname').value;
      if (firstname === "" && lastname === "") {
         alert('please enter your first & last name');
         return;
      }
      if (firstname === "") {
         alert('please enter your first name');
         return;
      } else if (lastname === "") {
         alert('please enter your last name');
         return;
      }
      
      let lateRegister = document.getElementById('latereg').checked;

      let raceNumberEarly = Math.round(Math.random() * 1001 + 1000);
      let raceNumberLate = Math.round(Math.random() * 1000);

      if (age1) {
         alert(`Dear ${firstname} ${lastname},\nYour race starts at 1230 hrs.\nYour race number is ${raceNumberLate}`);
      } else if (age2 && !lateRegister) {
         alert('Dear ${firstname} ${lastname},\nYour race starts at 0930 hrs since you are over 18 and registered early.\n' + `Your race number is ${raceNumberEarly}`);
      } else if (age2 && lateRegister) {
         alert('Dear ${firstname} ${lastname},\nYour race starts at 1100 hrs since you are over 18 and registered late.\n' + `Your race number is ${raceNumberLate}`);
      }
      alert('Good luck on your race!');

  
   /* } */



}