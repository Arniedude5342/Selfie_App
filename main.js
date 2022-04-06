var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();
var Content;
function start()
{
  
    recognition.start();
}
recognition.onresult = function(event) {
    console.log(event);
    Content = event.results[0][0].transcript.toLowerCase();
    console.log(Content);
    if(Content == "selfie") {
        speak();
    }
}

function speak(){
    var synth = window.speechSynthesis;

    //speak_data = document.getElementById("textbox").value;

   
    Webcam.attach(camera);

    speak_data = "taking your selfie in 5 seconds"
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
   

    
    setTimeout(function(){
        img_id="selfie1";
        take_selfie();
        speak_data = "taking your next selfie in 10 seconds"
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        
    },5000);

    setTimeout(function(){
        img_id="selfie2";
        take_selfie();
        speak_data = "taking your next selfie in 15 seconds"
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    },10000);

    setTimeout(function(){
        img_id="selfie3";
        take_selfie();
    },15000);



}

camera = document.getElementById("resultRow");
Webcam.set({
    width : 360,
    height : 250,
    image_format :'jpeg',
    jpeg_quality :90
});

function take_selfie() 
{
    console.log(img_id);
  Webcam.snap(function(data_url){
      if(img_id=="selfie1") {
        document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_url+'"/>';
      }
      
      if(img_id=="selfie2") {
        document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_url+'"/>';
      }

      if(img_id=="selfie3") {
        document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_url+'"/>';
      }

  })  
}
