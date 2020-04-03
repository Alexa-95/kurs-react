const NewOmen = props => {
  const { text } = props;
  return (
    <h1>
      <strong>{text}</strong>
    </h1>
  );
};

class App extends React.Component {
  state = {
    wrozba: "",
    nowaWrozba: ""
  };

  listaWrozb = [
    {
      id: 0,
      wrozba: "Wróżba pierwsza"
    },
    {
      id: 1,
      wrozba: "Wróżba druga"
    },
    {
      id: 2,
      wrozba: "Wróżba trzecia"
    }
  ];

  handleRandomWrozba = () => {
    const lengthOfArray = this.listaWrozb.length;
    const randomItem = this.listaWrozb[
      Math.floor(Math.random(lengthOfArray) * lengthOfArray)
    ];
    const randomItemWrozba = randomItem.wrozba;
    this.setState({
      wrozba: randomItemWrozba
    });
  };
  handleNewOmen = () => {
    if (this.state.wrozba === "") {
      return null;
    } else {
      return <NewOmen text={this.state.wrozba} />;
    }
  };

  handleCreateOmen = e => {
    // const omen = document.getElementById("input").value;
    this.setState({
      nowaWrozba: e.target.value
    });
  };
  handleAddOmen = e => {
    e.preventDefault();
    const text = this.state.nowaWrozba;
    const array = this.listaWrozb;
    if (text === "") {
      return null;
    } else {
      const newArrayObject = {
        id: array.length,
        wrozba: text
      };
      array.push(newArrayObject);
      // document.getElementById("input").value = "";
      this.setState({
        nowaWrozba: ""
      });
    }
    console.log(array);
  };
  render() {
    return (
      <div>
        <button onClick={this.handleRandomWrozba}>Zobacz wróżbę</button>
        <br />
        <br />
        <form>
          <input
            type="text"
            id="input"
            value={this.state.nowaWrozba}
            onChange={this.handleCreateOmen}
          />
          <button type="submit" onClick={this.handleAddOmen}>
            Dodaj wróżbę
          </button>
        </form>

        {this.handleNewOmen()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
