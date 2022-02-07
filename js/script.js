const myButton1=document.getElementById("button1")
const myButton2=document.getElementById("button2")
const myButton3=document.getElementById("button3")
const myButton4=document.getElementById("button4")
const myButton5=document.getElementById("button5")
const myButton6=document.getElementById("button6")



const myParagraph1=document.getElementById("paragraph1")
const myParagraph2=document.getElementById("paragraph2")
const myParagraph3=document.getElementById("paragraph3")
const myParagraph4=document.getElementById("paragraph4")
const myParagraph5=document.getElementById("paragraph5")
const myParagraph6=document.getElementById("paragraph6")


myButton2.addEventListener("click",()=>{
myParagraph1.style.display="none"
myParagraph2.style.display="block"
myParagraph3.style.display="none"
myParagraph4.style.display="none"
myParagraph5.style.display="none"
myParagraph6.style.display="none"




})
myButton3.addEventListener("click",()=>{
    myParagraph1.style.display="none"
    myParagraph2.style.display="none"
    myParagraph3.style.display="block"
    myParagraph4.style.display="none"
    myParagraph5.style.display="none"
    myParagraph6.style.display="none"
    
    
    
    
    })
    myButton4.addEventListener("click",()=>{
        myParagraph1.style.display="none"
        myParagraph2.style.display="none"
        myParagraph3.style.display="none"
        myParagraph4.style.display="block"
        myParagraph5.style.display="none"
        myParagraph6.style.display="none"
        
        
        
        
        })

        myButton5.addEventListener("click",()=>{
            myParagraph1.style.display="none"
            myParagraph2.style.display="none"
            myParagraph3.style.display="none"
            myParagraph4.style.display="none"
            myParagraph5.style.display="block"
            myParagraph6.style.display="none"
            
            
            
            
            })

            myButton6.addEventListener("click",()=>{
                myParagraph1.style.display="none"
                myParagraph2.style.display="none"
                myParagraph3.style.display="none"
                myParagraph4.style.display="none"
                myParagraph5.style.display="none"
                myParagraph6.style.display="block"
                
                
                
                
                })



let time=0;
let speed=0;
time();

function timer(){
    count++;
    document.getElementById("number").innerHTML=count;
    if(count>=542){
        return
    }
    speed = speed + count * 3; 
    setTimeout(timer, speed);

}


     