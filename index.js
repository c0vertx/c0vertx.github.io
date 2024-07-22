

const input_content=document.querySelector(".input_content");

let output=document.querySelector(".output-text")

const submit_button=document.querySelector(".encode-button")

const say_copy=document.querySelector(".say_copied");


function encoder(){

    let  zwsp='\u200b'
    let encoded=''

    text=input_content.value.split('')
    console.log(text)

    let len_of_text=text.length
    console.log(len_of_text)
    for(let i=0;i<len_of_text;i++){
       // output.innerHTML+=text[i]+"\n";
        let test=text[i].charCodeAt()
        output.innerHTML+=zwsp.repeat(test)+"\n"

    }
    if(input_content.value){
        say_copy.innerHTML='Encoded'
    }
    if(input_content.value===''){
        say_copy.innerHTML='Nothing To Encode'
    }
   

}


function clearer(){

output.innerHTML='';

input_content.value=""
say_copy.innerHTML="Cleared !"

console.log("Cleared !")


}



function decoder(){
    text=input_content.value.split(' ')
    console.log(text)
    let len_of_text=text.length
    console.log("len of TOtal text = "+text.length)

    let check=text[0].length
    for(let i=0;i<len_of_text;i++){
        let check=text[i].length
        output.innerHTML+=String.fromCharCode(check)


    }

    if(input_content.value===''){
        say_copy.innerHTML='Nothing to Decode !'
       }

    if(input_content.value){
        say_copy.innerHTML='Decoded !'
    }
    

}



let download_btn=document.querySelector(".download-button")

download_btn.addEventListener('click',function(){

    var element=document.createElement('a')
    element.setAttribute('href','text/plain;charset=utf-8,'+encodeURIComponent(text))
    element.setAttribute('download',filename);
    element.style.display=none;
    document.body.appendChild(element);
        
    
    element.click();
    document.body.removeChild(element)}
    )










    const input_file=document.getElementById("inputfile");

    input_file.addEventListener('change',()=>
    {
    })




    //COPY STUFFS GOES HERE 

    

    