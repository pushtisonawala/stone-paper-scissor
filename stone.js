let userScore=0;
let compScore=0;
const userscorepara=document.querySelector("#score1");
const compscorepara=document.querySelector("#score2");
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const genCompChoice=()=>{
    const options=["stone","paper","scissor"];
    const randix=Math.floor(Math.random()*3);
    return options[randix];
    
};
const draw=()=>{
    console.log("game is draw");
    msg.innerText="Game was drawn";
};
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
       
        console.log("you win");
        msg.innerText="Congratulations! you won";
        msg.style.backgroundColor="green";
    }else{
       
        console.log("u lost");
        msg.innerText="Sorry!Try again";
        msg.style.backgroundColor="red";
    }
}

const playGame=(userchoice)=>{
    console.log("user chose",userchoice);
    const compchoice=genCompChoice();
    console.log("comp chose",compchoice);
    if(userchoice===compchoice){
        draw();
    }
    else {
        let userwin = true;
       if ( userchoice ==="rock"){
userwin=compchoice==="paper"?false:true;}
else if(userchoice==="paper"){
   userwin= compchoice==="scissor"?false:true;
}else{
    userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin);
    }
};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");

                console.log("choice was clicked",userchoice);
                playGame(userchoice);
    });
});


