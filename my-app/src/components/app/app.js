import { Component } from "react";

import AppFilter from "../app-filter/app-filter";
import SearshPanel from "../search-panel/search-panel";
import AppInfo from "../app-info/app-info";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "Belova J.", salary: 800, increase: false, rise: true, id: 1 },
        { name: "Belov K.", salary: 1000, increase: true, rise: false, id: 2 },
        { name: "Belov E.", salary: 3000, increase: true, rise: false, id: 3 },
      ],
    };
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map(item =>{
        if(item.id === id){
          return{...item, [prop]: !item[prop]}
        }

        return item;
      })
    })
  )}

  // onToggleRise = (id) => {
  //   this.setState(({data}) => ({
  //     data: data.map(item =>{
  //       if(item.id === id){
  //         return{...item, rise: !item.rise}
  //       }

  //       return item;
  //     })
  //   })
  // )
  // };

  render() {
    const employees = this.state.data.length;
    const increased = this.state.data.filter(item => item.increase).length;

    return (
      <div className="app">
        <AppInfo employees={employees} increased={increased} />

        <div className="search-panel">
          <SearshPanel />
          <AppFilter />
        </div>

        <EmployeesList
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm />
      </div>
    );
  }
}

export default App;
