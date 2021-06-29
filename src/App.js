import './App.css';
import { Component } from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component'
class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: '',
      theme:'1'
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  handleChange = e => {
    this.setState({searchField: e.target.value})
  }

  render(){
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return (
      <div className="App">
          <h1>Monsters Rolodex</h1>
          <SearchBox
            placeholder = 'search monsters'
            handleChange = {this.handleChange}
          />
          <select onChange={e => this.setState({theme:e.target.value})}>
            <option value='1'>Theme 1
            </option>
            <option value='2'>Theme 2
            </option>
            <option value='3'>Theme 3
            </option>
            <option value='4'>Theme 4
            </option>
            <option value='5'>Theme 5
            </option>
          </select>
        <CardList monsters={filteredMonsters} theme={this.state.theme}/>
      </div>
    );
  }
  }
  

export default App;
