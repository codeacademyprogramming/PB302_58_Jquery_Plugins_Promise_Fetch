
let mainBox = document.querySelector(".main-box")

mainBox.ondragover = (e) => e.preventDefault();

mainBox.addEventListener("drop", function (e) {
    e.preventDefault();
    [...e.dataTransfer.files].forEach(file => {
        let reader = new FileReader();

        reader.onload = function () {
            let img = document.createElement("img");
            img.classList.add("img-box");
            img.setAttribute("src", reader.result);
            mainBox.appendChild(img)
        }

        reader.readAsDataURL(file);
    });
})

let input = document.querySelector("input[type='file']")
document.querySelector("button").addEventListener("click",function(){
    input.click();
})
let check = confirm("are you student?");
let proptData = prompt("name:")
console.log(check)
console.log(proptData)

let wantGoToBack = confirm("do ypou wanto to back?");
if(wantGoToBack){
    window.history.back();
}

let wantedWebsite = prompt("website: ")
if(wantedWebsite!=null){
    window.location.href=wantedWebsite
}