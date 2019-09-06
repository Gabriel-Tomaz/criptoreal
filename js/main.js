function animabtn(){
    const menuIcon = document.querySelector('.menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', () =>{
        navbar.classList.toggle('change');
    });
}

function carregaJson(){
    endpoint = 'live';
    access_key = '439ae63d8067273e1293e14b1012db29';
    $.ajax({
        url: 'http://api.coinlayer.com/api/live?access_key=439ae63d8067273e1293e14b1012db29&target=BRL',   
        dataType: 'jsonp',
        success: function(date) {
            
            console.log(date.rates);
            var moedas= date.rates;
            const resultado = document.getElementById('moeda');

            const tabelaResultado = resultado.getElementsByTagName('table')[0];
    
            
            let tabelaResultadoBody = resultado.getElementsByTagName('tbody')[0];
            var coluna1 = '';
            var cripto = [];
            for(prop in moedas){
                moeda = [prop, moedas[prop]];
                cripto.push(moeda);
            }
            cripto = insertion_Sort(cripto);
            console.log(cripto);
            
            for(i = 0; i < 10;i++){
                var moeda = cripto[i];
                coluna1 += "<tr><td>"+ moeda[0]+"</td>";
                coluna1 += "<td>"+"R$ "+ moeda[1]+"</td></tr>";
            }
            tabelaResultadoBody.innerHTML = coluna1;
        }
    });
}


function insertion_Sort(arr){
    for (var i = 1; i < arr.length; i++){
      if (arr[i][1] > arr[0][1]){
        //move current element to the first position
        arr.unshift(arr.splice(i,1)[0]);
      } 
      else if (arr[i][1] < arr[i-1][1]) {
        //leave current element where it is
        continue;
      } 
      else {
        //find where element should go
        for (var j = 1; j < i; j++) {
          if (arr[i][1] < arr[j-1][1] && arr[i][1] > arr[j][1]){
            //move element
            arr.splice(j,0,arr.splice(i,1)[0]);
          }
        }
      }
    }
    return arr;
}