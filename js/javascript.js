"use strict";

//-----------------> Elements
const clockPt = document.querySelector(".clock-PT");
const clockJp = document.querySelector(".clock-JP");
const clockHi = document.querySelector(".clock-HI");

const hhPointerPt = document.querySelector(".hh-pointer-pt");
const hhPointerJp = document.querySelector(".hh-pointer-jp");
const hhPointerHi = document.querySelector(".hh-pointer-hi");

const mmPointerPt = document.querySelector(".mm-pointer-pt");
const mmPointerJp = document.querySelector(".mm-pointer-jp");
const mmPointerHi = document.querySelector(".mm-pointer-hi");

const ssPointerPt = document.querySelector(".ss-pointer-pt");
const ssPointerJp = document.querySelector(".ss-pointer-jp");
const ssPointerHi = document.querySelector(".ss-pointer-hi");

const btnCheckTime = document.querySelector(".btn");

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

//associar angulos dos ponteiros as horas

const pointerMovement = function () {
  const displayTimePt = displayTime("Portugal", "pt-PT").split(":");
  const displayTimeJp = displayTime("Japan", "jv-JP")
    .slice(0, -2)
    .trimEnd()
    .split(":");
  const displayTimeHi = displayTime("US/Hawaii", "en-US")
    .slice(0, -2)
    .trimEnd()
    .split(":");

  hhPointerPt.style.transform = `rotate(${displayTimePt[0] * 30}deg)`;
  hhPointerJp.style.transform = `rotate(${displayTimeJp[0] * 30}deg)`;
  hhPointerHi.style.transform = `rotate(${displayTimeHi[0] * 30}deg)`;

  mmPointerPt.style.transform = `rotate(${displayTimePt[1] * 6}deg)`;
  mmPointerJp.style.transform = `rotate(${displayTimeJp[1] * 6}deg)`;
  mmPointerHi.style.transform = `rotate(${displayTimeHi[1] * 6}deg)`;

  ssPointerPt.style.transform = `rotate(${displayTimePt[2] * 6}deg)`;
  ssPointerJp.style.transform = `rotate(${displayTimeJp[2] * 6}deg)`;
  ssPointerHi.style.transform = `rotate(${displayTimeHi[2] * 6}deg)`;
};

pointerMovement();
setInterval(pointerMovement, 1000);
