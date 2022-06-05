/*  =========== */
/*  QUIZ  GAME */
/*  ========= */

console.log('Hello World');

let list_of_radio_names = ["radio_question002", "radio_question003"];
let list_of_checkbox_names = ["check_question003"];
let list_of_textarea_names = ["text_question001"];

const test_radio = (my_list = [""]) => {
    my_list.forEach(radio_categorie => {
        let all_of_this = document.querySelectorAll("input[name=" + radio_categorie + "]:checked");
        if (all_of_this.length != 1) {
            let parent = document.querySelector("input[name=" + radio_categorie + "]:first-child").parentNode.parentNode;
            let error_child = document.createElement("div");
            error_child.setAttribute("class", "uncompleted");
            error_child.innerHTML = "Question obligatoire *"
            parent.insertBefore(error_child, parent.firstChild);
        }
    });
};

const test_check = (my_list = [""]) => {
    my_list.forEach(check_categorie => {
        let all_of_this = document.querySelectorAll("input[name*=" + check_categorie + "]:checked");
        if (all_of_this.length < 1) {
            let parent = document.querySelector("input[name*=" + check_categorie + "]:first-child").parentNode.parentNode;
            let error_child = document.createElement("div");
            error_child.setAttribute("class", "uncompleted");
            error_child.innerHTML = "Question obligatoire *"
            parent.insertBefore(error_child, parent.firstChild);
        }
    });
};

const test_text = (my_list = [""]) => {
    my_list.forEach(text_categorie => {
        let my_text_area = document.querySelector("textarea[name=" + text_categorie + "]");
        if (my_text_area && my_text_area.value.trim() == "") {
            let parent = my_text_area.parentNode.parentNode;
            let error_child = document.createElement("div");
            error_child.setAttribute("class", "uncompleted");
            error_child.innerHTML = "Question obligatoire *"
            parent.insertBefore(error_child, parent.firstChild);
        }
    });
};

let submit_button = document.querySelector("#submit_button");
submit_button.addEventListener("click", () => {
    let uncompleted = document.getElementsByClassName("uncompleted");
    while (uncompleted.length > 0)
        uncompleted[0].remove();
    test_text(list_of_textarea_names);
    test_check(list_of_checkbox_names);
    test_radio(list_of_radio_names);
});
