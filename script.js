let valid_input  = /[0-9*+(-/reset)delete]/;
let userInputs = ''
function operate(button){

    if (button.innerHTML == "reset"){
        document.getElementById("result").innerText = "0"
        userInputs=''
    }
    else if(button.innerHTML=="delete") {
        if (userInputs.length >1){
            let newInput = userInputs.slice(0, -1)
            document.getElementById("result").innerText = newInput
            userInputs=newInput
        }else if(userInputs.length ===1){
            document.getElementById("result").innerText = '0'
            userInputs=''
        }} 
    else{
        if (button.innerHTML=="=" && valid_input .test(userInputs)){
            try{
                let result = eval(userInputs)
                document.getElementById("result").innerText = result
                userInputs =''
            }catch(error){
                userInputs =''
                document.getElementById("result").innerText = 'error!'
            }}else if(button.innerHTML != "=") {
                    userInputs+=button.innerHTML
                    document.getElementById("result").innerText = userInputs
                    
                }}

    }



