const Card = ({data, open}) => {

    const openAlert = (index) => {
        let openA = true;
        open(index, openA)
    }

    return(
        <>
            {data.map((item, index) => 
                <div key={index} className="card" onClick={() => openAlert(index)}>
                    <div className="img">
                        <img src={item.images.jpg.large_image_url} className="anime" />
                    </div>
                    <div className="information">
                        <p><b>Name :</b> {item.title} </p>
                        <p><b>Episodes :</b> {item.episodes} </p>
                        <p><b>Studio :</b> {item.studios[0].name} </p>
                        <p><b>Rate :</b> {item.score} </p>
                    </div>
                </div>
            )}
        </>
    )
}

export default Card;