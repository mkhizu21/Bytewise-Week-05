import React from 'react'

const Cards = ({Title}) => {
  return (
    <div className={`report-card ${Title.title}`}>
    <h3>{Title.title}</h3>
    <p className="hours">{Title.timeframes.daily.current}hrs</p>
    <p className="last-week">Last Week - {Title.timeframes.daily.previous}hrs</p>
    </div>
  )
}

export default Cards
