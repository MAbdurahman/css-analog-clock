/*-----Javascript for css-analog-clock website */
$(document).ready(function () {

   const dialLines = document.getElementsByClassName("dial-lines");
   const clockEl = document.getElementsByClassName("clock")[0];

   for (let i = 1; i < 60; i++) {
      clockEl.innerHTML += "<div class='dial-lines'></div>";
      dialLines[i].style.transform = "rotate(" + 6 * i + "deg)";
   }

   function clock() {
      const weekday = new Array(7),
         d = new Date(),
         h = d.getHours(),
         m = d.getMinutes(),
         s = d.getSeconds(),
         date = d.getDate(),
         month = d.getMonth() + 1,
         year = d.getFullYear(),
         hDeg = h * 30 + m * (360 / 720),
         mDeg = m * 6 + s * (360 / 3600),
         sDeg = s * 6,
         hEl = document.querySelector(".hour-hand"),
         mEl = document.querySelector(".minute-hand"),
         sEl = document.querySelector(".second-hand"),
         dateEl = document.querySelector(".date"),
         dayEl = document.querySelector(".day");

      weekday[0] = "Sunday";
      weekday[1] = "Monday";
      weekday[2] = "Tuesday";
      weekday[3] = "Wednesday";
      weekday[4] = "Thursday";
      weekday[5] = "Friday";
      weekday[6] = "Saturday";

      const day = weekday[d.getDay()];

      hEl.style.transform = "rotate(" + hDeg + "deg)";
      mEl.style.transform = "rotate(" + mDeg + "deg)";
      sEl.style.transform = "rotate(" + sDeg + "deg)";
      if (date < 10) {
         dateEl.innerHTML = month + "/0" + date + "/" + year;
      } else {
         dateEl.innerHTML = month + "/" + date + "/" + year;
      }
      dayEl.innerHTML = day;
   }

   setInterval(clock, 1000);

});