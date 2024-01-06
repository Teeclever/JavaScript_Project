// GitHubFinder class for handling GitHub API requests
class GithubFinder {

    // Constructor to initialize GitHub API credentials and default parameters
    constructor() {
        // GitHub API client ID and secret for authentication
        this.client_id = '48cc9cbc00c36958ca0f';
        this.client_secret = '15b8305420c833636dbf884160c531d6c4e0e1ae';

        // Default parameters for repository requests
        this.repo_count = 5;
        this.repo_sort = 'created: asc';
    }

    // Method to fetch user profile and repositories from the GitHub API
    async get(user) {
        // Fetch user profile data
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();

        // Fetch user repositories data
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repos = await reposResponse.json();

        // Return an object containing both profile and repositories data
        return {
            profile,
            repos
        };
    } 
}

