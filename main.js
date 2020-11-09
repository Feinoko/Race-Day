/* let launchBox = document.querySelector('p');

launchBox.addEventListener('click', insertFunction); */

function Send() {
      
   //#region formercode
   /*            let age1 = document.getElementById('less').checked;
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
      
   
         let lateRegister = document.getElementById('latereg').checked; */
   //#endregion formercode
   
         let fails = validate();
         if (fails.length === 0) {
            return;
         } else {
            fails.forEach(function(obj) {
               let field = document.getElementById(obj.inputType);
               
            })
            
            }
         }
   
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
      }
   
      function validate() {
         
         let failures = [];
         
         // age
         let ageLessChk = document.getElementById('less');
         let ageMoreChk = document.getElementById('more');
         if (!ageLessChk.checked && !ageMoreChk) {
            failures.push({inputType:'less', msg:'please specify age range'});
         }
   
         // name
         let fn = document.getElementById('fname');
         if (!fn) {
            failures.push({inputType:'fname', msg: 'please provide your 1st name'});
         }
         let ln = document.getElementById('lname');
         if (!ln) {
            failures.push({inputType:'lname', msg:'please provide your last name'});
         }
          
         return failures;
   
      }
   