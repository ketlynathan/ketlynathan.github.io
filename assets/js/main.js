document.eddEventListener('DOMContentLoaded', function() {
    //Código para modais ou animações
    fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => {
            console.log('Dados recebidos:', data);
            // Processar os dados conforme necessário
        })
        .catch(error => console.error('Erro ao buscar dados:', error));
});