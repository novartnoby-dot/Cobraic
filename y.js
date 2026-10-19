function style1(){
    document.getElementById('body').style.padding ="30px";
    document.getElementById('body').style.margin = "12px";
    document.getElementById('body').style.border = "20px";
    document.getElementById('body').style.width = "1400px";
    document.getElementById('body').style.height = "700px";
    document.getElementById('body').style.backgroundColor = "#fff";
    document.getElementById('menu').style.height = "200px";
    document.getElementById('menu').style.width ="300px";
    document.getElementById('menu').style.float = "left";
    document.getElementById('menu').style.borderRadius = "10px";
    document.getElementById('coder').style.height = "auto";
    document.getElementById('coder').style.width ="150px";
    document.getElementById('coder').style.border = "12px";
    document.getElementById('coder').style.padding = "50px";
    document.getElementById('coder').style.margin = "40px";
    document.getElementById('coder').style.backgroundColor = "#2196f3";
    document.getElementById('coder').style.float = "right";
    document.getElementById('coder').style.position ="absolute";
    document.getElementById('coder').style.top ="130px";
    document.getElementById('coder').style.right="20px";
    document.getElementById('coder').style.borderRadius ="20PX";
    document.getElementById('coder').style.fontFamily = "Times new Roman";
    document.getElementById('coder').style.fontSize = "20px";
    document.getElementById('toy').style.backgroundColor = "#eeeeee";
    document.getElementById('toy').style.marginTop = "230px";
}

function style3(){

    document.body.style.backgroundColor="white";
    document.body.style.color="green";
    const headings = document.querySelectorAll(".hel");
    headings.forEach( h1=>{
        h1.style.color= "green";
    })
    document.body.style.fontFamily= "verdana";
    document.getElementById('side').style.color= "green";
    document.getElementById('coder').style.backgroundColor ="lightgrey";
    document.getElementById('coder').style.margin="30px";
    document.getElementById('coder').style.width="89%";
    document.getElementById('toy').style.fontSize="10px";
    document.getElementById('coder').style.height="130px";
    document.getElementById('toy').style.textAlign= "center";
     const coder= document.getElementById('bar');
    coder.style.border = "none";
    coder.style.float = "none";

}
function style2(){
    
    document.body.style.background= "rgb(246,64,76)";
    document.body.style.color = "white";
     const link = document.querySelectorAll(".link");
    link.forEach( a =>{
        a.style.color = "red";
    }) ;
    const coder = document.getElementById('coder');
    coder.style.backgroundColor= "pink";
    const div=document.getElementById('div1');
    div.style.backgroundColor= "white";
    div.style.color= "black";
    const toy = document.getElementById('toy');
    toy.style.backgroundColor= "rgb(246, 64, 76)";
    toy.style.color= "white";
}
function style4(){
    
    document.body.style.backgroundColor= "black";
    document.body.style.color =  "green";
    const headings =document.querySelectorAll(".he1");
    headings.forEach( h1=> {
        h1.style.color= "lightgreen";
    });
     const link1 = document.querySelectorAll(".link");
     link1.forEach( a=>{
        a.style.color= "lightgreen";
     });
     const link= document.querySelectorAll("link1");
     link.forEach(a => {
        a.style.color= "green";
        a.style.transitionBehavior= "blue o.3s ease"
     });

     document.body.style.fontFamily= "Courier New, Courier, monospace";
     const coder = document.getElementById('coder');
     coder.style.width= "300px";
     coder.style.float= "right";
     coder.style.padding= "10px";
     coder.style.color= "white";
     coder.style.border= "2px solid #fff";
     coder.style.top= "15px";
     coder.style.right= "0px";
     coder.style.position= "fixed";
     document.getElementById('menu').style.transitionBehavior= "ease";
     document.getElementById('menu').style.transitionDuration= "0.5s";

     const toy = document.getElementById('toy');
     toy.style.border= "2px solid #fff";
     toy.style.color= "#fff";
     toy.style.width= "1500px";
     toy.style.height= "100px";
     toy.style.textAlign= "center";

}