import React from "react"
import Card from "./Card"
import Header from "./Header"
import data from "./data"

// Parent
export default function App () {
    
    const datas = data.map((item)=>{
        return (
            <Card key={item.id}
            {...item}
            // imageUrl={item.imageUrl}
            // googleMapsUrl={item.googleMapsUrl}
            // title={item.title}
            // startDate={item.startDate}
            // endDate={item.endDate}
            // description={item.description}
            />
        )
    })
        console.log(datas)
        
    return (
        <div>
            <Header />
            {datas}
        </div>
    )
}

// imageUrl="https://source.unsplash.com/WLxQvbMyfas" googleMapsUrl="https://goo.gl/maps/1DGM5WrWnATgkSNB8" title="Mount Fuji" startDate="12 Jan, 2021" endDate="24 Jan, 2021" description="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."