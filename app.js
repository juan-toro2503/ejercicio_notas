let name=document .getElementById("name")
let n1=document.getElementById("n1")
let n2=document.getElementById("n2")
let n3=document.getElementById("n3")
let btn=document.getElementById("btn_calculate")

btn.addEventListener("click", calculate)
let percentage1=0.3;
let percentage2=0.3;
let percentage3=0.4;


n2.addEventListener("change",finalNote)
function finalNote(){
  let goodNote=3.5;
  let note1=parseFloat(n1.value).toFixed(2)
  let note2=parseFloat(n2.value).toFixed(2)
   let suma=(note1*percentage1)+(note2*percentage2)

  let restante=(goodNote*0.4)-suma

  restante=restante.toFixed(2)

  let message=document.getElementById("message")
  message.innerHTML=restante
  console.log(restante)
  

}




function calculate(){
  if(n1.value==null||n1.value<1 || n1.value>5){
    alert("ingrese una nota entre 1-5") 
  }else if(n2.value==null||n2.value<1 || n2.value>5){
    alert("ingrese una nota entre 1-5") 
    
  }else if(n3.value==null||n3.value<1 || n3.value>5){
    alert("ingrese una nota entre 1-5") 
    
  }else{
    let note1=parseFloat(n1.value).toFixed(2)
    let note2=parseFloat(n2.value).toFixed(2)
    let note3=parseFloat(n3.value).toFixed(2)

    let finalNote=(note1*percentage1)+(note2*percentage2)+(note3*percentage3)
    finalNote=finalNote.toFixed(2)
   if(finalNote>4.5){
    alert(name.value+" obtuvo una nota excelente"+ finalNote)

   }else if(finalNote>=3.5 && finalNote<=4.5){

    alert(name.value+" obtuvo una nota buena"+ finalNote)
   }else if(finalNote >=2 && finalNote<3.5 ){

   alert(name.value+" debe recuperar la materia"+ finalNote)

   }else if( finalNote<2 ){

    alert(name.value+" perdió la materia"+ finalNote)

   }
    
    
    
  }
  
  
  
  
}