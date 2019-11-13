import React, { Component } from 'react';
import Navbar from '../../Molecules/Navbar/Navbar';
import BeerCard from '../../Molecules/BeerCard/BeerCard';
import axios from 'axios';
import './ListBeers.css';

class ListBeers extends Component {
  state = {
    beers: [],
  }

  async componentDidMount () {
    const beers = await this.getBeers();
    console.log(beers);
    this.setState({
      beers
    })
  }

  getBeers = async () => {
    const res = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
    return res.data;
  }

  render () {
    const { beers } = this.state;
    return (
      <div>
        <Navbar src='https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png' />
        {
          beers.map((beer) => {
            return (
              <BeerCard linkTo={`/beers/${beer._id}`} src={beer.image_url} title={beer.name} subtitle={beer.tagline} text={beer.contributed_by} cardClass='list-beers-card card' />
            )
          })
        }
      </div>
    )
  }
}

export default ListBeers;
