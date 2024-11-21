const steveHead = document.getElementById("steve-head");
const steveEyes = document.getElementsByClassName("eye");

const darken = document.getElementById("darken");

steveHead.onclick = function () {
  steveHead.classList.add("rotate");

  setTimeout(() => {
    for (var i = 0; i < steveEyes.length; i++) {
      steveEyes[i].classList.toggle("herobrine");
    }

    if (darken.style.display === "block") {
      darken.style.display = "none";
    } else {
      darken.style.display = "block";
    }
    steveHead.classList.remove("rotate");
  }, 500);
};
