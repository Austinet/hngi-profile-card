const container = document.querySelector(".container");

const userProfile = {
  name: "Udhe Austine Ogaga",
  avatar: {
    url: "assets/Udhe Austine Ogaga.jpg",
  },
  socials_links: [
    {
      name: "x",
      url: "https://x.com/austineudhe",
      icon: "x-twitter",
    },
    {
      name: "linkedin",
      url: "https://linkedin.com/in/udhe-austine-ogaga",
      icon: "linkedin",
    },
    {
      name: "facebook",
      url: "https://facebook.com/austine.udhe",
      icon: "facebook-f",
    },
    {
      name: "tiktok",
      url: "https://tiktok.com/@austinet_",
      icon: "tiktok",
    },
  ],
  bio: `A detail-oriented Frontend Developer with passion for crafting user-tailored and
      visually stunning web applications. Proficient in HTML, CSS, JavaScript and modern
      frameworks like ReactJS and NextJS.`,
  hobbies: ["Football", "Music", "Movies", "Reading"],
  dislikes: ["Disrespect", "Corruption", "Oppression", "Deceit"],
};

const { name, avatar, socials_links, bio, hobbies, dislikes } = userProfile;

container.innerHTML = `
          <article class="profile-card" data-test="test-profile-card">
                <!-- Profile card header-->
                <header class="profile-card__header">
                    <figure class="user-avatar">
                      <img src="${
                        avatar.url
                      }" alt="${name}'s avatar" data-test="test-user-avatar">
                    </figure>
                    <h2 class="user-name" data-test="test-user-name">${name}</h2>
                    <p class="user-time" data-test="test-user-time" id="user-time">Time: ${new Date().getTime()}</p>

                    <!-- User social links-->
                    <nav>
                        <ul class="user-social-links" data-test="test-user-social-links">
                        ${socials_links
                          .map(
                            (social) =>
                              `
                            <li>
                                <a href="${social.url}" target="_blank" rel="noopener noreferrer" data-test="test-user-social-${social.name}">
                                    <i class="fab fa-${social.icon}"></i>
                                </a>
                            </li>
                            `
                          )
                          .join("")}
                        </ul>
                    </nav>
                </header>

                <!-- Profile card main-->
                <main class="profile-card__main">
                    <section>
                    <h3 class="user-bio-header" data-test="test-user-bio-header">Bio</h3>
                        <p class="user-bio" data-test="test-user-bio">
                            ${bio}
                        </p>
                    </section>

                    <!-- User Hobbies and Dislikes sections -->
                    <div class="user-hobbies-and-dislikes-container">
                        <section>
                            <h3 data-test="test-user-hobbies-header">Hobbies</h3>
                            <ul class="user-hobbies" data-test="test-user-hobbies">
                            ${hobbies
                              .map(
                                (hobby) =>
                                  `
                            <li>
                                ${hobby}
                            </li>
                            `
                              )
                              .join("")}
                            </ul>
                        </section>
                        <section>
                            <h3 data-test="test-user-dislikes-header">Dislikes</h3>
                            <ul class="user-dislikes" data-test="test-user-dislikes">
                            ${dislikes
                              .map(
                                (dislike) =>
                                  `
                            <li>
                                ${dislike}
                            </li>
                            `
                              )
                              .join("")}
                            </ul>
                        </section>
                    </div>
                </main>
            </article>
`;

let userTime = document.getElementById("user-time");

// Refreshes time every second
setInterval(() => {
  let currentTime = new Date().getTime();
  userTime.innerText = "Time: " + currentTime;
}, 1000);
