
    let addBtn = document.getElementById("addBtn");
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    addBtn.addEventListener("click", function() {

        let task = taskInput.value.trim();

        if (task === "") {
            alert("Please enter a task!");
            return;
        }

        let li = document.createElement("li");

        let span = document.createElement("span");
        span.innerText = task;
        span.classList.add("task-text");

        span.addEventListener("click", function() {
            li.classList.toggle("done");
            updateStats();
        });

        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.classList.add("delete");

        deleteBtn.addEventListener("click", function() {
            li.remove();
            updateStats();
        });

        li.appendChild(span);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);

        taskInput.value = "";

        updateStats();

    });

    function updateStats() {

        let tasks = document.querySelectorAll("#taskList li");

        let done = document.querySelectorAll("#taskList li.done");

        document.getElementById("total").innerText = tasks.length;

        document.getElementById("completed").innerText = done.length;

    }