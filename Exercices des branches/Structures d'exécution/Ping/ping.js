const sitesWeb = [
  { name: "leboncoin", url: "https://www.leboncoin.fr/", timing: 0 },
  { name: "Ada", url: "https://adatechschool.fr/", timing: 0 },
  {
    name: "Notion",
    url: "https://www.notion.so/",
    timing: 0,
  },
  {
    name: "Lovelace",
    url: "https://www.lovelace.adatechschool.fr/pei/",
    timing: 0,
  },
];

function doTask(url) {
  return window.open(url);
}
function calculate_time(url) {
  let startTime;
  let endTime;
  startTime = performance.now();
  doTask(url);
  endTime = performance.now();
  return endTime - startTime;
}
function displayTime() {
  for (let i = 0; i < sitesWeb.length; i++) {
    sitesWeb[i].timing = calculate_time(sitesWeb[i].url);
  }
  sitesWeb.sort((a, b) => (a.timing > b.timing ? 1 : -1));
  console.log(sitesWeb);
  for (let i = 0; i < sitesWeb.length; i++) {
    document.querySelector(
      ".output"
    ).innerHTML += `<li> ${sitesWeb[i].name} : ${sitesWeb[i].timing}</li>`;
  }
}
displayTime();