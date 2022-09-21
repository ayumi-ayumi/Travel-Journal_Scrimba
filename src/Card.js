import React from "react"
import data from "./data"

// Child
export default function Card (props) {
    return (
        <div className="card">
            <div className="card--left">
                <img src={props.imageUrl} className="location--picture"/>
            </div>
            <div className="card--right">
                <div className="location">
                    <i className="fa-solid fa-location-dot"></i>
                    <div className="location--country">{props.location}</div>
                    <a href="{props.googleMapsUrl" className="location--link">View on Google Maps</a>
                </div>
                <h2 className="location--title">{props.title}</h2>
                <p className="date">{props.startDate} - {props.endDate}</p>
                <p className="location--description">{props.description}</p>
            </div>
        </div>
    )
}
