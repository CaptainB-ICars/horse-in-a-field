canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
horse_width=150;
horse_height=80;
horse_x=10;
horse_y=10;
horse_image="horse3.png";
background_image="1560269815grass-png-top-view.jpg";



function add(){
    background_imageTag=new Image();
    background_imageTag.onload=uploadbackground;
    background_imageTag.src=background_image;

    horse_imageTag=new Image();
    horse_imageTag.onload=uploadhorse;
    horse_imageTag.src=horse_image;
}



function uploadbackground(){
    ctx.drawImage(background_imageTag,0,0,canvas.width,canvas.height);
}



function uploadhorse(){
    ctx.drawImage(horse_imageTag,horse_x,horse_y,horse_width,horse_height);
}



window.addEventListener("keydown",my_keydown);
    function my_keydown(e)
{
    keyPressed=e.keyCode;
    if(keyPressed=='38')
    {
        up();
    }

    
    if(keyPressed=='40')
    {
        down();
    }


    if(keyPressed=='37')
    {
        left();
    }

    
    if(keyPressed=='39')
    {
        right();
    }
}



function up()
{
    if(horse_y>=0)
    {
        horse_y=horse_y-10;
        uploadbackground();
        uploadhorse();
        
    }
}



function down()
{
    if(horse_y<=700)
    {
        horse_y=horse_y+10;
        uploadbackground();
        uploadhorse();
        
    }
}



function left()
{
    if(horse_x>=0)
    {
        horse_x=horse_x-10;
        uploadbackground();
        uploadhorse();
        
    }
}



function right()
{
    if(horse_x<=700)
    {
        horse_x=horse_x+10;
        uploadbackground();
        uploadhorse();
        
    }
}