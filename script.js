// Função de busca
function search() {
    const input = document.getElementById('searchBar').value.trim();
    const keyword = input.replace(' ', '').toLowerCase();

    if (keyword) {
        window.location.href = `produtos/${keyword}.html`;
    } else {
        alert('Por favor, digite um termo válido como "banana".');
    }
}

// Detectar Enter no campo de busca
document.getElementById('searchBar').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        search();
    }
});
