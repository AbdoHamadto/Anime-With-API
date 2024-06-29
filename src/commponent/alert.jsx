const Alert = ( {data, numAnime, closeAlert} ) => {
    document.body.style.overflow = 'hidden';
    const close = () => {
        closeAlert(false)
        document.body.style.overflow = 'auto';
    }
    
    return (
        <>
            <div className="alert">
                <div className="details">
                    <div className="close-alert" onClick={close}>⮾</div>
                    <div className="img-inf">
                        <div className="img"> <img src={data[numAnime].images.jpg.large_image_url} /> </div>
                        <div className="inf"> 
                            <div className="ad"><p><b>Japanese :</b> {data[numAnime].title_japanese} </p></div>
                            <div className="all">
                                <div className="one">
                                    <p><b>English :</b> {data[numAnime].titles[0].title} </p>
                                    <p><b>Episodes :</b> {data[numAnime].episodes} </p>
                                    <p><b>Studio :</b> {data[numAnime].studios[0].name} </p>
                                </div>
                                <div className="two">
                                    <p><b>Score :</b> {data[numAnime].score} ⭐ </p>
                                    <p><b>Duration :</b> {data[numAnime].duration}</p>
                                    <p><b>Favorite :</b> {data[numAnime].favorites} ♥️</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="synopsis"> <b> Synopsis : </b> {data[numAnime].synopsis} </div>
                </div>
            </div>
        </>
    )
}

export default Alert;