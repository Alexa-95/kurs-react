class App extends React.Component {
  state = {
    avaliableProducts: 7,
    shoppingCart: 0
  };

  handleRemoveFromCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart - 1
    });
  };

  handleAddToFromCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart + 1
    });
  };

  handleBuy = () => {
    this.setState({
      avaliableProducts: this.state.avaliableProducts - this.state.shoppingCart,
      shoppingCart: 0
    });
  };
  render() {
    const { shoppingCart, avaliableProducts } = this.state;
    const style = shoppingCart === 0 ? { opacity: 0.3 } : {};
    return (
      <div>
        <button
          disabled={shoppingCart ? false : true}
          onClick={this.handleRemoveFromCart}
        >
          -
        </button>
        {/* STYLE CSS W KODZIE */}
        {/* <span
          style={
            shoppingCart === 0
              ? {
                  opacity: 0.3
                }
              : {}
          }
        >
          {" "}
          {shoppingCart}{" "}
        </span> */}

        <span style={style}>{shoppingCart}</span>
        <button
          disabled={shoppingCart === avaliableProducts ? true : false}
          onClick={this.handleAddToFromCart}
        >
          +
        </button>
        {shoppingCart > 0 && <button onClick={this.handleBuy}>Kup</button>}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
