

const initialElementDOM = document.getElementById('mainContainer');

initialElementDOM.innerHTML = `
    <header>HEADER</header>
    <main>MAIN</main>
    <footer>FOOTER</footer>`;

const articleDOM = document.querySelectors('article');

const mainLinksData = [
    {
        pavadinimas: 'Tyrunt',
        spalva: 'pilka',
        forma: 'apvalus',
        tipas: 'žemė',
        nuoroda: 'https://www.pokemon.com/us/pokedex/tyrunt',
    },
    {
        pavadinimas: 'Braixen',
        spalva: 'geltona',
        forma: 'uodeguota',
        tipas: 'žemė',
        nuoroda: 'https://www.pokemon.com/us/pokedex/braixen',
    },
    {
        pavadinimas: 'Delphox',
        spalva: 'ruda',
        forma: 'išsidraikiusi',
        tipas: 'ugnis',
        nuoroda: 'https://www.pokemon.com/us/pokedex/delphox',
    },
    {
        pavadinimas: 'Froakie',
        spalva: 'mėlyna',
        forma: 'apvali',
        tipas: 'vanduo',
        nuoroda: 'https://www.pokemon.com/us/pokedex/froakie',
    },
    {
        pavadinimas: 'Greninja',
        spalva: 'violetinė',
        forma: 'kūda',
        tipas: 'oras',
        nuoroda: 'https://www.pokemon.com/us/pokedex/greninja',
    },
    {
        pavadinimas: 'Bunnelby',
        spalva: 'pilka',
        forma: 'ilgaausė',
        tipas: 'žemė',
        nuoroda: 'https://www.pokemon.com/us/pokedex/bunnelby',
    },
    {
        pavadinimas: 'Fletchling',
        spalva: 'marga',
        forma: 'didžiagalvė',
        tipas: 'oras',
        nuoroda: 'https://www.pokemon.com/us/pokedex/fletchling',
    },
    {
        pavadinimas: 'Vivillon',
        spalva: 'rausva',
        forma: 'lengva',
        tipas: 'oras',
        nuoroda: 'https://www.pokemon.com/us/pokedex/vivillon',
    },
    {
        pavadinimas: 'Litleo',
        spalva: 'pilka',
        forma: 'sunki',
        tipas: 'žemė',
        nuoroda: 'https://www.pokemon.com/us/pokedex/litleo',
    },
    {
        pavadinimas: 'Pyroar',
        spalva: 'raudona',
        forma: 'plona',
        tipas: 'žemė',
        nuoroda: 'https://www.pokemon.com/us/pokedex/pyroar',
    },
];


let articleHTML = '';

for (const linkData of mainLinksData) {
    navHTML += `${linkData.pavadinimas}>${linkData.spalva}`;
}


navDOM.innerHTML = navHTML;