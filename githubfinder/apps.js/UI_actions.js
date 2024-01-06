// UI_actions class for handling actions related to the UI on the webpage
class UI_actions {

    // Display user profile information on the webpage
    displayProfile(profile) {
        const sect = document.querySelector('.section2').style.display = "grid";
        const profileSection = document.querySelector('.section2');

        profileSection.innerHTML = `
            <div class="prof1">
                <div class="img">
                    <img src="${profile.avatar_url}" alt="image_fault">
                </div>
                <a href="${profile.html_url}">
                    <button>View Profile</button>
                </a>
            </div>
            <div class="prof2">
                <div class="icons">
                    <div>Username: ${profile.login}</div>
                    <div>Public Repos: ${profile.public_repos}</div>
                    <div>Public Gist: ${profile.public_gists}</div>
                    <div>Followers: ${profile.followers}</div>
                    <div>Following: ${profile.following}</div>
                </div>
                <div class="info">
                    <div>Company/Name: <span>${profile.name}</span></div>
                    <div>Website/Blog: <span>${(profile.blog != undefined) ? profile.blog : 'null'}</span></div>
                    <div>Location:  <span>${(profile.location != undefined) ? profile.location : 'Not disclosed'}</span></div>
                    <div>Member Since: <span>${profile.created_at}</span></div>
                </div>
                <span class="bios">
                    <span class="bio">Bios:</span>
                    ${(profile.bio != undefined) ? profile.bio : 'Bios not defined'}
                </span>
            </div>`;
    }

    // Display error message on the webpage
    displayerr(msg, classN) {
        // clear previous error
        this.removeerr();
        const div = document.createElement('div');
        div.className = classN;

        const parent = document.querySelector('.insert');
        div.appendChild(document.createTextNode(msg));

        parent.insertBefore(div, parent.firstElementChild);

        setTimeout(this.removeerr, 3000);
    }

    // Remove error message from the webpage
    removeerr() {
        const alertval = document.querySelector('.alert');
        if (alertval) {
            alertval.remove();
        }
    }

    // Clear user profile information on the webpage
    clearProfile() {
        const profile = document.querySelector('.prof1');
        const sect = document.querySelector('.section2').style.display = "none";
        const sect1 = document.querySelector('.section3');

        profile.innerHTML = "";
        sect1.innerHTML = "";
    }

    // Display user's repositories on the webpage
    displayRepos(repos) {
        const parent = document.querySelector('.section3');
        this.removerepo();
        const ul = document.createElement('ul');
        const h3 = document.createElement('h3');
        h3.innerHTML = "Latest Repos";

        ul.className = 'repo';

        let content = "";
        repos.forEach((value) => {
            content += `<li>
                            <a href=${value.html_url}>${value.name}</a> 
                            <div class="icons2">
                                <div>Stars ${value.stargazers_count}</div>
                                <div>Watchers ${value.watchers}</div>
                                <div>Fork ${value.forks_count}</div>
                            </div>
                        </li>`;
        });

        ul.innerHTML = content;
        parent.appendChild(h3);
        parent.appendChild(ul);
    }

    // Remove user's repositories from the webpage
    removerepo() {
        const repo = document.querySelector('.repo');
        const h3 = document.querySelector('h3');
        if (repo &&  h3) {
            repo.remove();
            h3.remove();
        }
    }
}

// End of UI_actions class thanksss for going through 
