const Item = props => (
  <li
    className={props.active ? "enabled" : "disabled"}
    onClick={() => props.changeStatus(props.id)}
  >
    {props.name}
  </li>
);
