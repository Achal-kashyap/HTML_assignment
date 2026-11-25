const heading = document.getElementById("heading");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
// const output = document.getElementsByID("output");
const btn4= document.querySelector("#btn4");
const btn5= document.querySelectorAll(".meow")
const btn6= document.querySelector(".new")


btn1.addEventListener("click", function() {
  heading.innerHTML = "JavaScript is Successfully Connected!";
});

btn2.addEventListener("click", function() {
  heading.style.color = "crimson";
  heading.style.backgroundColor = "#ffe6e6";
});

btn3.addEventListener("click", function() {
  output.innerHTML = "You have learned how to connect JavaScript with HTML!";
  btn3.style.width="100px"
  btn3.style.height="100px"
  btn3.style.backgroundColor="#db8888"
});

btn4.addEventListener("click",function(){
    heading.style.fontSize="50px";
});

console.log(output)
console.log(btn1)
console.log(btn4)
console.log(btn5)
console.log(btn6)
btn1.innerHTML="clicked"
btn3.style.borderColor="red"
btn3.style.backgroundColor="cyan"
