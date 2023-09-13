const formPost = document.querySelector("form")
const userName = document.querySelector(".user-name")
const userEmail = document.querySelector(".user-email")
const message = document.querySelector(".message")
const container = document.querySelector(".container")
const url = 'https://jsonplaceholder.typicode.com/users/'

formPost.onsubmit = (e) => {
    e.preventDefault();
    userName.value === '' || userEmail.value === '' 
    ? message.innerText = 'Все поля обязательны к заполнению'
    : e.preventDefault();
    let formData = new FormData(formPost);
    user = Object.fromEntries(formData);
    renderCard(url + `?username=${userName.value}&email=${userEmail.value}`)
};

async function renderCard(link){
    const response = await fetch(link);
    const user = await response.json();
        renderHTML(user[0])     
}

function renderHTML(user){
    container.innerHTML = `<div class='card'>
                            <div class='id'><h3>ID: </h3><p>${user.id}</p></div>
                            <div class='name'><h3>Name: </h3><p>${user.name}</p></div>
                            <div class='username'><h3> Username: </h3><p>${user.username}</p></div>
                            <div class='email'><h3> Email: </h3><p>${user.email}</p></div>
                            <div class='phone'><h3>Phone: </h3><p>${user.phone}</p></div>
                            <div class='website'><h3>Website: </h3><p>${user.website}</p><button class='edit-btn'>Edit</button></div>
                            </div>`
}
// email : Shanna@melissa.tv
// username : Antonette
//id, name, username, email, phone, website.