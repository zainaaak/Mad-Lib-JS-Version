document.getElementById("btn").addEventListener("click", getMadLib1);

function getMadLib1() {
  let family = document.getElementById("family").value;
  let pluralNoun = document.getElementById("noun").value;
  let subject = document.getElementById("subject").value;
  let colorNoun = document.getElementById("colornoun").value;

  let output = `My ${family} loves to eat pizza and
   then ${pluralNoun}. In ${subject} class, 
   our teacher was wearing a ${colorNoun}`;

  document.getElementById("madlibbtn").innerHTML = output;
}

document.getElementById("btn2").addEventListener("click", getMadLib2);

function getMadLib2() {
  let family = document.getElementById("family").value;
  let pluralNoun = document.getElementById("noun").value;
  let subject = document.getElementById("subject").value;
  let colorNoun = document.getElementById("colornoun").value;

  let output = `One time my ${family} went fishing and started
   to ${pluralNoun}.
   Yesterday in ${subject} class, 
   the famous movie star Jason Mamoa visited us and he started to do ${colorNoun}`;

  document.getElementById("madlibbtn2").innerHTML = output;
}
