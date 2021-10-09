import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'http://www.bibigo.com/img/en/img_food_kimchi1_1.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image:
      'https://post-phinf.pstatic.net/MjAyMDAzMDNfMTcg/MDAxNTgzMTkwNjA3ODQ5.kUXPHqGJ2xPDSu_3FiEoFC3kY9QyQ_g9CziCGrFSDuEg.LpCfOTbc5qth9d-GKzGv9jwj2VKhcqmPHp5cp1KJYEsg.JPEG/IM_food02.jpg?type=w1200',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'Bibimbap',
    image:
      'https://mblogthumb-phinf.pstatic.net/MjAxNzA0MjRfMjky/MDAxNDkzMDIzMjY5MjY5.u5q3w1Cl1wjxJoRzSpczd_VT2rScn_zaDV5LfKVMa6Mg.Tz5B-6i_SYH4yydceeZT6bNwDs-P5srXOE2uCDQ_Disg.JPEG.estelle926/151435979-56a57a083df78cf772888a61.jpg?type=w800',
    rating: 4.8,
  },
  {
    id: 4,
    name: 'Doncasu',
    image:
      'http://th2.tmon.kr/thumbs/image/423/336/e17/1b1492318_700x700_95_FIT.jpg',
    rating: 5.5,
  },
  {
    id: 5,
    name: 'Kimbab',
    image:
      'https://recipe1.ezmember.co.kr/cache/recipe/2016/06/29/e7401296033ab8e4297cd53d71e1bba91.jpg',
    rating: 4.7,
  },
];

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
