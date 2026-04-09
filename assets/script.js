document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('table-container');

    try {
        const response = await fetch('https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json');
        const data = await response.json();

        data.elements.forEach(apiElement => {
            const hue = Math.floor(Math.random() * 360);
            const color = `hsl(${hue}, 85%, 65%)`;

            const element = document.createElement('a');
            element.href = 'http://bagulho.com/';
            element.target = '_blank';
            element.rel = 'noopener noreferrer';
            element.className = 'element';
            element.style.backgroundColor = color;
            
            element.style.gridColumn = apiElement.xpos;
            element.style.gridRow = apiElement.ypos;
            
            element.title = `Bagulho (Ba) - Número Atômico ${apiElement.number} (Elemento real: ${apiElement.name})`;

            element.innerHTML = `
                <span class="atomic-number">${apiElement.number}</span>
                <strong class="symbol">Ba</strong>
                <span class="name">Bagulho</span>
            `;

            container.appendChild(element);
        });
    } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
        container.innerHTML = '<p>Erro ao carregar os bagulhos.</p>';
    }
});