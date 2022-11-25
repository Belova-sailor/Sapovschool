import AppFilter from '../app-filter/app-filter';
import SearshPanel from '../search-panel/search-panel';
import AppInfo from '../app-info/app-info';
import './app.css';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from "../employees-add-form/employees-add-form"

function App() {
    const data = [
        {name:'Belova J.', salary: 800, increase: false, id: 1},
        {name:'Belov K.', salary: 1000, increase:  true, id: 2},
        {name:'Belov E.', salary:3000, increase: true, id: 3}
    ];

    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearshPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data = {data}/>
            <EmployeesAddForm/>
        </div>
    )
}

export default App;