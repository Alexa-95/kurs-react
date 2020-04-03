//Funkcja poza komponentem

// const displayMessage = (isCorfirmed, isFormSubmitted) => {
//   if (isFormSubmitted) {
//     if (isCorfirmed) {
//       return <ValidationMessage txt="Możesz obejrzeć film. Zapraszamy!" />;
//     } else {
//       return <ValidationMessage txt="Nie możesz obejrzeć film" />;
//     }
//   } else {
//     return null;
//   }
// };

const ValidationMessage = props => {
  const { txt } = props;
  return <p> {txt}</p>;
};

const OrderForm = props => {
  const { submit, isCorfirmed, change } = props;
  return (
    <form onSubmit={submit}>
      <input type="checkbox" id="age" onChange={change} checked={isCorfirmed} />
      <label htmlFor="age">Mam co najmniej 16 lat</label>
      <br />
      <button type="submit">Kup bilet</button>
    </form>
  );
};

class TicketShop extends React.Component {
  state = {
    isCorfirmed: false,
    isFormSubmitted: false
  };

  handleChceckboxChange = () => {
    this.setState({
      isCorfirmed: !this.state.isCorfirmed,
      isFormSubmitted: false
    });
  };

  handleFormSubmkit = e => {
    e.preventDefault();
    if (!this.state.isFormSubmitted) {
      this.setState({
        isFormSubmitted: true
      });
    }
  };

  displayMessage = () => {
    if (this.state.isFormSubmitted) {
      if (this.state.isCorfirmed) {
        return <ValidationMessage txt="Możesz obejrzeć film. Zapraszamy!" />;
      } else {
        return <ValidationMessage txt="Nie możesz obejrzeć film" />;
      }
    } else {
      return null;
    }
  };
  render() {
    const { isCorfirmed } = this.state;
    return (
      <>
        <h1>Kup bilet na horror roku!</h1>
        <OrderForm
          change={this.handleChceckboxChange}
          submit={this.handleFormSubmkit}
          checked={isCorfirmed}
        />
        {this.displayMessage()}
      </>
    );
  }
}

ReactDOM.render(<TicketShop />, document.getElementById("root"));
