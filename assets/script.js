document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('table-container');
    const TOTAL_ELEMENTS = 118;

    const getGridPosition = (atomicNumber) => {
        if (atomicNumber === 1) return { col: 1, row: 1 };
        if (atomicNumber === 2) return { col: 18, row: 1 };
        if (atomicNumber >= 3 && atomicNumber <= 4) return { col: atomicNumber - 2, row: 2 };
        if (atomicNumber >= 5 && atomicNumber <= 10) return { col: atomicNumber + 8, row: 2 };
        if (atomicNumber >= 11 && atomicNumber <= 12) return { col: atomicNumber - 10, row: 3 };
        if (atomicNumber >= 13 && atomicNumber <= 18) return { col: atomicNumber, row: 3 };
        if (atomicNumber >= 19 && atomicNumber <= 36) return { col: atomicNumber - 18, row: 4 };
        if (atomicNumber >= 37 && atomicNumber <= 54) return { col: atomicNumber - 36, row: 5 };
        if (atomicNumber >= 55 && atomicNumber <= 56) return { col: atomicNumber - 54, row: 6 };
        if (atomicNumber >= 72 && atomicNumber <= 86) return { col: atomicNumber - 68, row: 6 };
        if (atomicNumber >= 87 && atomicNumber <= 88) return { col: atomicNumber - 86, row: 7 };
        if (atomicNumber >= 104 && atomicNumber <= 118) return { col: atomicNumber - 100, row: 7 };
        
        if (atomicNumber >= 57 && atomicNumber <= 71) return { col: atomicNumber - 53, row: 9 };
        
        if (atomicNumber >= 89 && atomicNumber <= 103) return { col: atomicNumber - 85, row: 10 };
    };

    for (let i = 1; i <= TOTAL_ELEMENTS; i++) {
        const position = getGridPosition(i);
        
        const hue = Math.floor(Math.random() * 360);
        const color = `hsl(${hue}, 85%, 65%)`;

        const element = document.createElement('a');
        element.href = 'http://bagulho.com/';
        element.target = '_blank';
        element.rel = 'noopener noreferrer';
        element.className = 'element';
        element.style.backgroundColor = color;
        element.style.gridColumn = position.col;
        element.style.gridRow = position.row;
        element.title = `Bagulho (Ba) - Número Atômico ${i}`;

        element.innerHTML = `
            <span class="atomic-number">${i}</span>
            <strong class="symbol">Ba</strong>
            <span class="name">Bagulho</span>
        `;

        container.appendChild(element);
    }
});