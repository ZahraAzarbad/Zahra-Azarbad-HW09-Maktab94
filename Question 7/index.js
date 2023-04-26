const selectListLiner = document.querySelectorAll(".li-hover")


// selectListLiner.addEventListener("click", (e) => {

//     selectListLiner.toggle("border-hidden")

//     selectListLiner.addClass('border-r');
//     selectListLiner.removeClass('border-hidden');

// })


function myFunction() {
    const liner = document.getElementsByClassName("li-hover");
    if (liner.style.display === "none") {
        liner.style.display = "block";
    } else {
        liner.style.display = "none";
    }
}









