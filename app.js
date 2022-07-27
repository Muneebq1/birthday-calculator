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


    if (userdate > date) {
        alert("Please select real date..")
        return false
    }
    document.getElementById("age").innerHTML = (`${year} years ${month} months & ${day} days old `)

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
    document.getElementById("h1").classList.remove("hidden")

    if (usermonth === 11 && userday >= 22 || usermonth === 0 && userday <= 19) {
        document.getElementById("months").innerText = "Capricorn";
        document.getElementById("paraghraph").innerText = "This is one serious goat. Ambitious and guarded, the Capricorn is always plotting their next move towards greatness. With logic, forethought and intelligence, this sign is the most cerebral of all, but this obsession with achievement can see them spending too much time on LinkedIn and not enough time relaxing. "
    } if (usermonth === 0 && userday >= 20 || usermonth === 1 && userday <= 18) {
        document.getElementById("months").innerText = "Aquarius";
        document.getElementById("paraghraph").innerText = "The modern-day water carrier carries a jug of prosecco and tops up all the glasses at the dinner table. Generous, thoughtful and friendly, the Aquarius is a fantastic friend to everyone, but also requires some quiet thinking time after the party… And sometimes a bit of a cry. And a sulk."
    } if (usermonth === 1 && userday >= 19 || usermonth === 2 && userday <= 20) {
        document.getElementById("months").innerText = "Pisces";
        document.getElementById("paraghraph").innerText ="The saying ‘fish out of water’ could have been coined with the Pisces in mind, because this sign tends to choose just one environment, ideology or workplace, and stick firmly to it. Emotional creatures, the fish is compassionate and loyal, but can - shhhh! - can be prone to secrecy."
    } if (usermonth === 2 && userday >= 21 || usermonth === 3 && userday <= 19) {
        document.getElementById("months").innerText = "Aries";
        document.getElementById("paraghraph").innerText ="A headstrong leader, this determined ram will butt horns with anyone who stands in their way! Always on a determined quest for justice, an Aries loves a battle to fight or a problem to solve. A sheep only in name but never in nature, they’re also caring, upbeat and… OK, sometimes maybe… a little… intense."
    } if (usermonth === 3 && userday >= 20 || usermonth === 4 && userday <= 20) {
        document.getElementById("months").innerText = "Taurus";
        document.getElementById("paraghraph").innerText ="This sign is anything but a bull in a china shop. Slow, deliberate and thoughtful, the Taurus prefers depth of experience over a multitude of more superficial pursuits or relationships. Oh, and there’s just a hint of stubbornness in that bullish head…"
    } if (usermonth === 4 && userday >= 21 || usermonth === 5 && userday <= 21) {
        document.getElementById("months").innerText = "Gemini";
        document.getElementById("paraghraph").innerText ="Geminis are social butterflies, which is why they have a pair of pals as their symbol. Clever and emotionally intuitive, they treat life as an all-you-can-eat buffet, and can really bring the fun. They just might not be too pleased if the spotlight moves onto someone else, though…"
    } if (usermonth === 5 && userday >= 22 || usermonth === 6 && userday <= 22) {
        document.getElementById("months").innerText = "Cancer";
        document.getElementById("paraghraph").innerText ="The clingiest crustacean on the beach, this crab is obsessed with their family security and social network. Home is where the heart is, but insecurity in relationships can make them feel snippy. The upside, of course, is the fierce loyalty, courage and caring nature that they carry around in those loving little shells."
    } if (usermonth === 6 && userday >= 23 || usermonth === 7 && userday <= 22) {
        document.getElementById("months").innerText = "Leo";
        document.getElementById("paraghraph").innerText ="As you might expect from the king of the jungle, a Leo loves their pack and possesses an innate sense of responsibility and generosity. Natural leaders, the only downfall of this lion is their pride (as they might be spotted roaring at criticisms or preening their mane in the mirror)."
    } if (usermonth === 7 && userday >= 23 || usermonth === 8 && userday <= 22) {
        document.getElementById("months").innerText = "Virgo";
        document.getElementById("paraghraph").innerText ="This sign is so level-headed, you could play snooker on their eyebrows. Calm, logical, responsible and kind, they make wonderful friends and team-mates. The only trouble is, not everyone lives up to the high benchmark that the Virgo sets for themselves and others…"
    } if (usermonth === 8 && userday >= 23 || usermonth === 9 && userday <= 23) {
        document.getElementById("months").innerText = "Libra";
        document.getElementById("paraghraph").innerText = "This star-sign is a true social justice warrior, seeking out fairness, quashing discrimination, and refusing to eat their chocolate cake until everyone else has a slice. Details are important to Libras, and this can slow down their decision-making to the point where they start to seem lazy to others… and that’s just NOT FAIR!"
    } if (usermonth === 9 && userday >= 24 || usermonth === 10 && userday <= 21) {
        document.getElementById("months").innerText = "Scorpio";
        document.getElementById("paraghraph").innerText = "The scorpion has its stinger ready at all times (and when the stinger’s in the wash, there’s a sword or a slingshot ready to use instead). Hot-headed, bold and analytical, Scorpios feel things deeply, so they often need to recharge with some alone time. They’re strong leaders, and terrifying, grudge-bearing enemies…"
    } if (usermonth === 10 && userday >= 22 || usermonth === 11 && userday <= 21) {
        document.getElementById("months").innerText = "Sagittarius";
        document.getElementById("paraghraph").innerText = "This centaur loves galloping around, seeing the world, and making grand plans. An adventurer at heart, the four-legged archer is creative and curious, but can be easily sidetracked (which isn’t exactly ideal when aiming a bow and arrow…)"
    }

}

