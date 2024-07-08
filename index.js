// Particles.js configuration
particlesJS("background", {
    particles: {
        number: {
            value: 15,
            density: {
                enable: true,
                value_area: 300,
            },
        },
        color: {
            value: "#ffffff",
        },
        shape: {
            type: "triangle",
        },
        opacity: {
            value: 0.8,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 5,
            random: true,
            anim: {
                enable: true,
                speed: 4,
                size_min: 0.3,
                sync: false,
            },
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "bounce",
            bounce: false,
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse",
            },
            onclick: {
                enable: true,
                mode: "push",
            },
            resize: true,
        },
    },
    retina_detect: true,
});

// GitHub profile and repos fetching and displaying
async function fetchGitHubProfile(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const profile = await response.json();
        console.log('Profile:', profile);
        return profile;
    } catch (error) {
        console.error('Failed to fetch profile:', error);
    }
}

async function fetchGitHubRepos(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        if (!response.ok) throw new Error('Network response was not ok');
        const repos = await response.json();
        console.log('Repos:', repos);
        return repos;
    } catch (error) {
        console.error('Failed to fetch repos:', error);
    }
}

function displayProfile(profile) {
    const profileDiv = document.getElementById('profile');
    if (!profile) {
        profileDiv.innerHTML = '<p>Profile not found.</p>';
        return;
    }
    profileDiv.innerHTML = `
        <img src="${profile.avatar_url}" alt="${profile.login}" style="width: 100px; height: 100px; border-radius: 50%;">
        <h2>${profile.name || profile.login}</h2>
        <p>${profile.bio || 'No bio available.'}</p>
        <p><strong>Followers:</strong> ${profile.followers} | <strong>Following:</strong> ${profile.following}</p>
        <div class="social-icons">
            <a href="${profile.html_url}" target="_blank"><i class="fab fa-github"></i></a>
            <a href="https://facebook.com/nhd31082003" target="_blank"><i class="fab fa-facebook"></i></a>
            <a href="https://instagram.com/creative1896" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="https://discord.gg/4Sbc2hVvNT" target="_blank"><i class="fab fa-discord"></i></a>
            <a href="https://youtube.com/@creative1896" target="_blank"><i class="fab fa-youtube"></i></a>
            <a href="https://open.spotify.com/user/317htlrmz66bjeqe4cktshzz7u3q?si=7f0624d9511c461c" target="_blank"><i class="fab fa-spotify"></i></a>
            <a href="https://steamcommunity.com/id/creative3108" target="_blank"><i class="fab fa-steam"></i></a>
            <a href="https://store.epicgames.com/u/59db6de1245e4c3890b5f3458618d6d9" target="_blank"><i class="fab fa-epic-games"></i></a>
        </div>
    `;
}

function displayRepos(repos) {
    const reposDiv = document.querySelector('.repos-container');
    reposDiv.innerHTML = '<h1>Github Repositories</h1>';
    if (!repos || repos.length === 0) {
        const noReposMessage = document.createElement('p');
        noReposMessage.className = 'no-repos';
        noReposMessage.textContent = 'No repositories found.';
        reposDiv.appendChild(noReposMessage);
        return;
    }
    repos.forEach(repo => {
        const repoDiv = document.createElement('div');
        repoDiv.className = 'repo';
        repoDiv.innerHTML = `
            <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
            <p>${repo.description || 'No description available.'}</p>
            <p><strong>Stars:</strong> ${repo.stargazers_count} | <strong>Forks:</strong> ${repo.forks_count}</p>
        `;
        reposDiv.appendChild(repoDiv);
    });
}

async function main() {
    const username = 'vngctcreative';
    const profile = await fetchGitHubProfile(username);
    displayProfile(profile);
    const repos = await fetchGitHubRepos(username);
    displayRepos(repos);
}

main();