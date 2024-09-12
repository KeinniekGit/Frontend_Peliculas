const formLogin = document.querySelector("#form-login")
formLogin.addEventListener('submit',(e)=>{
    e.preventDefault()
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const users = JSON.parse(localStorage.getItem('user')) || []
    const validaUser = users.find(user => user.email === email && user.password === password)
    if(!validaUser){
        return alert("Usuario incorrecto")
    }
    alert (`Bienvenido${validaUser.name}`)
    localStorage.setItem('login_success', JSON.stringify(validaUser));
    window.location.href = 'bbdd.html'

}
 )