let input = document.querySelector("#cpf");
let button = document.querySelector("#btn");


window.is_cpf = function(c) {

  if((c = c.replace(/[^\d]/g,"")).length != 11)
    return false

  if (c == "00000000000")
    return false;

  var r;
  var s = 0;

  for (i=1; i<=9; i++)
    s = s + parseInt(c[i-1]) * (11 - i);

  r = (s * 10) % 11;

  if ((r == 10) || (r == 11))
    r = 0;

  if (r != parseInt(c[9]))
    return false;

  s = 0;

  for (i = 1; i <= 10; i++)
    s = s + parseInt(c[i-1]) * (12 - i);

  r = (s * 10) % 11;

  if ((r == 10) || (r == 11))
    r = 0;

  if (r != parseInt(c[10]))
    return false;

  return true;
}


function fMasc(objeto,mascara) {
obj=objeto
masc=mascara
setTimeout("fMascEx()",1)
}

  function fMascEx() {
obj.value=masc(obj.value)
}

function mCPF(cpf){
cpf=cpf.replace(/\D/g,"")
cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
return cpf
}

function mNumber(number){
  number=number.replace(/\D/g,"")
  number=number.replace(/(\d{0})(\d)/,"$1($2")
  number=number.replace(/(\d{2})(\d)/,"$1)$2")
  return number
  }


cpfCheck = function (el) {
    document.getElementById('cpf').innerHTML = is_cpf(el.value)? `<style>#cpf{ border: 1px solid green; outline: none; } </style>` : `<style>#cpf{ border: 1px solid red;} </style>`;
    if(el.value=='') document.getElementById('cpfResponse').innerHTML = '';
}
