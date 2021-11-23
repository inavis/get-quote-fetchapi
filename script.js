


let btn = document.getElementById("btn")
let data = document.getElementById("data")

const url="https://breakingbadapi.com/api/quote/random";

btn.addEventListener("click",  async function(){
    // alert("clicked")
    try{
        let res = await fetch(url);
        let obj = await res.json();
        console.log()
        data.innerHTML=`
        <br>
        <div>QUOTE ID: ${obj[0].quote_id} </div>
        <br>
        <div>QUOTE : ${obj[0].quote}</div>
        <br>
        <div>AUTHOR: ${obj[0].author}</div>
        <br>
        <div>SERIES:${obj[0].series} </div>
        <br>
        `
    }
    catch(err){
        console.log(err)
    }
});



