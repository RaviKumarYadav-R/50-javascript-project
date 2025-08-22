//DOM Elements
const form = document.querySelector("form");
const input = form.querySelector("input");
const profileImage = document.querySelector(".profile-image");
const userLogin = document.querySelector(".userLogin");
const userName = document.querySelector(".userName");
const bio = document.querySelector(".bio");
const repo = document.querySelector(".repo");
const followers = document.querySelector(".followers");
const following = document.querySelector(".following");
const company = document.querySelector(".company");
const userLocation = document.querySelector(".location");
const website = document.querySelector(".website");
const xTwitter = document.querySelector(".x-twitter");

// display all details about user
function displayDetails(data) {
  profileImage.src = data.avatar_url;
  profileImage.alt = data.name;
  userLogin.innerHTML = data.login;
  userLogin.href = data.html_url;
  userName.innerHTML = data.name;
  bio.innerHTML = data.bio;
  repo.innerHTML = data.public_repos;
  followers.innerHTML = data.followers;
  following.innerHTML = data.following;
  company.innerHTML = data.company ? data.company : "No Company";
  userLocation.innerHTML = data.location ? data.location : "No Location";
  website.innerHTML = data.website ? data.website : "No Website";
  xTwitter.innerHTML = data.twitter_username
    ? data.twitter_username
    : "No Twitter Account";
}

async function fetchData(value = "github") {
  input.value = value;
  try {
    const response = await fetch(`https://api.github.com/users/${value}`);
    const data = await response.json();
    console.log(data);

    displayDetails(data);
  } catch (error) {
    alert(error);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputval = input.value.trim();
  if (!inputval) return;
  fetchData(inputval);
});

fetchData();
