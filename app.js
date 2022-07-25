function calculate() {

    let user = document.getElementById("userage").value;
    let date = new Date();
    let userdate = new Date(user)

    currentyear = date.getFullYear();
    useryear = userdate.getFullYear();

    currentmonth = date.getMonth();
    usermonth = userdate.getMonth();

    currentday = date.getDate();
    userday = userdate.getDate();


    let year = currentyear - useryear;

    console.log("year", year)


    let month = "";

    if (currentmonth >= usermonth) {
        month = currentmonth - usermonth;
    } else {

        month = 12 + currentmonth - usermonth;
    }
    console.log("month", month)

    let multiply = 24 * 60 * 60 * 1000;

    let day = "";

    if (currentday >= userday) {
        day = currentday - userday
    } else {

        day = 30 + currentday - userday
    }

    console.log(day, "days")

    if (usermonth === 0) {
        document.getElementById("jan").classList.toggle("hidden")   
    }  if (usermonth === 1) {
        document.getElementById("jan").classList.toggle("hidden") 
        document.getElementById("feb").classList.toggle("hidden")  
    }

    if (userdate > date) {
        alert("Please select real date..")
        return false
    }
    document.getElementById("age").innerHTML = (`you are ${year} years ${month} months & ${day} days old `)

    let birthday = new Date(
        date.getFullYear(),
        userdate.getMonth(),
        userdate.getDate())

    if (date > birthday) {
        birthday.setFullYear(date.getFullYear() + 1);
    }


    let age = Math.ceil(
        (birthday.getTime() - date.getTime()) / multiply
    );
    document.getElementById("daysleft").innerText = (`${age} days left in your next birthday`)
    document.getElementById("field").classList.remove("hidden")
    return false
}
