function imagePicker() {
    const iselect = document.getElementById("iselect");
    const ires = document.getElementById("ires");

    if (iselect.value == "opt1") {
        ires.src = "robot.png";
        window.confirm("This is a robot.");
    }
    if (iselect.value == "opt2") {
        ires.src = "orang1.png";
        window.confirm("This is a human.");
    }
    if (iselect.value == "opt3") {
        ires.src = "python.png";
        window.confirm("This is a Python logo.");
    }
    if (iselect.value == "opt4") {
        ires.src = "pesawat.png";
        window.confirm("This is a paper airplane.");
    }
    if (iselect.value == "opt5") {
        ires.src = "coding.png";
        window.confirm("This is a monitor.");
    }
    if (iselect.value == "opt6") {
        ires.src = "edukasi.png";
        window.confirm("This is a book.");
    }
    if (iselect.value == "opt0") {
        window.confirm("You haven't selected any images.")
    }
}