var listbutton = document.getElementById("listbutton");
var listsongs = document.getElementById("list-li");
var list = document.getElementById("list-ul")
var inputsongname = document.getElementById("inputsongname")
var inputlink = document.getElementById("inputlink")
var sendbutton = document.getElementById("sendbutton")

var songs = [
  {name: "Sezen Aksu - Keskin Bıçak", link: "https://www.youtube.com/watch?v=kR0EX8XK-8I",},
  {name: "Tarkan - Yolla", link: "https://www.youtube.com/watch?v=_GOZDXq7I-I",},
  {name: "Rafet El Roman ft. Ezo - Kalbine Sürgün", link: "https://www.youtube.com/watch?v=7I3h7czMJeI",},
  {name: "Fettah Can - Boş Bardak", link: "https://www.youtube.com/watch?v=rm9RlME6M4E",},
  {name: "Bora Duran - Sana Doğru", link: "https://www.youtube.com/watch?v=1ZeiF1muZig",},
  {name: "Gökçe - Tuttu Fırlattı", link: "https://www.youtube.com/watch?v=SIIsLTFT_AU",},
  {name: "Kolpa - Gurur Benim Neyime", link: "https://www.youtube.com/watch?v=xR6SzS9JtnA",},
  {name: "Murat Dalkılıç - Bi Hayli", link: "https://www.youtube.com/watch?v=xYRpF8m6oTU",},
  {name: "Yalın - Cumhuriyet", link: "https://www.youtube.com/watch?v=qqh_4Z6QCyw",},
  {name: "Demet Akalın - Ders Olsun", link: "https://www.youtube.com/watch?v=Z_7r_sDiRTE",}
];

listsongs.style.display = "none";
inputsongname.style.display = "none"
inputlink.style.display = "none"
sendbutton.style.display = "none"

function showlist() {
  var listHTML = ""; // Boş bir string oluşturuyoruz

  for (i = 0; i < songs.length; i++) {
    var song = songs[i];
    var listItemHTML = "<li>" + "#" + (i + 1) + " " +
      "<a target=_blank href='" + song.link + "'>" + song.name + "</a>" +
      " <button onclick='deletesong(" + i + ")'>Delete</button>" + "</li>";

    listHTML += listItemHTML; // Her şarkı için oluşturulan HTML'leri birleştiriyoruz
  }

  list.innerHTML = listHTML; // Oluşturulan HTML'i list elementinin içeriğine atıyoruz

  listbutton.style.display = "none";
  listsongs.style.display = "grid";
  inputsongname.style.display = "flex"
  inputlink.style.display = "flex"
  sendbutton.style.display = "flex"
}

function addsong() {
  var songname = document.getElementById("inputsongname").value;
  var inputlink = document.getElementById("inputlink").value;
  var li = document.createElement("li");

  var newsong = {
    name: songname,
    link: songlink,
  };

  if (
    inputlink.includes("youtube.com/watch?v=", "music.youtube.com/watch?v=")
  ) {
    var songlink = inputlink;
  } else {
    alert("Please add YouTube link. Also you can add YouTube Music link");
    return;
  }

  songs.push(newsong);


  li.innerHTML ="#" + songs.length + " " + "<a target=_blank href='" + songlink + "'>" +
    songname + "</a>" + "<button onclick='deletesong(" + (songs.length - 1) + ")'>Delete</button>";

  list.appendChild(li);
}

function deletesong(index) {
  var confirmdelete = confirm(
    "Are you sure you want to delete the song: " + songs[index].name + "?"
  );

  if (confirmdelete) {
    songs.splice(index, 1);
    list.innerHTML = "";
    showlist();

    setTimeout(function () {
      alert("Song has been removed from list");
    }, 100);
  }
}