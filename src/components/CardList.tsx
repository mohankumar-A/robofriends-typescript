import * as React from 'react';
import Card from './Card';

interface IRobot {
  name: string;
  id: number;
  email: string;
}

const CardList = ({ robots } : {robots: Array<IRobot>}) => {
  return (
    <div>
      {
        robots.map((user: IRobot, i: number) => {
          return (
            <Card
              key={i}
              id={user.id}
              name={user.name}
              email={user.email}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;