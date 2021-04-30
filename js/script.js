// general variables

const navBtn = document.querySelectorAll(".nav-btn");
const main = document.querySelector(".content");
const burger = document.querySelector(".burger");
const nav = document.querySelector(".menu");

// projects data

const projects = [
    {
        name: "sing-a-long app",
        desc: "a guitarist's songbook",
        techIcons: `<i class='fab fa-vuejs'></i><i class='fab fa-js-square'></i><img src="./assets/firebase.svg" alt="Firebase logo">`,
        linkWeb: "https://sing-a-long.web.app/",
        linkGitHub: "https://github.com/g-czajk/Sing-a-long-app",
    },
    {
        name: "live-chat app",
        desc: "a real time chat app",
        techIcons: `<i class="fab fa-react"></i><i class='fab fa-js-square'></i><img src="./assets/firebase.svg" alt="Firebase logo">`,
        linkWeb: "https://live-chat-59a56.web.app/",
        linkGitHub: "https://github.com/g-czajk/Live-chat-app",
    },
    {
        name: "tactic-board app",
        desc: "a tool for a football coach",
        techIcons:
            "<i class='fab fa-vuejs'></i><i class='fab fa-js-square'></i>",
        linkWeb: "https://g-czajk.github.io/Tactic-board-app/",
        linkGitHub: "https://github.com/g-czajk/Tactic-board-app",
    },
    {
        name: "fake restaurant website",
        desc: "a mock-up website for a restaurant",
        techIcons:
            "<i class='fab fa-js-square'></i><i class='fab fa-css3-alt'></i><i class='fab fa-html5'></i>",
        linkWeb: "https://g-czajk.github.io/Fake-restaurant-website/",
        linkGitHub: "https://github.com/g-czajk/Fake-restaurant-website",
    },
    {
        name: "weather app",
        desc: "an app showing the current weather",
        techIcons:
            "<i class='fab fa-js-square'></i><i class='fab fa-css3-alt'></i><i class='fab fa-html5'></i>",
        linkWeb: "https://g-czajk.github.io/Weather-app/",
        linkGitHub: "https://github.com/g-czajk/Weather-app",
    },
    {
        name: "keyboard-challenge app",
        desc: "a game that checks your typing speed",
        techIcons:
            "<i class='fab fa-js-square'></i><i class='fab fa-css3-alt'></i><i class='fab fa-html5'></i>",
        linkWeb: "https://g-czajk.github.io/Keyboard-challenge-app/",
        linkGitHub: "https://github.com/g-czajk/Keyboard-challenge-app",
    },
    {
        name: "reaction-timer app",
        desc: "an ap that measures your reaction time",
        techIcons: `<i class="fab fa-react"></i><i class='fab fa-js-square'></i>`,
        linkWeb: "https://g-czajk.github.io/Reaction-timer/",
        linkGitHub: "https://github.com/g-czajk/Reaction-timer",
    },
    {
        name: "to-do-list app",
        desc: "an app where you can note your todos",
        techIcons:
            "<i class='fab fa-js-square'></i><i class='fab fa-css3-alt'></i><i class='fab fa-html5'></i>",
        linkWeb: "https://g-czajk.github.io/To-do-list-app/",
        linkGitHub: "https://github.com/g-czajk/To-do-list-app",
    },
    {
        name: "team-draw app",
        desc: "an app that draws teams from a pool of players",
        techIcons:
            "<i class='fab fa-js-square'></i><i class='fab fa-css3-alt'></i><i class='fab fa-html5'></i>",
        linkWeb: "https://g-czajk.github.io/Team-draw-app/",
        linkGitHub: "https://github.com/g-czajk/Team-draw-app",
    },
];

// handle burger nav

const toggleNav = () => {
    nav.classList.toggle("visible");
    burger.classList.toggle("active");
};

burger.addEventListener("click", toggleNav);

// render sections html

const render = (btn) => {
    if (btn === "projects") {
        main.innerHTML =
            "<h2>my work so far:</h2><div class='portfolio'></div>";
        const projectsContainer = document.querySelector(".portfolio");
        for (let i = 0; i < projects.length; i++) {
            projectsContainer.innerHTML += `<div class="project"><p class="name"><i class="fas fa-code"></i>${projects[i].name}</p>
<p class="description">${projects[i].desc}</p><div class="tech">${projects[i].techIcons}</div><div class="link link-web"><a href="${projects[i].linkWeb}" target="_blank"><i class="fas fa-globe-europe"></i></a></div><div class="link link-github"><a href="${projects[i].linkGitHub}" target="_blank"><i class="fab fa-github"></i></a></div></div>`;
        }
    } else if (btn === "about") {
        main.innerHTML = `<h2>about me:</h2><div class="about"><p>I'm a self-taught junior front-end developer, passionate about creating and learning new things.</p><p>At the moment I'm constantly improving my programming skills (focusing on JS and Vue) and I'm willing to start working as a junior front-end dev.</p><p class="techs-intro">Techs I use:</p><div class="techs"><i class="fab fa-js-square"></i><i class="fab fa-vuejs"></i><i class="fab fa-react"></i><i class="fab fa-css3-alt"></i><i class="fab fa-sass"></i><i class="fab fa-html5"></i><img src="./assets/firebase.svg" alt="firbase image"/><i class="fab fa-node"></i><i class="fab fa-git"></i><i class="fab fa-npm"></i></div></div>`;
    } else if (btn === "contact") {
        console.log("contact");
    }
};

// handle nav clicks

const changeContent = (e) => {
    if (!e.target.classList.contains("active")) {
        const mainContent = document.querySelectorAll(".content > *");
        mainContent[0].addEventListener("transitionend", () => {
            mainContent.forEach((element) => {
                element.remove();
            });
            render(e.target.dataset.link);
        });
        mainContent.forEach((element, index) => {
            if (index % 2 === 0) {
                element.classList.add("fade-left");
            } else {
                element.classList.add("fade-right");
            }
        });
        burger.classList.add("visible");
    } else {
        return;
    }

    if (!e.target.classList.contains("fa-project-diagram")) {
        navBtn.forEach((btn) => btn.classList.remove("active"));
        e.target.classList.add("active");
    } else {
        document
            .querySelector('.menu li[data-link="projects"]')
            .classList.add("active");
    }
};

navBtn.forEach((btn) => {
    btn.addEventListener("click", changeContent);
});
