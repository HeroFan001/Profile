const user= [{ name: "Kiss Éva", age: 28, email: "eva@example.com", avatar: "https://i.pravatar.cc/250?img=1",role:"Frontend fejlesztő" }]

function renderProfiles(){
    user.forEach(({name,age,email,avatar,role})=>{
        console.log(name)
        document.querySelector(".card-container").innerHTML+=`
        <div class="card">
             <div class=bg> 
                  <img src=${avatar} class="mainPic" alt="">
                  <h2>${name}</h2>
             </div> 
             <p>${email}</p>
             <p>${role}</p>
             <button class="profileButton" popovertarget="my-popover">Profil szerkesztése</button>
        </div>
        <div class="popper" popover id="my-popover">
            <div class="popped">
             <img src="${avatar}" class="popImage" alt="">
                <div class="popButton">
                 <button class="change">Change Profile</button>
                 <button class="delete">Delete picture</button>
                </div>
           </div>
        <div>
            <form action="">
            <label for="fname">Családi név</label>
            <input type="text" value="${name.split(' ')[0]}" id="firstname">
    
            <label for="sname">Kereszt név</label>
            <input type="text" value="${name.split(' ')[1]}" id="secondname">
            <br>
            <label for="email">E-mail</label>
            <input type="text" value="${email}" id="emailInput">

            <label for="prof">Profession</label>
            <input type="text" value="${role}" id="profession">

            <label for="bio">Your bio</label>
            <input type="text" id="biography">
         </form>
             <button class="save">Save</button>
        </div>
    </div>
        `
    })
}
renderProfiles()