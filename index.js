var userscore  = document.getElementById("userscore");
var compscore = document.getElementById("compscore");
var result_stat =document.getElementById("result-stat");
var result_op =document.getElementById("result-op");
var res_user_img =document.getElementById("res_user_img");
var comp_user_img =document.getElementById("comp_user_img");
const rock =document.getElementById("rock");
const paper =document.getElementById("paper");
const scissors =document.getElementById("scissors");
var action =document.getElementById("action");
var userImg = document.getElementById("userImg");
var compImg = document.getElementById("compImg");
const rock_img = "/images/download.png";
const paper_img = "/images/paper.png";
const scirrors_img = "/images/scissors.png" ;
var user_score = 0;
var comp_score = 0;



/////////////////////////////////
function computer_choice()
{
    const choices = ['r' , 'p' , 's'];
    var choice_no = Math.floor(Math.random()*3);
    var comp_choice = choices[choice_no]; 
    return comp_choice; 

}

function win()
{
    result_op.innerHTML  = "YOU WIN!";
    user_score+=1;
    console.log("user score = " , user_score);
    userscore.innerHTML = user_score;
}

function lose()
{
    result_op.innerHTML  = "YOU LOSE!";
    comp_score+=1;
    console.log("comp score  = " , comp_score);
    compscore.innerHTML = comp_score;
}
function restart()
{
    comp_score= 0 ;
    user_score = 0;
    userscore.innerHTML = user_score;
    compscore.innerHTML = comp_score;
    userImg.style.display = "none";
    compImg.style.display = "none";

}

function print_img( combine )
{
    switch (combine[1]) {
        case'r':
            compImg.src = rock_img;            
            break;
        case'p':
            compImg.src = paper_img;            
            break;
        case's':
            compImg.src = scirrors_img;            
            break;
        
        default:
            break;
    }
    switch (combine[0]) {
        case'r':
            userImg.src = rock_img;            
            break;
        case'p':
            userImg.src = paper_img;            
            break;
        case's':
            userImg.src = scirrors_img;            
            break;
        
        default:
            break;
    }

}


function game(user_choice)
{
    
    
        
        //userscore.innerHTML = user_score;
        //compscore.innerHTML = comp_score;
        //userImg.style.display = "none";
       // compImg.style.display = "none";;
        if(user_score==5)
        {
            result_stat.innerHTML ="YAY!"
            result_op.innerHTML  = "YOU WON THE GAME!";
        }
        if(comp_score ==5)
        {
            result_stat.innerHTML ="OOPS"
            result_op.innerHTML  = "YOU LOST THE GAME!";
        }
if(comp_score>5 || user_score>5)
{   
    if (comp_score>=5) {

        comp_score = 1 ;
        user_score = 0;
        
    }
    if (comp_score>=5) {

        comp_score= 0 ;
        user_score = 1;
        
    }
   
}
    

    var comp_choice = computer_choice();
    var combine =user_choice+comp_choice;
    
    console.log(combine);

    print_img( combine );

    switch (combine) {
        case ("rs"):
            result_stat.innerHTML = "rock beats scissors";
            win();
            break;
    
        case ("pr"):
            result_stat.innerHTML = "paper beats rock";
            win();
            break;
        case ("sp"):            
            result_stat.innerHTML = "scssors beats rock";
            win();
            break;
    
         case ("sr"):
            result_stat.innerHTML = "scissors beats rock";
            lose();                        
            break;
    
        case ("rp"):
            result_stat.innerHTML = "rock beats paper";
            lose();
            break;

        case ("ps"):       
            result_stat.innerHTML = "paper beats scissors";
            lose(); 
            break;    
    
        default:
            result_stat.innerHTML = "   oops   ";
            result_op.innerHTML  = "TIE!"
            break;

    }
    //console.log("comp choice " , computer_choice());
    //console.log("user choice " , user_choice);
}

function main()
{
    rock.addEventListener( 'click', function() {
        game("r")}  );
    paper.addEventListener( 'click', function() { 
        game("p")  }  );
    scissors.addEventListener( 'click',function(){ 
        game("s") }   );
    
    
    
}

main()




