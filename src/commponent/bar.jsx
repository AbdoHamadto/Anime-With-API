import { useState } from "react"

const Bar = ({search}) => {
    const [anime, setAnime] = useState()
    const click = () => {
        search(anime)
    }
    return(
        <>
            <div className="bar">
                <input type="text" onChange={(e) => setAnime(e.target.value)}/>
                <div className="search" onClick={click}>🔍</div>
            </div>
        </>
    )
}

export default Bar;