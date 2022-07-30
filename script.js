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



function age2birthyear(){
    event.preventDefault();
    var birth_day;
    var age_2;
    birth_day = document.getElementById("birth_day").value;
    var d= new Date();
    current_year = d.getFullYear();
    age_2 = current_year - birth_day
    document.getElementById("result_2").innerHTML = "You were born in " + age_2;
}