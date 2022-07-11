
import './App.css';
import { Component } from 'react';
import CardList from './components/Card-list/Card-list';
import SearchBox from './components/Search-box/Search-box';


const App = () => {
  return (
    <div className="App">
      <h1 className='app--title'>My monster Rolodex</h1>
      {/* <SearchBox className='search-box' placeholder='search monsters' onChangeHandler={onSearchChange} />

      <CardList monsters={filteredMonsters} /> */}
    </div>
  );
}


/* class componet start here 
-----------------------------------------*/

// class App extends Component {

//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(users =>
//         this.setState(() => {
//           return { monsters: users }
//         },
//           () => {
//             console.log(this.state.monsters)
//           })
//       )
//   }

//   // define a function for search, defining it optimizes the component
//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase()
//     this.setState(() => {
//       // return { monsters: state.monsters.filter(monster => monster.name.includes(event.target.value)) }
//       return { searchField }
//     })
//   }

//   render() {

//     //extract useful variables

//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this

//     const filteredMonsters = monsters.filter(monster => {
//       return monster.name.toLowerCase().includes(searchField)
//     })

//     return (
//       <div className="App">
//         <h1 className='app--title'>My monster Rolodex</h1>
//         <SearchBox className='search-box' placeholder='search monsters' onChangeHandler={onSearchChange} />

//         <CardList monsters={filteredMonsters} />
//       </div>
//     );

//   }
// }

export default App;
