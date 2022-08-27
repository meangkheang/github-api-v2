
const input = document.querySelector('#input');
let endpoint = "https://api.github.com/users/Ystorm5/repos";
let app = document.getElementById("app");

let strings = [];

async function fetchData() {
  const res = await fetch(endpoint);
  const data = await res.json();

  for (let l of data) {
    strings.push(l);
  }
  return strings;
}





function main(user='Ystorm5'){
    Promise.all([fetchData()]).then((values) => {
        var data = values[0];
      
        for (let i of data) {
          let div = document.createElement("div");
          let p = document.createElement("p");
          let a = document.createElement('a');
      
          a.href = i.html_url;
      
          p.textContent = i.name;
      
          div.className =
            "sm:w-full cursor-pointer w-auto  rounded h-auto bg-purple-700 transition-all ease-in duration-400 p-8 flex justify-center hover:scale-75 hover:translate-x-4  hover:bg-purple-400 shadow-lgs text-white";
      
          div.append(p);
          a.append(div)
          app.append(a);
      
        }
      });
}

main();

input.addEventListener('keyup',(e)=>{
    e.preventDefault();

    if (e.keyCode == 13){

        //remove old stuff
        app.innerHTML = ""
        strings = []

        endpoint = `https://api.github.com/users/${e.target.value}/repos`;
        main(e.target.value);
    }
});

// window.location.replace("https://ug38qu.csb.app/1");
// var url = window.location.pathname;
// var id = url.substring(url.lastIndexOf('/') + 1);