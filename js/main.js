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
    target = 'BRL';
    $.ajax({
        url: 'http://api.coinlayer.com/api/' + endpoint + '?access_key=' + access_key,   
        dataType: 'jsonp',
        success: function(json) {


            const resultado = document.getElementById('moeda');

            const tabelaResultado = resultado.getElementsByTagName('table')[0];
    
            if (tabelaResultado == undefined) {
                resultado.innerHTML = '<table class="result"><thead><td>Moeda</td><td>Preço</td></thead><tbody></tbody></table>';
            }
            
            let tabelaResultadoBody = resultado.getElementsByTagName('tbody')[0];
            tabelaResultadoBody.innerHTML += `<tr>
            <td>${json.rates.BTC}</td>
            <td>${json.target}</td>
        </tr>`;
        }
    });
}
