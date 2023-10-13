document.addEventListener("DOMContentLoaded", function(){
    const Input = document.getElementById('input');
    const Btn = document.getElementById('btn');
    const List = document.getElementById('list');

    function addList() {
        const creatList = Input.value.trim();

        if (creatList !== '') {
            const listItem = document.createElement('li');
            listItem.classList.add('list-item');
            
            // Cria uma checkbox
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';

            // Cria o texto do item
            const itemText = document.createElement('span');
            itemText.textContent = creatList;

            // Cria um botão de exclusão
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Excluir';
            deleteButton.addEventListener('click', function() {
                listItem.remove(); // Remove o item da lista ao clicar no botão de exclusão
            });

            // Adiciona a checkbox, o texto do item e o botão de exclusão ao item da lista
            listItem.appendChild(checkbox);
            listItem.appendChild(itemText);
            listItem.appendChild(deleteButton);

            // Adiciona o item à lista
            List.appendChild(listItem);

            // Limpa o campo de entrada após adicionar o item à lista
            Input.value = '';
        }
    }

    Btn.addEventListener('click', addList);

    Input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addList();
        }
    });
});
