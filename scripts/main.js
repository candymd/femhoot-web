let nodeForm       = document.getElementById( 'login-form' )
let nodeName       = document.getElementById( 'name') 
let nodePassword   = document.getElementById( 'password')
let nodeButtonPlay = document.getElementById( 'play' )
let nodeUserName   = document.getElementById( 'user-name' )

const baseRoute = window.location.origin
let user = {
    name : undefined,
    password : undefined,
    score: 0
} 

//recoger usuario si existe
if( sessionStorage.getItem('user') ){
    let getUser = sessionStorage.getItem( 'user' ) 
    if( getUser ){
        getUser = JSON.parse( getUser )
        user = getUser
    }
}

//redirección al login si no existe el usuario al entrar en el index
if(  window.location.href === window.location.origin + "/" || window.location.href === window.location.origin + "/index.html" && !user.name){
    location.href = baseRoute + '/login.html'
}

if( nodeUserName ){
    nodeUserName.innerHTML = user.name
}

if( nodeForm ){
    nodeForm.addEventListener( 'submit', (e )=>{
        e.preventDefault()
        user.name     = nodeName.value 
        user.password = nodePassword.value
        sessionStorage.setItem( 'user', JSON.stringify( user ) )
        location.href = baseRoute + "/index.html"
    })
}

