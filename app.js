//Select DOM
const get_profile = document.getElementById("get_profile");
const profile_image = document.getElementById("profile_img");
const name = document.getElementById("profile_name");
const profile_bio = document.getElementById("profile_bio");
const userName = document.getElementById("userName");

// Event-Listener
get_profile.addEventListener("click", getInfo);

// Function
function getInfo(){
    const url = `https://api.github.com/users/${userName.value}`
    userName.value = "";
    const requestUrl = url;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', requestUrl)
    xhr.send();
    xhr.onreadystatechange = function(){
    if (xhr.readyState === 4) {
        const data = JSON.parse(this.responseText)
        profile_image.setAttribute("src",data.avatar_url);
        name.textContent = data.name;
        profile_bio.textContent = data.bio;
        
    }
  }
}
