export default [
    {
        name: 'Contos Sagrados do Paraíso',
        merits: 1,
        rarity: 'green'
    },
    {
        name: 'Kara no Kyoukai - Jardim dos Pecadores',
        merits: 1,
        rarity: 'blue'
    },
    {
        name: 'Chuva de Aço',
        merits: 1,
        rarity: 'blue'
    },
    {
        name: 'Grito de Guerra',
        merits: 1,
        rarity: 'green'
    },
    {
        name: 'Kara no Kyoukai - Jardim dos Pecadores',
        merits: 1,
        rarity: 'blue'
    },
    {
        name: 'Vingança Divina de Lught',
        merits: 1,
        rarity: 'red'
    },
    {
        name: 'Mestre das Miragens',
        merits: 1,
        rarity: 'blue'
    },
    {
        name: 'Selo Horrendo da Maldição',
        merits: 1,
        rarity: 'blue'
    },
    {
        name: 'Escudo de Energia',
        merits: 1,
        rarity: 'green'
    },
    {
        name: 'Liberação do nome Verdadeiro',
        merits: 1,
        rarity: 'red'
    },
    {
        name: 'Potencial Ilimitado',
        merits: 1,
        rarity: 'red'
    },
    {
        name: 'Mundo de Dor',
        merits: 1,
        rarity: 'red'
    },
    {
        name: 'Esconde-Esconde',
        merits: 1,
        rarity: 'red'
    },
    {
        name: 'Paredes do Castelo',
        merits: 1,
        rarity: 'red'
    },
].sort((a, b) => {
    if (a.rarity > b.rarity)
        return 1;

    return -1;
})