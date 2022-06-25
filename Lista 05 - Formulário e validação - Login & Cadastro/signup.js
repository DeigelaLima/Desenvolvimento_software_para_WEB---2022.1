const anoSelect = document.getElementById("ano");
const mesSelect = document.getElementById("mes");
const diaSelect = document.getElementById("dia");


const meses = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril',
  'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro',
  'Outubro', 'Novembro', 'Dezembro'];

(function popularMeses(){
  for(let i = 0; i < meses.length; i++){
    const option = document.createElement('option');
    option.textContent = meses[i];
    mesSelect.appendChild(option);
  }
  mesSelect.value = "Janeiro";
})();

let diaAnterior;

function popularDias(mes){
  // Exclui todos os filhos do menu suspenso do dia.
  // Se eles existem
  while(diaSelect.firstChild){
    diaSelect.removeChild(diaSelect.firstChild);
  }
  // Contém o número de dias do mês.
  let diaNum;
  // Obter o ano atual.
  let ano = anoSelect.value;

  if(mes === 'Janeiro' || mes === 'Março' || mes === 'Maio' ||
      mes === 'Julho' || mes === 'Agosto' || mes === 'Outubro' ||
      mes === 'Dezembro'){

      diaNum = 31;
  }
  else if(mes === 'Abril' || mes === 'Junho' || mes === 'Setembro' ||
          mes === 'Novembro'){
            diaNum = 30;
  }
  else{
    // Verifica se o ano é bissexto.
    if(new Date(ano, 1, 29).getMonth() === 1){
      diaNum = 29;
    }
    else{
      diaNum = 28;
    }
  }

  // Insere os dias corretos na seleção de dia <select>
  for(let i = 1; i <= diaNum; i++){
    const option = document.createElement("option");
    option.textContent = i;
    diaSelect.appendChild(option);
  }
  if(diaAnterior){
    diaSelect.value = diaAnterior;
    if(diaSelect.value === ""){
      diaSelect.value = diaAnterior - 1;
    }
    if(diaSelect.value === ""){
      diaSelect.value = diaAnterior - 2;
    }
    if(diaSelect.value === ""){
      diaSelect.value = diaAnterior - 3;
    }
  }
}

function popularAnos(){
  // Obter o ano atual como um número.
  let ano = new Date().getFullYear();
  // Faz com que os 100 anos anteriores sejam uma opção.
  for(let i = 0; i < 51; i++){
    const option = document.createElement("option");
    option.textContent = ano - i;
    anoSelect.appendChild(option);
  }
}

popularDias(mesSelect.value);
popularAnos();

anoSelect.onchange = function(){
  popularDias(mesSelect.value);
}
mesSelect.onchange = function(){
  popularDias(mesSelect.value);
}
diaSelect.onchange = function(){
  diaAnterior = diaSelect.value;
}





