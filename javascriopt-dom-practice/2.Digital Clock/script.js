(function () {
  const liveClock = () => {
    const currentTime = new Date();
    const hour = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const second = currentTime.getSeconds();

    const formateHour12 = hour > 12 ? hour - 12 : hour;
    const session = hour > 12 ? "am" : "pm";

    const outputHour = (document.getElementById(
      "hour"
    ).innerText = `${formateHour12}:`);
    const outputMinutes = (document.getElementById(
      "minutes"
    ).innerText = `${minutes}:`);
    const outputSecond = (document.getElementById(
      "second"
    ).innerText = `${second}`);
    const outputSession = (document.getElementById(
      "session"
    ).innerText = `${session}`);

    setTimeout(liveClock, 1000);
  };
  liveClock();
})();
