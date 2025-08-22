const userInfo = document.querySelector("#user-info");
const generateUserButton = document.querySelector("#generate-user");

async function randomUser() {
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();
  const user = data.results[0];
  userInfo.innerHTML = `
               <img src="${user.picture.large}" alt="User Picture">
               <div class="user-detail">
                <p>Name: ${user.name.first} ${user.name.last}</p>
                <p>Email: ${user.email}</p>
                </div>
            `;
}

generateUserButton.addEventListener("click", randomUser);
randomUser();
