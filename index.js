const skillsArr = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Node.js",
  "Express",
  "C",
  "C++",
  "Python",
  "MySQL",
  "MongoDB",
  "Git",
  "Auth0 2.0",
  "Arduino",
];
const skillsLogo = [
  "devicon-html5-plain colored",
  "devicon-css3-plain colored",
  "devicon-javascript-plain colored",
  "devicon-typescript-plain colored",
  "devicon-react-original colored",
  "devicon-react-original colored",
  "devicon-nodejs-plain-wordmark colored",
  "devicon-express-original colored",
  "devicon-c-plain colored",
  "devicon-cplusplus-plain colored",
  "devicon-python-plain colored",
  "devicon-mysql-original colored",
  "devicon-mongodb-plain colored",
  "devicon-git-plain colored",
  "devicon-oauth-plain",
  "devicon-arduino-plain colored",
];

window.addEventListener("DOMContentLoaded", () => {
  const abt = document.querySelector("#about");
  setTimeout(() => {
    abt.classList.add("faded");
  }, 100);
  const skills = document.querySelector("#inside-skills");

  for (let j = 0; j < skillsArr.length; j++) {
    const card = document.createElement("div"); //inside div to give new dic, i, p to every card
    card.classList = "card2";

    const text = document.createElement("p");

    const i = document.createElement("i");
    i.classList = skillsLogo[j];
    i.style.fontSize = "3rem";

    text.innerText = skillsArr[j];
    card.append(i);
    card.append(text);
    skills.append(card);
  }
});
