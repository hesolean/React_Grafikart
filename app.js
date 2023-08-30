/**
 * version en langage JS classique
 */

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

// 