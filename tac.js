let boxes =document.querySelector(".box");
let resetbtn =document.querySelector(".reset-btn");

let turn0 =true;

const winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8]
];

boxes.forEach((box)=> {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        box.innertext="abc";
    });
});

