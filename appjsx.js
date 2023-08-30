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
    const items = [
        'bouger',
        'changer',
        'aboyer',
        'ricanner'
    ];
    // pour afficher toutes les tâches, au lieu de faire une boucle for,
    // on crée une variable qui map sur la liste
    const lis = items.map((item, k) => <li key={k}>{item}</li>);
    // on peut intégrer la ligne précédente directelent dans l'interpolation
    //mais cela complique la lecture du code
    // on ajoute l'index du tableau comme clé pour que chaque élément est unique

    // quand on veut créer plusieurs éléments dans la même constante,
    // il faut que les éléments soient imbriqués dans une div
    // sinon il faut utiliser fragment ou vide, tout dépend de la version de babel
    const title = <React.Fragment>
        <h1 id={"title" + n} className="title">
        {/* id va changer à chaque nouvelle valeur de n */}
        Bonjour tout le monde <span>{n % 2 ? numberFormat(n) : null}</span>
        {/* si on met le span à la ligne, il ne prend pas en compte des espaces */}
        <br></br>
        <span>{['texte1 ', 'texte2']}</span>
        </h1>
        <ul>
            {lis}
        </ul>
        </React.Fragment>;
    ReactDOM.render(title, document.querySelector('#app'));
};

render();

window.setInterval(() => {
    n++;
    render();
}, 1000);