  // let score = 0;

  //       let btn = document.getElementById("clickBtn");
  //       let reset = document.getElementById("resetBtn");
  //       let result = document.getElementById("score");
  //       let msg = document.getElementById("message");

  //       btn.addEventListener("click", function() {
  //           score++;
  //           result.innerText = "Score: "+ score;
  //           if(score >= 10) {
  //               msg.innerText = "You Won";
  //               msg.style.backgroundColor="red"
  //           }
  //           else {
  //               msg.innerText = "Keep Clicking!";
  //           }
  //       });

  //       reset.addEventListener("click", function() {
  //           score = 0;
  //           result.innerText = "Score: 0";
  //           msg.innerText = "Ready?";
  //       });

        let btn = document.getElementById("btn");
        let count = 0;
        btn.addEventListener("click", function() {
            if(count == 0) {
                document.body.style.backgroundColor = "red";
                count = 1;
            }
            else {
                document.body.style.backgroundColor = "blue";
                count = 0;
            }

        });