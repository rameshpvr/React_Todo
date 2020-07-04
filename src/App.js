import React, { Component } from 'react'
import './App.css';
import ListItems from './ListItems';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

class App extends Component 
{
  constructor(props) {
    super(props)
  
    this.state = {
      listOfItems:[],
      item:{
        key:'',
        text:''
      }
       
    }
  }
  
  handleInputChange = (event) => {
    this.setState({
      item:{
        text:event.target.value,
        key:Date.now()
      }
    })
  }

  addItem = (event) => {
    event.preventDefault();
    if(this.state.item.text !== ''){
      this.setState((prevState) => {
        let listOfItems=[];
        listOfItems = Object.assign([],prevState.listOfItems);
        listOfItems.push(this.state.item);
        return{listOfItems};
      })
    }  
  }

  deleteItem = (keyToDelete) => {
    console.log("On delete",keyToDelete);
    const filteredItems = this.state.listOfItems.filter(item => item.key !== keyToDelete);
    this.setState({
      listOfItems:filteredItems
    })
  }

  OnEditChange = (value,key) => {
    let items = this.state.listOfItems
    items.map((item) => {
      if(item.key === key){
        item.text=value;
      }
    })
    this.setState({
      listOfItems:items
    })

  }

  render() 
  {
    //console.log("Item is",this.state.listOfItems);
    return (
      <div className="App">
        <header>
          <form id="todoform" onSubmit={this.addItem}>
            <input type="text" onChange={this.handleInputChange} value={this.state.item.text}  placeholder="Enter your Note Here!"></input>
            <button type="submit">Add</button>
          </form>
        </header>
        <ListItems itemlist={this.state.listOfItems} deleteItem={this.deleteItem} OnEditChange={this.OnEditChange}/>
      </div>
    )
  }
}

export default App
