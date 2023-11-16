
var hamb = document.querySelector('.hamburger');
var mn = document.querySelector(".mobile-nav");
var li = document.querySelector('.list li');
var bar = document.querySelector(".bar");

hamb.addEventListener('click',function()
{
    

    if(bar.classList.contains('fa-bars'))
    {
        mn.style.display = "flex";
        bar.classList.remove('fa-bars');
        bar.classList.add('fa-xmark');
        mn.style.index = 1;
    }
    else 
    if(bar.classList.contains('fa-xmark'))
      {     
        mn.style.display = "none";
             bar.classList.add('fa-bars');
            bar.classList.remove('fa-xmark');
     }

   
});


function removeli(){
    mn.style.display = "none";
    bar.classList.add('fa-bars');
    bar.classList.remove('fa-xmark');
    
}