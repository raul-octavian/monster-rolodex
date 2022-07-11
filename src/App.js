
import { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/Card-list/Card-list';
import SearchBox from './components/Search-box/Search-box';




const App = () => {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase()
    setSearchField(searchFieldString)
  }

  // useEffect is a hook that preforms side effects if the dependencies(second parameter-array) change, if second array is not provided the useEffect will run on each render, is an empty array is given it will run on mount, else it will watch the dependencies provided and it will run when they change
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users)
      )
  }, [])

  // filter the monsters array if searchField or monsters array change
  useEffect(() => {
    const newFilteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField)
    })
    setFilteredMonsters(newFilteredMonsters)
  }, [searchField, monsters])


  return (
    <div className="App">
      <h1 className='app--title'>My monster Rolodex</h1>
      <SearchBox
        className='search-box'
        placeholder='search monsters'
        onChangeHandler={onSearchChange} />

      <CardList monsters={filteredMonsters} />
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
