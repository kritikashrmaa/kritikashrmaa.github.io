import React from 'react';
import EventComp from '../components/Event/EventComp';
import { events } from '../components/Items';

const Events = () => {
  
  return (
    <div className="events-container">
      <h2 className="events-heading">Upcoming Events</h2>
      {events.map((event) => (
         <EventComp event={event}/>
      ))}
    </div>
  );
};

export default Events;

