import './App.css';
import Charts from './Components/Charts/Charts';
import Cards from './Components/Cards/Cards';
import CountryPicker from './Components/CountryPicker/CountryPicker';
import React , {useState} from 'react';
import { fetchData } from './Api/fetchData';

class App extends React.Component {

  state = {
    data : {}
  }
  
  async componentDidMount(){
    const fetchdata = await fetchData()
    this.setState({data : fetchdata})
  }
  render() {

    const { data } = this.state


    return (
      <div className="container">

        <Cards data={data}/>
        <CountryPicker />
        <Charts />



      </div>
    );
  }

}

export default App;