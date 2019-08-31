import React, {Component}from 'react';
import NavBar from './components/nav.jsx';
import Counters from './components/counters.jsx'
import './App.css';

class App extends Component {
  state = { 
    counters :[
        { id:1, value :1},
        { id:2, value :0},
        { id:3, value :0},
        { id:4, value :0}
    ],
    
 };
 handleIncrement = (count)=>{
     const counters = [...this.state.counters];
        const index= counters.indexOf(count);
        counters[index] = {...count};
        counters[index].value++;
        this.setState({ counters })
 }
 handleDelete = (setId)=>{
    const counters = this.state.counters.filter(counter => counter.id !== setId);
    this.setState({ counters })
 }
 handleReset = ()=>{
     const counters = this.state.counters.map(a=> {
         a.value = 0;
         return a;
        })
        this.setState({ counters});
 }
  render() { 
    return ( <React.Fragment>
      <NavBar totalCounters = {this.state.counters.filter(a=> a.value > 0).length}/> 
      <main className="conatiner">
        <Counters
        counters = {this.state.counters}
        onReset={this.handleReset}
        onDelete = {this.handleDelete}
        onIncrement = {this.handleIncrement}
        />
      </main>
      </React.Fragment> );
  }
}
 
export default App;
  