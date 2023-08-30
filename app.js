// création d'un composant
function WelcomeFunc ({name, children}) { // children permet de récupérer "Bonjour tout le monde"
    return <div>
        <h1>Bonjour {name}</h1>
        <p>
            {children}
        </p>
    </div>
    
};

class Welcome extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {
        return <div>
        <h1>Bonjour {this.props.name}</h1>
        <p>
            {this.props.children}
        </p>
    </div>
    }
};

class Clock extends React.Component {
// definition d'un état
    constructor (props) {
        super(props);
        this.state = {date: new Date()}
        this.timer = null
    }

// vie du composant
    componentDidMount() {
        //contexte de this est perdu quand j'appelle la fonction tick donc je dois rajouter (this)
        this.timer = window.setInterval(this.tick.bind(this), 1000)
    }

    componentwillUnmount() {
        window.clearInterval(this.timer)
    }

    /**
     * permet de changer l'état du composant
     */
    tick() {
        // changement d'état avec l'objet du nouvel état
        this.setState({date: new Date()})
    }

    render () {
        const date = new Date();
        return <div>
            Nous sommes le {this.state.date.toLocaleDateString()} et 
            il est {this.state.date.toLocaleTimeString()};  
        </div>
    }
}

function Home () {
    return <div>
        <Welcome name="Ln" />
        <Welcome name="Gérard" />
        <Clock/>
    </div>
}

/*
// on peut ajouter un paramètre qui équivaut à props
ReactDOM.render(<Welcome name="Ln"/>, document.querySelector('#app'));
ReactDOM.render(<Welcome name="Ln">Bonjour tout le monde</Welcome>, document.querySelector('#app'));
*/
ReactDOM.render(<Home/>, document.querySelector('#app'));