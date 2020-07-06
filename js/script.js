    const welcomeFunction = () => {
        console.log("Hello Client")
    }
    {
        let tasks = [
        ];

        const reset = () => {

            const input = document.querySelector('.js-input');
            input.value = "";
            input.focus();

        }

        const addNewTask = (newTaskContent) => {
            tasks = [...tasks,
            {
                content: newTaskContent,
                done: false,
            },
            ];
            render();
        }

        const toggleDoneTask = (taskIndex) => {
            tasks = [...tasks]
            tasks[taskIndex].done = !tasks[taskIndex].done;
            render()
        }

        const removeTask = (taskIndex) => {
            tasks = [...tasks.slice(0, taskIndex),
            ...tasks.slice(taskIndex + 1)
            ];
            render()
        }

        const bindEvents = () => {
            const toggleDoneButtons = document.querySelectorAll(".js-doneButton");

            toggleDoneButtons.forEach((toggleDoneButton, index) => {
                toggleDoneButton.addEventListener('click', () => {
                    toggleDoneTask(index);
                });
            });

            const removeButtons = document.querySelectorAll(".js-removeButton");

            removeButtons.forEach((removeButton, index) => {
                removeButton.addEventListener('click', () => {
                    removeTask(index);
                });
            });

        }



        const render = () => {
            let htmlString = "";

            for (const task of tasks) {
                htmlString += ` 
            <li class="tasks__item">
            <button class="tasks__button tasks__button--toggleDone js-doneButton">
            ${task.done ? "✔️" : ""}
            </button>
            <span class="tasks__text${task.done ? " tasks__text--done" : ""}">
            ${task.content}
              </span>
            <button class="tasks__button tasks__button--remove js-removeButton">
            🗑️
            </button>
            </li>
            `
            }
            document.querySelector(".js-tasks__list").innerHTML = htmlString;

            bindEvents();

        }

        const onFormSubmit = (event) => {
            event.preventDefault();
            const newTaskContent = document.querySelector(".js-input").value.trim()
            if (newTaskContent === "") {
                reset();
                return
            }
            addNewTask(newTaskContent);
            reset();
        }

        const init = () => {
            render();

            const form = document.querySelector(".js-form");

            form.addEventListener("submit", onFormSubmit);
        }
        init();

    }