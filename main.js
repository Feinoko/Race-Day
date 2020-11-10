
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

/* const submit = document.getElementById('submit');
submit.addEventListener('click', function(e) {
   e.preventDefault();
   }) */

function ValidateAndSend() {
      
   let fails = validate();
   
   if (fails.length !== 0) {
      fails.forEach(function(obj) {
      let field = document.getElementById(obj.inputType);
      field.parentElement.classList.add('error');
      field.parentElement.setAttribute('data-errormsg', obj.msg);
      })
   } else {
      Send();
   }
}

function validate() {
         
   let failures = [];
   
   // age
   let ageLessChk = document.getElementById('less');
   let ageMoreChk = document.getElementById('more');
   if (!ageLessChk.checked && !ageMoreChk.checked) {
      failures.push({inputType:'less', msg:'please specify age range'});
   }

   // name
   let fn = document.getElementById('fname').value;
   if (!fn) {
      failures.push({inputType:'fname', msg: 'please provide your 1st name'});
   }
   let ln = document.getElementById('lname').value;
   if (!ln) {
      failures.push({inputType:'lname', msg:'please provide your last name'});
   }
   
   for (let i = 0; i < failures.length; i++) { // debug
      console.log(failures[i]);
   }

   return failures;

}

function Send() {

   let raceNumberEarly = Math.round(Math.random() * 1001 + 1000);
   let raceNumberLate = Math.round(Math.random() * 1000);
   
   let age1 = document.getElementById('less').checked;
   let age2 = document.getElementById('more').checked;
   let lateRegister = document.getElementById('latereg').checked;

   if (age1) {
      alert(`Dear ${firstname} ${lastname},\nYour race starts at 1230 hrs.\nYour race number is ${raceNumberLate}`);
   } else if (age2 && !lateRegister) {
      alert('Dear ${firstname} ${lastname},\nYour race starts at 0930 hrs since you are over 18 and registered early.\n' + `Your race number is ${raceNumberEarly}`);
   } else if (age2 && lateRegister) {
      alert('Dear ${firstname} ${lastname},\nYour race starts at 1100 hrs since you are over 18 and registered late.\n' + `Your race number is ${raceNumberLate}`);
   }
   alert('Good luck on your race!');
}
