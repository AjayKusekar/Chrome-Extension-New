// const getJokes = async () => {
//     try{
//         const res = await fetch("https://api.chucknorris.io/jokes/random");
//         const data = await res.json();
//         const myJoke = document.querySelector("#myJoke");
//         myJoke.innerHTML = data.value;
//     } catch(error) {}
// };

// window.addEventListener("load", () => {
//     getJokes();
// });

const para = document.getElementById("myJoke")
const btn = document.getElementById("btn")
 const url = "https://api.chucknorris.io/jokes/random"
 
const facts = () => {
    
    fetch(url).then((response) => {
        return response.json()
    }).then((data) => {
        para.innerHTML = data.value
        console.log(data)
    }).catch((error1) => {
        console.log("error")
    }).finally((message1) => {
        console.log("Working")
    })   
}   

btn.addEventListener('click', facts)
































