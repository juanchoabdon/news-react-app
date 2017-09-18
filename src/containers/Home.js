import React, { Component } from 'react';
import './Home.css';
import api from '../api';
import { NavLink } from 'react-router-dom';

class Home extends Component {

   constructor(props) {
     super(props);
     this.state = {
       sources: []
     }
     this.getSources = this.getSources.bind(this);
   }


  componentDidMount() {
     this.getSources()
  }

  async getSources() {
    let response = await api.getSources();
    this.setState({
      sources: response.sources
    })
  }

  render() {
    return (
      <div className="Home">
        {
          this.state.sources.map((source)=>
          <div key={source.id} className="chip">
           <NavLink to={`/articles/${source.id}`}>{source.name}</NavLink>
          </div>
         )
        }
      </div>
    );
  }
}

export default Home;
