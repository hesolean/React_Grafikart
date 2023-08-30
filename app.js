function Field ({name, value, onChange, children}) {
    return <div className="form-group">
        <label htmlFor={name}>{children}</label>
        <input type="text" value={value} onChange={onChange} id={name} name={name} className="form-control" /> 
    </div>
}

function Checkbox ({name, checked, onChange, children}) {
    return <div className="form-check">
        <input type="checkbox" checked={checked} onChange={onChange} id={name} name={name} className="form-check-input" />
        <label htmlFor={name} className="form-check-label">{children}</label>
    </div>
}

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            nom: "",
            prenom: "",
            newsletter: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        //on ne mute que la clé qui correspond au nom du champ
        const name = e.target.name
        //on fait une manip spéciale pour la checkbox
        const type = e.target.type
        const value = type === 'checkbox' ? e.target.checked : e.target.value     
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const data = JSON.stringify(this.state)
        this.setState({
            nom: "",
            prenom: "",
            newsletter: false
        })
    }

    render() {
        return <form className="container" onSubmit={this.handleSubmit}>
            {/* version Bootstrap */}
            <Field 
                name="nom" 
                value={this.state.nom} 
                onChange={this.handleChange}
            >
                Nom
            </Field>
            <Field 
                name="prenom" 
                value={this.state.prenom} 
                onChange={this.handleChange}
            >
                Prénom
            </Field>
            <Checkbox
                name="newsletter"
                checked={this.state.newsletter}
                onChange={this.handleChange}
            >
                Inscription à la newsletter
            </Checkbox>
            <div className="form-group">
                <button className="btn btn-primary">Envoyer</button>
            </div>
            {/* version normale
            <div>
                <label htmlFor="nom">Nom</label>
                <input 
                    type="text"
                    value={this.state.nom}
                    onChange={this.handleChange}
                    id="nom"
                    name="nom"
                />
            </div>
            <div>
                <label htmlFor="prenom">Prenom</label>
                <input 
                    type="text"
                    value={this.state.prenom}
                    onChange={this.handleChange}
                    id="prenom"
                    name="prenom"
                />
            </div>
            <div>
                <label htmlFor="newsletter">Inscription à la newsletter</label>
                <input 
                    type="checkbox"
                    checked={this.state.newsletter}
                    onChange={this.handleChange}
                    id="newsletter"
                    name="newsletter"
                />
            </div>*/}
            {/* cas d'un champ non controlé, plus performant car c'est la DOM qui le controle*/}
            {/*<div>
                <label htmlFor="noncontrole">Champ non contrôlé vide et prérempli</label>
                <input 
                    type="text"
                    value={undefined}
                />
                <input 
                    type="text"
                    defaultValue="prérempli"
                />
            </div> */}
            {JSON.stringify(this.state)}
        </form>
    }
}

ReactDOM.render(<Home/>, document.querySelector('#app'));