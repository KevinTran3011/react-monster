
import { useState, useEffect } from 'react';
import CardList from './Components/card-list/card-list.component';
import SearchBox from './Components/search-box/search-box.component';
import './App.css';



const App = ()=>{
  const [searchField , setSearchField] = useState('');   //[value we want to store, the set value function]
  const [ monsters, setMonsters] = useState([]);
  const [FilteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() =>{
          fetch('https://jsonplaceholder.typicode.com/users')
          .then((response) => response.json())
          .then((users) => setMonsters(users))

  }, [])

  useEffect(() =>{
    const newFilteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

  setFilteredMonsters(newFilteredMonsters);


  }, [monsters, searchField])

  const onSearchchange = (event) =>{
                // take the search value
                const searchFieldString = event.target.value.toLocaleLowerCase();
                setSearchField(searchFieldString);
                // update the DOM to just return the search values
 }


  return (
    <div className="App">

      <h1 className = "app-title">Monster book</h1>
      <SearchBox 
                className = 'monsters-search-box'
                placeholder = 'Find the monster'
                onChangeHandler = {onSearchchange}/>
      <CardList monsters = {FilteredMonsters}/>


    </div>
  );
}

// class App extends Component {

//   constructor(){
//     super();
//     this.state = {
//       monsters: [


//       ],
//       searchField :'',

//     }


//   }

//   async componentDidMount() {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/users');
//       const users = await response.json();
//       this.setState({ monsters: users });
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   }

// // create a fucntion called onSearchChange that filters through the search values
//   onSearchchange = (event) =>{
//                 console.log(event.target.value);
//                 // take the search value
//                 const searchField = event.target.value.toLocaleLowerCase();
//                 // update the DOM to just return the search values
//                 this.setState(()=>{
//                   return {searchField}
//                 })

//   }

//   render(){
//     //  create a list of monsters that contains the search value 
//     const { monsters, searchField } = this.state; // destructuring for the code to be more readable
//     const {onSearchchange} = this;
//     const filterMonster = monsters.filter((monster)=>{
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">

//         <h1 className = "app-title">Monster book</h1>
//         <SearchBox 
//                   className = 'monsters-search-box'
//                   placeholder = 'Find the monster'
//                   onChangeHandler = {onSearchchange}/>
//         <Cardlist monsters = {filterMonster}/>


//       </div>
//     );

//   }

// }

export default App;
