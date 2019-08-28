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
        url: 'http://api.coinlayer.com/api/' + endpoint + '?access_key=' + access_key,   
        dataType: 'jsonp',
        success: function(date) {
            
            console.log(date.rates);
            var moedas= date.rates;
            const resultado = document.getElementById('moeda');

            const tabelaResultado = resultado.getElementsByTagName('table')[0];
    
            
            let tabelaResultadoBody = resultado.getElementsByTagName('tbody')[0];
            var coluna1 = '';
            var i;
            for(prop in moedas){
                console.log(prop);
                coluna1 += "<tr><td>"+ prop+"</td>";
                coluna1 += "<td>"+ moedas[prop]+"</td></tr>";
                
            }
            // for(i = 0; i < moedas.length;i++){
            //     tabela += "<td>"+ moedas[i]+"</td>"
            // }
            tabelaResultadoBody.innerHTML = coluna1;
        }
    });
}
