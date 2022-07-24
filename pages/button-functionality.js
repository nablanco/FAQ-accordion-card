const questionList = {
   1: [ "How many team members can I invite?", "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."] ,
   2: [ "What is the maximum file upload size?", "No more than 2GB. All files in your account must fit your allotted storage space."],
   3: [ "How do I reset my password?", "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."],
   4: [ "Can I cancel my subscription?", "Yes! Send us a message and we’ll process your request no questions asked."],
   5: [ "Do you provide additional support?", "Chat and email support is available 24/7. Phone lines are open during normal business hours."]
}

const btns = document.querySelectorAll("button.question");
const paragraphs = document.querySelectorAll("p.answer");
const arrows = document.querySelectorAll("div.icon-arrow");

let btnStatus = ["closed","closed","closed","closed","closed"]

// console.log(btns[0].classList)
// console.log(paragraphs[0].classList)

btns.forEach((btn, i) => {
   btn.addEventListener("click", (event) => {
      if (btnStatus[i] === "open") {
         paragraphs[i].classList.remove("open");
         paragraphs[i].classList.add("closed");

         arrows[i].classList.remove("open");
         arrows[i].classList.add("closed");

         btnStatus.forEach((el, i) => btnStatus[i] = "closed");
      } else {
         paragraphs[i].classList.remove("closed");
         paragraphs[i].classList.add("open");

         arrows[i].classList.remove("closed");
         arrows[i].classList.add("open");

         let openButtonIndex = btnStatus.indexOf('open');
         console.log(openButtonIndex);

         if (openButtonIndex >= 0) {
            console.log("")
            paragraphs[openButtonIndex].classList.remove("open");
            paragraphs[openButtonIndex].classList.add("closed");
   
            arrows[openButtonIndex].classList.remove("open");
            arrows[openButtonIndex].classList.add("closed");
         };

         btnStatus.forEach((el ,i) => btnStatus[i] = "closed");
         btnStatus[i] = "open";
      };
      console.log("Updated button status list: " + btnStatus)
   })
})