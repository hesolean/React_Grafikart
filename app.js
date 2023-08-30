class Home extends React.Component {
    render() {
        return <div>
            <label htmlFor="nom">Mon nom</label>
            <input type="text" id="nom" name="nom" />
        </div>
    }
}

ReactDOM.render(<Home/>, document.querySelector('#app'));