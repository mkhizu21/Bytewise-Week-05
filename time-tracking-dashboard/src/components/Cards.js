import React from 'react'

const Cards = ({Title, statusD, statusW,statusM}) => {
  return (
    <div className={`report-card ${Title.title}`}>
    <h3>{Title.title}</h3>
    <p className="hours">{statusD ? Title.timeframes.daily.current : statusW ? Title.timeframes.weekly.current : statusM ? Title.timeframes.monthly.current : '0'}hrs</p>
    <p className="last-week">Last Week - {statusD ? Title.timeframes.daily.current : statusW ? Title.timeframes.weekly.current : statusM ? Title.timeframes.monthly.current : '0'}hrs</p>
    </div>
  )
}

export default Cards
