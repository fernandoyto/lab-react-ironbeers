import React from 'react';
import Card from '../../Molecules/Card/Card';
import './Home.css';

const Home = () => {
  const cards = [
    {
      image: '/images/beers.png',
      title: 'All Beers',
      subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, voluptatem natus, culpa in cum numquam quam vitae adipisci commodi aliquid ab maiores odio delectus ea incidunt iure cumque distinctio fugiat.',
      route: '/beers'
    },
    {
      image: '/images/new-beer.png',
      title: 'Add New Beer',
      subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, voluptatem natus, culpa in cum numquam quam vitae adipisci commodi aliquid ab maiores odio delectus ea incidunt iure cumque distinctio fugiat.',
      route: 'new-beer'
    },
    {
      image: '/images/random-beer.png',
      title: 'Get Random Beer',
      subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, voluptatem natus, culpa in cum numquam quam vitae adipisci commodi aliquid ab maiores odio delectus ea incidunt iure cumque distinctio fugiat.',
      route: 'random-beer'
    },
  ];

  return (
    <div className="container">
      <div className="row">
        {
          cards.map((card) => {
            return (
              <Card src={card.image} title={card.title} subtitle={card.subtitle} linkTo={card.route} cardClass='home-card card' style='home-card card' />
            )
          })
        }
      </div>
    </div>
  );
};

export default Home;
