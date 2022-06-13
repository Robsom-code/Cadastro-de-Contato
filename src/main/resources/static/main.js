function get(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false);
    request.send();
    return request.responseText
}

function apagarLinha(url){
    let request = new XMLHttpRequest()
    request.open("DELETE", url, false);
    request.send();
    return request.responseText

}

function put(url, body){
    let request = new XMLHttpRequest()
    request.open("PUT", url, true);
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function() {
        console.log(this.responseText)
    }
    document.location.reload(true);
    return request.responseText
    
}

function updateUser(id) {
    
    let url = (`http://localhost:8080/contact/${id}`)

    var nome = document.getElementById(`name${id}`).textContent
    var sobrenome =document.getElementById(`surname${id}`).textContent
    var cpf =document.getElementById(`cpf${id}`).textContent
    var email =document.getElementById(`email${id}`).textContent

    var phonetype =document.getElementById(`phonetype${id}`).value
    var number =document.getElementById(`phonenumber${id}`).textContent

    var phonetype2 =document.getElementById(`phonetype2${id}`).value
    var number2 =document.getElementById(`phonenumber2${id}`).textContent
     



    body = {
        "id": `${id}`,
		"name":nome,
		"surname":sobrenome,
		"cpf":cpf,
		"email":email,
        "phones":
			[{
				
				"type": phonetype,
				"number": number,
                "altType": phonetype2,
				"altNumber": number2
			}]
	}

    

    put(url, body)

}

function deleteUser(id){
    let url = (`http://localhost:8080/contact/${id}`)
    apagarLinha(url);
    document.location.reload(true);
    
}





function clickEdit(id){
    
    
    let nome = document.getElementById(`name${id}`)
    let sobrenome =document.getElementById(`surname${id}`)
    let cpf =document.getElementById(`cpf${id}`)
    let email =document.getElementById(`email${id}`)

    let type =document.getElementById(`phonetype${id}`)
    let type2 =document.getElementById(`phonetype2${id}`)

    let number =document.getElementById(`phonenumber${id}`)
    let number2 =document.getElementById(`phonenumber2${id}`)

    

    document.getElementById(`cancel${id}`).hidden = false;
    document.getElementById(`save${id}`).hidden = false;
    document.getElementById(`edit${id}`).hidden = true;
    document.getElementById(`delete${id}`).hidden = true;
   

    
    
    //Transformando os campos em editavel 
    nome.contentEditable = true;
    sobrenome.contentEditable = true;
    cpf.contentEditable = true;
    email.contentEditable = true;

    number.contentEditable = true;
    number2.contentEditable = true;

    type.disabled = false;
    type2.disabled = false;

    nome.style.color = "blue";
    sobrenome.style.color = "blue";
    cpf.style.color = "blue";
    email.style.color = "blue";

    number.style.color = "blue";
    number2.style.color = "blue";

    type.style.color = "blue";
    type2.style.color= "blue";

    

}

function clickCancel(){
    document.location.reload(true);
}





