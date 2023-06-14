$(document).ready(function () {

    let submit = document.querySelector("#submit-btn")
    let blockNum = 1
    let incrementValue = 1;
    submit.addEventListener("click", () => {
        let input = document.querySelector("#initial-number");
        let inputValue = parseInt(input.value, 10);
        if (inputValue > 0) {
            let card = document.createElement("div");
            card.classList.add("menu-container", "card", "bg-opacity-25", "m-2");
            card.setAttribute("id", `block-${blockNum}`);
            card.innerHTML = `<ul id="ul-block-${blockNum}" class="menu block-${blockNum}"></ul>`;
            document.body.appendChild(card)
            for (let i = incrementValue; i < inputValue + incrementValue; i++) {
                document.querySelector(`#block-${blockNum} .menu`).innerHTML += `
                <li class="submenu submenu_handle grabbable" title="Drag N Drop">
                <span class="fs-1">${i}</span>
                </li>
                `;
            }
            new Draggable.Sortable(
                document.querySelectorAll(`#ul-block-${blockNum}`),
                {
                    draggable: ".submenu",
                    handle: ".submenu_handle",
                    swapAnimation: {
                        duration: 200,
                        easingFunction: "ease-in-out",
                        vertical: true,
                    },
                    plugins: [Draggable.Plugins.SwapAnimation],
                }
            );
            //grabbable cursor
            let element = document.querySelector(".menu");

            element?.addEventListener("mousedown", function () {
                element.classList.add("grabbing");
            });

            element?.addEventListener("mouseup", function () {
                element.classList.remove("grabbing");
            });

            blockNum += 1
            incrementValue += inputValue
            input.value = "";
        }
    });
});