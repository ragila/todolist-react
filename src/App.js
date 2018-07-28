import React, { Component } from 'react';

class App extends Component {

  state = {
    listBuah: [],
    buah: ''
  }


  add = async ()=>{
    
    await this.setState({
      listBuah: [...this.state.listBuah, this.state.buah],
      buah : ''
    })
    localStorage.setItem("data", JSON.stringify(this.state.listBuah));
  }

  handleChange = (event) => {
    const buahInput = event.target.value;
    // console.log(buah);
    this.setState({
      'buah': buahInput
    })
  } 

  componentDidMount(){
    const data = localStorage.getItem('data');
    if(data){
      const listBuah = JSON.parse(data);
      this.setState({
        listBuah: listBuah
      })
    }
  }

  delete = async (id)=>{
    const data = this.state.listBuah;
    const dataBaru = data.splice(id, 1);
    await this.setState({
      listBuah: data
    })
    localStorage.setItem("data", JSON.stringify(this.state.listBuah));
  }  

  render() {
    return (
      <div className="container">
          <h2>To Do List</h2>
          <p><em>Simple to do list Reactjs</em></p>
          <form name="toDolist">
            <input placeholder="Mau ngapain hari ini?"
                type="text" 
                value={this.state.buah}
                onChange={this.handleChange}/>
          </form>
          <button id="button" className="btn btn-primary" onClick={this.add}>Add</button>
        <div className="row">
            <ul className="list-group-item, col-sm-6"> 
              {this.state.listBuah.map((buah, id)=>{
                  return <li className="list-group-item clearfix">{buah}
                  <div className="pull-right"> 
                  <button onClick={()=>this.delete(id)} className="btn btn-xs btn-danger">X</button>
                  </div>
                  </li>
                })}
          </ul>
        </div>
      </div>
    );
  }
}

class Counter extends Component {

  state = {
    angka: 0
  }

  naik = () => {
    this.setState({
      angka: this.state.angka + 1
    })
  }

  turun = () => {
    this.setState({
      angka: this.state.angka - 1
    })
  }
  
  render() {
    return (
      <div>
        <h1>{this.state.angka}</h1>
        <button onClick={this.naik}>Naik</button>
        <button onClick={this.turun}>Turun</button>
      </div>
    )
  }
}

export default App;