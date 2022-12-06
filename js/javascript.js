"use strict";

//-----------------> Elements
const clockPt = document.querySelector(".clock-PT");
const clockJp = document.querySelector(".clock-JP");
const clockHi = document.querySelector(".clock-HI");

const pointdegr = document.querySelector(".hour-pointer");

const now = new Date();

const displayTime = function (zone, lang) {
  const options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: `${zone}`,
  };

  const date = new Intl.DateTimeFormat(`${lang}`, options).format(new Date());

  return date;
};

//-----------------> Digital Clocks

const digitalClocks = function () {
  clockPt.innerHTML = displayTime("Portugal", "pt-PT");
  clockJp.innerHTML = displayTime("Japan", "jv-JP");
  clockHi.innerHTML = displayTime("US/Hawaii", "en-US");
};

digitalClocks();
setInterval(digitalClocks, 1000);

//-----------------> Analogic clocks pointers
