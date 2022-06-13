

function Post(url, body) {
   
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function() {
        console.log(this.responseText)
        console.log(this.response)
    }
    
    document.location.reload(true);
    return request.responseText  

}



function cadastraUsuario() {
    event.preventDefault()
    let url = ("http://localhost:8080/contact")
    let nome = document.getElementById("nome").value
    let sobrenome = document.getElementById("sobrenome").value
    let cpf = document.getElementById("cpf").value
    let email = document.getElementById("email").value
    let type = document.getElementById("type").value
    let number = document.getElementById("number").value
    let altType = document.getElementById("altType").value
    let altNumber = document.getElementById("altNumber").value
   

    if(nome == null || sobrenome == null || cpf == null || email == null || number == null) {
            document.getElementById('nome').required = true;
            document.getElementById('sobrenome').required = true;
            document.getElementById('cpf').required = true;
            document.getElementById('email').required = true;
            document.getElementById('number').required = true;
            
        } else {
            document.getElementById('number').required = false;
        }
    
    if(altNumber != null && altType == "NOVALUE"){
        altNumber = "Não possui"
    }
    


    body = {		
		"name":nome,
		"surname":sobrenome,
		"cpf":cpf,
		"email":email,
        "phones":
			[{
				
				"type": type,
				"number": number,
                "altType": altType,
				"altNumber": altNumber
			}]
	}


    try {
        if(is_cpf(cpf) == true){
            Post(url, body)
        }else alert("CPF incorreto");
    } catch (error) {
        console.log(error);
    }

  
      
}

