import react from "react"

export default function Data() {
const [podcastData, setPodcastData] = React.useState({  })

    fetch("https://podcast-api.netlify.app/id/10716")
        .then(res => res.json())
        .then(data => podcastData (data))

}
     