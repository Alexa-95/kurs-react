///////////////// SZUKANIE PO ID /////////////////

const Person = props => {
  return (
    <li>
      <span>{props.name}</span>
      <button onClick={props.delete}>Usuń</button>
    </li>
  );
};
///////////////// SZUKANIE PO NAME /////////////////
// const Person = props => {
//   return (
//     <li>
//       <span>{props.name}</span>
//       <button onClick={() => props.delete(props.name)}>Usuń</button>
//     </li>
//   );
// };

class List extends React.Component {
  state = {
    people: [
      { id: 1, name: "Kasia" },
      { id: 2, name: "Basia" },
      { id: 3, name: "Asia" },
      { id: 4, name: "Zosia" }
    ]
  };

  ///////////////// SZUKANIE PO ID /////////////////
  handleDelete(id) {
    const people = [...this.state.people];
    const index = people.findIndex(person => person.id === id);
    people.splice(index, 1);
    this.setState({
      people
    });
  }

  ///////////////// SZUKANIE PO NAME /////////////////
  // handleDelete = name => {
  //   // let people = Array.from(this.state.people);
  //   let people = this.state.people.slice();
  //   people = people.filter(person => name !== person.name);
  //   this.setState({
  //     people
  //   });
  // };
  render() {
    ///////////////// SZUKANIE PO ID /////////////////
    const people = this.state.people.map(person => (
      <Person
        key={person.id}
        name={person.name}
        delete={this.handleDelete.bind(this, person.id)}
      />
    ));
    ///////////////// SZUKANIE PO NAME /////////////////
    // const people = this.state.people.map(person => (
    //   <Person key={person.id} name={person.name} delete={this.handleDelete} />
    // ));
    return <ul>{people}</ul>;
  }
}

ReactDOM.render(<List />, document.getElementById("root"));
