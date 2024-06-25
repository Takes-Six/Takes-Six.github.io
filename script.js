document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        const header = document.querySelector("header");
        if (window.scrollY > 50) {
            header.style.background = "#333";
        } else {
            header.style.background = "#1f1f1f";
        }
    });

    const projects = [
        {
            title: "Theo's Diary",
            image: "Sprites/ProjectsSprites/TheosDiary/MainScreen.png",
            video: "Sprites/ProjectsSprites/TheosDiary/Video/AppLogoV2_2.mp4",
            link: "project1.html",
            size: "large",
            aspectRatio: "4 / 3"
        },
        {
            title: "Theo's Diary",
            image: "Sprites/ProjectsSprites/TheosDiary/MainScreen.png",
            video: "Sprites/ProjectsSprites/TheosDiary/Video/AppLogoV2_2.mp4",
            link: "project1.html",
            size: "small",
            aspectRatio: "3 / 4"
        },
        {
            title: "Theo's Diary",
            image: "Sprites/ProjectsSprites/TheosDiary/MainScreen.png",
            video: "Sprites/ProjectsSprites/TheosDiary/Video/AppLogoV2_2.mp4",
            link: "project1.html",
            size: "large",
            aspectRatio: "4 / 3"
        },
        {
            title: "Theo's Diary",
            image: "Sprites/ProjectsSprites/TheosDiary/MainScreen.png",
            video: "Sprites/ProjectsSprites/TheosDiary/Video/AppLogoV2_2.mp4",
            link: "project1.html",
            size: "small",
            aspectRatio: "3 / 4"
        },
        {
            title: "Theo's Diary",
            image: "Sprites/ProjectsSprites/TheosDiary/MainScreen.png",
            video: "Sprites/ProjectsSprites/TheosDiary/Video/AppLogoV2_2.mp4",
            link: "project1.html",
            size: "large",
            aspectRatio: "4 / 3"
        },
        {
            title: "Theo's Diary",
            image: "Sprites/ProjectsSprites/TheosDiary/MainScreen.png",
            video: "Sprites/ProjectsSprites/TheosDiary/Video/AppLogoV2_2.mp4",
            link: "project1.html",
            size: "small",
            aspectRatio: "3 / 4"
        }
        
    ];

    const projectList = document.getElementById("project-list");

    projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");
        projectCard.innerHTML = `
            <a href="${project.link}">
                <div class="project-title">${project.title}</div>
                <img src="${project.image}" alt="${project.title}">
                <video src="${project.video}" loop muted></video>
            </a>
        `;

        // Add event listeners to play and pause the video on hover
        const videoElement = projectCard.querySelector("video");
        projectCard.addEventListener("mouseenter", () => {
            videoElement.play();
        });
        projectCard.addEventListener("mouseleave", () => {
            // Let the video continue playing during the fade out
            setTimeout(() => {
                videoElement.pause();
            }, 300); // Adjust this timeout to match the transition duration
        });

        projectList.appendChild(projectCard);
    });
});
