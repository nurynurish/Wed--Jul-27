function birthyear2age(){
    event.preventDefault();
    var birht_year;
    var current_year;
    var age;
    birht_year = document.getElementById("birth_year").value;
    var d= new Date();
    current_year = d.getFullYear();
    age = current_year - birht_year
    document.getElementById("result").innerHTML = "Your age is " + age;
}