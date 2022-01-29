import * as React from 'react';

interface ICard {
  name: string,
  email: string,
  id: number
}

const Card: React.SFC<ICard> = (prop) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${prop.id}?200x200`} />
      <div>
        <h2>{prop.name}</h2>
        <p>{prop.email}</p>
      </div>
    </div>
  );
};

export default Card;