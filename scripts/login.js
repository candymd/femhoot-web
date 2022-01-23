let nodeForm     = document.getElementById( 'login-form' )
let nodeName     = document.getElementById( 'name') 
let nodePassword = document.getElementById( 'password')
let nodeButtonPlay = document.getElementById( 'play' )

const user = {
    name : undefined,
    password : undefined,
    score: 0
} 

nodeForm.addEventListener( 'submit', (e )=>{
    e.preventDefault()
    user.name = nodeName.value 
    user.password = nodePassword.value
    console.log( user )
})
