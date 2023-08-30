/**
 * version en langage JS classique


// ajout d'un compteur
let n = 0;

function render2() {
    const title = React.createElement('h1', {}, 
        'Bonjour tout le monde ', 
        React.createElement('span', {}, n)
    );
    ReactDOM.render(title, document.querySelector('#app'));
};

function render() {
    document.querySelector('#app').innerHTML = '<h1>Bonjour tout le monde <span>' + n + '</h1>';
};

render();
render2();

window.setInterval(() => {
    n++;
    render();
    render2();
}, 1000)
 */

/**
 * version jsx
 */
// ajout d'un compteur
let n = 0;

/**
 * formatage du nombre avec 2 chiffres
 * @param {*} n 
 * @returns 
 */
function numberFormat(n) {
    return n.toString().padStart(2, '0');
}

function render() {
    const title = <h1 id={"title" + n} className="title">
        {/* id va changer à chaque nouvelle valeur de n */}
        Bonjour tout le monde <span>{n % 2 ? numberFormat(n) : null}</span>
        {/* si on met le span à la ligne, il ne prend pas en compte des espaces */}
        <br></br>
        <span>{['texte1 ', 'texte2']}</span></h1>;
        // on peut mettre plusieurs valeurs mais sous forme de tableau
    ReactDOM.render(title, document.querySelector('#app'));
};

render();

window.setInterval(() => {
    n++;
    render();
}, 1000);