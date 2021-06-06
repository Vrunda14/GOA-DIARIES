
    function showMessage() {
        alert('Cliked on button');
    }


    function showMessage() {
        var name = document.getElementById("name").value;
        var city = document.getElementById("city").value;
        document.getElementById("info").innerHTML = name + " " + city;

    }