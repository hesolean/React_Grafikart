class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            nom: "Ln",
            textarea: "",
            select: "demo3",
            selectMulti: ["demo4", "demo6"],
            checked: true
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleChangeMulti = this.handleChangeMulti.bind(this)
        this.handleChangeCheck = this.handleChangeCheck.bind(this)
    }

    handleChange(e) {
        this.setState({
            nom: e.target.value
        })
    }

    handleChangeMulti(e) {
        this.setState({
            selectMulti: Array.from(e.target.selectedOptions)
            .map(o => o.value)
        })
    }

    handleChangeCheck(e) {
        this.setState({
            checked: e.target.checked
        })
    }
    render() {
        return <div>
            <label htmlFor="nom">Mon nom</label>
            {this.state.nom}
            <input 
                type="text" 
                id="nom" 
                name="nom" 
                value={this.state.nom} 
                onChange={this.handleChange} 
            />
            <textarea
                id="textarea" 
                name="textaera" 
                value={this.state.textarea} 
                onChange={this.handleChange}
            ></textarea>
            <select 
                value={this.state.select} 
                onChange={this.handleChange}
            >
                <option value="demo1">Démo 1</option>
                <option value="demo2">Démo 2</option>
                <option value="demo3">Démo 3</option>
            </select>
            {JSON.stringify(this.state.selectMulti)}
            <select 
                value={this.state.selectMulti} 
                onChange={this.handleChangeMulti} 
                multiple
            >
                <option value="demo4">Démo 4</option>
                <option value="demo5">Démo 5</option>
                <option value="demo6">Démo 6</option>
            </select>
            <input 
                type="checkbox" 
                checked={this.state.checked} 
                onChange={this.handleChangeCheck}
            />
            {this.state.checked ? <div>Le message s'affiche</div> : null}
        </div>
    }
}

ReactDOM.render(<Home/>, document.querySelector('#app'));