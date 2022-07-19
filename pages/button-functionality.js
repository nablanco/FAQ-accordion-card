const questionList = {
   1: [ "How many team members can I invite?", "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."] ,
   2: [ "What is the maximum file upload size?", "No more than 2GB. All files in your account must fit your allotted storage space."],
   3: [ "How do I reset my password?", "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."],
   4: [ "Can I cancel my subscription?", "Yes! Send us a message and we’ll process your request no questions asked."],
   5: [ "Do you provide additional support?", "Chat and email support is available 24/7. Phone lines are open during normal business hours."]
}

const btnList = []
const btn1 = document.querySelector(".button-1");
const btn2 = document.querySelector(".button-2");
const btn3 = document.querySelector(".button-3");
const btn4 = document.querySelector(".button-4");
const btn5 = document.querySelector(".button-5");

btn1.addEventListener("click", printButtonClass(btn1));

btn2.addEventListener("click", printButtonClass(btn2));


function printButtonClass (btn) {
   console.log(btn.className);
}