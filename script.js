async function fetchGitHubProfile(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const profile = await response.json();
        console.log('Profile:', profile); // Log profile data
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
        console.log('Repos:', repos); // Log repos data
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
        <img src="${profile.avatar_url}" alt="${profile.login}">
        <h2>${profile.name || profile.login}</h2>
        <p>${profile.bio || 'No bio available.'}</p>
        <p><strong>Followers:</strong> ${profile.followers} | <strong>Following:</strong> ${profile.following}</p>
        <p><a href="${profile.html_url}" target="_blank"><i class="fab fa-github"></i> View GitHub Profile</a></p>
    `;
}

function displayRepos(repos) {
    const reposDiv = document.querySelector('.repos-container');
    reposDiv.innerHTML = ''; // Đảm bảo xóa sạch nội dung cũ trước khi thêm mới
    if (!repos || repos.length === 0) {
        reposDiv.innerHTML = '<p>No repositories found.</p>';
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

function setTheme(theme) {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
}

function toggleTheme() {
    const currentTheme = document.body.className === 'dark' ? 'light' : 'dark';
    setTheme(currentTheme);
}

document.getElementById('theme-toggle').addEventListener('change', toggleTheme);

function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
}

async function main() {
    loadTheme();
    const username = 'VngGodCreative';
    const profile = await fetchGitHubProfile(username);
    displayProfile(profile);
    const repos = await fetchGitHubRepos(username);
    displayRepos(repos);
}

main();