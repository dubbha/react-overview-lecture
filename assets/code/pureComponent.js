class Pure extends React.PureComponent {              // PureComponent implements
  state = {                                           // shallow shouldComponentUpdate
    users: this.props.users,
    expanded: false,
  };

  expand = () => {
    this.setState({ expanded: true });
  }

  render() {
    return (
      <>
        <button onClick={this.expand}>click me</button>
        {this.state.expanded && (                             // conditional rendering
          <ul>
            {this.state.users.map(user =>                     // mapping over list, key prop
              <li key={user.id}>
                {user.name}
              </li>
            )}
          </ul>
        )}
      </>
    );
  }
}

const App = () => (
  <Pure
    users={[
      { id: 1, name: 'John' },
      { id: 2, name: 'Mary' },
      { id: 3, name: 'Paul' },
    ]}
  />
);