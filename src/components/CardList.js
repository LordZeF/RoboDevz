import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return (
        <div>
            {
                robots.map((user, ibot) => {
                    return (
                        <Card
                            key={ibot}
                            id={robots[ibot].id}
                            name={robots[ibot].name}
                            email={robots[ibot].email}
                        />
                    );
                })
            }
        </div>
    );
}
export default CardList;