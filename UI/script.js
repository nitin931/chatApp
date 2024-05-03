{/* <form class="form-username" id ="form">
<h1>join chat</h1>
<label for="username">username</label>
<input type="text" placeholder="username" id = "username-input"/>
<br>
<br>
<button id ="join-chat" type="submit">Join Chat</button>
</form> */}

let username = '';
const btn = document.getElementById('join-chat');
const usernameInput = document.getElementById('username-input');
const form = document.getElementById('form');
const chatroomContainer = document.querySelector('.chatroom-container');

btn.addEventListener('click',(event)=>{
    event.preventDefault();
    username = usernameInput.value;
    if(username){
        form.style.display = 'none';
        usernameInput.value = '';
        chatroomContainer.style.display = 'block';
    }
})