function createLine(user) {
    
    //criando os elementos dentro da table que formam uma linha
    linha = document.createElement("tr");
    tdId = document.createElement("td");
    tdname = document.createElement("td");
    tdsurname = document.createElement("td")
    tdcpf = document.createElement("td");
    tdemail = document.createElement("td");
    tdphonetype = document.createElement("select");
    tdphonenumber = document.createElement("td");

    tdphonetype2 = document.createElement("select");
    tdphonenumber2 = document.createElement("td");

    tdedit = document.createElement("button");
    tdsave = document.createElement("button");
    tdcancel = document.createElement("button");
    tddelete = document.createElement("button");
    

    //Criando options do 1° select
    opt1 = document.createElement("option");
    opt2 = document.createElement("option");
    opt3 = document.createElement("option");

    //Criando options do 2° select
    opt4 = document.createElement("option");
    opt5 = document.createElement("option");
    opt6 = document.createElement("option");
    opt7 = document.createElement("option");

    //Desabilitando o select inicial
    tdphonetype.setAttribute("disabled", "true");
    tdphonetype2.setAttribute("disabled", "true");
    


    //Colocando atributo que permite editar o input
    tdname.setAttribute("contenteditable","false")
    tdsurname.setAttribute("contenteditable","false")
    tdcpf.setAttribute("contenteditable","false")
    tdemail.setAttribute("contenteditable","false")
    tdphonetype.setAttribute("contenteditable","false")
    tdphonenumber.setAttribute("contenteditable","false")

  
   

    //escondendo botões de cancelar e salvar
    tdcancel.setAttribute("hidden", "true")
    tdsave.setAttribute("hidden", "true")
    

    //Colocando identificação na Id das tags
    linha.id = `linha${user.id}`
    tdname.id = `name${user.id}`
    tdsurname.id = `surname${user.id}`
    tdcpf.id = `cpf${user.id}`
    tdemail.id = `email${user.id}`
    tdphonetype.id = `phonetype${user.id}`
    tdphonenumber.id = `phonenumber${user.id}`
    tdphonetype2.id = `phonetype2${user.id}`
    tdphonenumber2.id = `phonenumber2${user.id}`
    tdedit.id = `edit${user.id}`
    tdsave.id = `save${user.id}`
    tdcancel.id = `cancel${user.id}`
    tddelete.id = `delete${user.id}`
    
    
    

    //Alterando texto e metodos chamados por cada botão
    tdedit.textContent = "Editar"
    tdedit.setAttribute("onclick",`clickEdit(${user.id})`);

    tdsave.textContent = "Salvar";
    tdsave.setAttribute("onclick",`updateUser(${user.id})`)

    tdcancel.textContent = "Cancelar"
    tdcancel.setAttribute("onclick",`clickCancel()`)

    tddelete.textContent = "Apagar";
    tddelete.setAttribute("onclick",`deleteUser(${user.id})`)
    
    //Colocando os valores dos options
    opt1.value = "MOBILE";
    opt1.text = "Celular";

    opt2.value = "HOME"
    opt2.text = "Telefone Fixo"

    opt3.value = "COMMERCIAL"
    opt3.text = "Telefone Comercial"

    //Colocando valores nos options do segundo select
    opt4.value = "NOVALUE"
    opt4.text = "--"

    opt5.value = "MOBILE";
    opt5.text = "Celular";

    opt6.value = "HOME"
    opt6.text = "Telefone Fixo"

    opt7.value = "COMMERCIAL"
    opt7.text = "Telefone Comercial"

    



    switch (user.phones[0].type) {
        case "MOBILE":
            opt1.setAttribute("selected", "true")
            break;
        case "HOME":
            opt2.setAttribute("selected", "true")
            break;
        case "COMMERCIAL":
            opt3.setAttribute("selected", "true")
            break;
    }

    switch (user.phones[0].altType) {
        case "NOVALUE":
            opt4.setAttribute("selected", "true")
            break; 
        case "MOBILE":
            opt5.setAttribute("selected", "true")
            break;
        case "HOME":
            opt6.setAttribute("selected", "true")
            break;
        case "COMMERCIAL":
            opt7.setAttribute("selected", "true")
            break;
           
    }

 
    

    //Inserindo valores dentro dos campos 
    tdId.innerHTML = user.id
    tdname.innerHTML = user.name
    tdsurname.innerHTML = user.surname
    tdcpf.innerHTML = user.cpf
    tdemail.innerHTML = user.email
    // tdphonetype.innerHTML= user.phones[0].type
    tdphonenumber.innerHTML = user.phones[0].number
    tdphonenumber2.innerHTML = user.phones[0].altNumber

   
    
    //colocando options no 1° select
    tdphonetype.appendChild(opt1);
    tdphonetype.appendChild(opt2);
    tdphonetype.appendChild(opt3);

    //Colocando options no 2° Select
    tdphonetype2.appendChild(opt4);
    tdphonetype2.appendChild(opt5);
    tdphonetype2.appendChild(opt6);
    tdphonetype2.appendChild(opt7);

    

    

    //colocando as propriedades na linha
    linha.appendChild(tdId);
    linha.appendChild(tdname);
    linha.appendChild(tdsurname);
    linha.appendChild(tdcpf);
    linha.appendChild(tdemail);
    linha.appendChild(tdphonetype);
    linha.appendChild(tdphonenumber);
    linha.appendChild(tdphonetype2);
    linha.appendChild(tdphonenumber2);
    linha.appendChild(tdedit);
    linha.appendChild(tdsave);
    linha.appendChild(tdcancel);
    linha.appendChild(tddelete);

  
    return linha;
}




function createDynamicHeader(columns) {
    var table = document.querySelector('#tabela');
  
    // Cria um elemento <thead> vazio e o adiciona à tabela:
    var header = table.createTHead();
  
    // Cria um elemento <tr> vazio dentro do header da tabela:
    var row = header.insertRow();
  
    for (var i = 0; i < columns.length; i++) {
      // Insere uma nova célula (<td>) dentro do elemento <tr>:
      var cell = row.insertCell(linha.tdcpf);
      
      // Adiciona algum texto na nova célula:
      cell.innerHTML = columns[i];
    }
  }





function main(){
    data = get("http://localhost:8080/contact")
    user = JSON.parse(data)
    let tabela = document.getElementById("tabela");
      

    user.forEach(element => {
        let linha = createLine(element);
        tabela.appendChild(linha); 
     
    });
   
}

main()

createDynamicHeader(['ID', 'Nome', 'Sobrenome', 'CPF', 'Email', '1° Tipo Telefone', 'Numero', '2° Tipo Telefone', 'Numero Secundario'])