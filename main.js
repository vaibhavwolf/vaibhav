function perload(){
    
}
function setup(){
    canvas=creatcanvas(300,300);
    canvas.center();
    
    video=createcapture(video);
    video.size(300,300);
    video.hide();
    posenet=ml5.posenet(video,modelloaded);
    posenet.on('pose' ,gotposes);
}
function draw(){
    image(video, 0, 0, 300, 300);
}
function take_snapshot()
{
    save('myfilterimage.png');
}

function gotposes(results)
{
    
    if(results.length>0)
       {
         console.log(results) ; 
          console.log("nose x =" +results[0].pose.nose.x);
        console.log("nose y =" +results[0].pose.nose.y);
       }
}