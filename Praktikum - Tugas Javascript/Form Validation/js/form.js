function validForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let time = document.getElementById("time").value;
    let destination = document.getElementById("destination").value;
    let ticket = document.getElementById("ticket").value;

    if (document.forms["check"]["ticket"].selectedIndex < 1) {
        alert("Please select proper ticket amount.");
        document.forms["check"]["ticket"].focus();
        return false;
    }
  
    alert(
        "Nama : " + name +
        "\nEmail : " + email +
        "\nJam Berangkat : " + time + 
        "\nTujuan : " + destination +
        "\nJumlah Tiket : " + ticket
      );
}