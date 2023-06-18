import React from 'react'
import './event.css'

const EventComp = ({event}) => {
  return (
    <div key={event.id} className="event-card">
          <div className="event-date">{event.date}</div>
          <div className="event-time">{event.time}</div>
          <div className="event-type">{event.type}</div>
          <div className="event-location">Location: {event.location}</div>
          <div className="event-speaker">Speaker: {event.speaker}</div>
        </div>
  )
}

export default EventComp
