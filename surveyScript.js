
const quotes = [
    "You're doing great. Keep going!",
    "Small steps every day lead to big change.",
    "Progress, not perfection.",
    "You’ve already taken the first step by reflecting!",
    "Each day is a new beginning."
  ];
  
  const themeSelector = document.getElementById("themeSelector");

  themeSelector.addEventListener("change", function () {
    const selected = this.value;
    document.body.className = "";
    document.body.classList.add(selected);
    localStorage.setItem("selectedTheme", selected);
  });

  fetch("https://api.allorigins.win/get?url=" + encodeURIComponent("https://zenquotes.io/api/random"))
.then(res => res.json())
.then(data => {
  const parsed = JSON.parse(data.contents);
  document.getElementById("quote").textContent = `"${parsed[0].q}"`;
  document.getElementById("author").textContent = `- ${parsed[0].a}`;
})
.catch(()=>{
  document.getElementById("quote").textContent = "stay motivated."
  document.getElementById("author").textContent = "-reflectly."
})
const form = document.getElementById("survey-form");
 form.addEventListener("submit", function (e){
    e.preventDefault();
    const formData = new FormData(form);
    const data={};
for (let [key, value] of formData.entries()){
    if(data[key]){
        data[key] = `${data[key]}, ${value}`
    }else{
        data[key] = value;
    }
}
localStorage.setItem("survey-Data", JSON.stringify(data));

const quote = quotes[Math.floor(Math.random() * quotes.length)];

localStorage.setItem("dailyQuote", quote);

window.location.href = "preview.html";
})



