// const url=document.querySelector('.image-container')


// const getGithub=async function(){
//     const respuesta=await fetch("https://api.github.com/users/haroldevs")
//     const data= await respuesta.json()

//     document.getElementsByClassName(".image-container").innerHTML= `
//     <img src="${data.avatar_url}"></img>
//     `
    
//     //listProfile(data.results)
//     console.log(data)
// }
// const url= "https://api.github.com/users/haroldevs"

// fetch(url).then(response=>response.json()).then(data=>{

//     let imagen=document.getElementsById("imagen")
//     imagen.innerHTML=`
//     <p> sdfsdf</p>
//     <img src="${data.avatar_url}">abc</img>
//     `

//     console.log(data)
// }).catch(e=>console.log(err))

document.getElementById('btn-search').addEventListener('click',showGithubUser)

function showGithubUser(){
    let user= document.getElementById('usergithub').value

    let url= 'https://api.github.com/users/'+user
    fetch(url).then(res=>res.json()).then(data=>{
        if(data.message){
            document.getElementById('container').innerHTML=`
                <div class="not-found">
                    <img width="100" src="https://avatars.githubusercontent.com/u/583231?v=4" alt="" />
                    <h2>No existe el usuario</h2>
                </div>
            `
            return

        }else{
            console.log(data)
            document.getElementById('imagen').innerHTML=`
                <img width="100" src="${data.avatar_url}"></img>
            `
        }
        
    }).catch(e=>{
        console.log("error "+e)
    })
}