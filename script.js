// Função de busca
function search() {
    const input = document.getElementById('searchBar').value.trim();
    const keyword = input.replace('#', '').toLowerCase(); // Remove o # se for digitado e converte para minúsculas.

    if (keyword) {
        window.location.href = `produtos/${keyword}.html`;
    } else {
        alert('Por favor, digite um termo válido como #escova.');
    }
}

// Detectar Enter no campo de busca
document.getElementById('searchBar').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        search();
    }
});
