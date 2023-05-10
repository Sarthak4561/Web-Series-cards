import React from "react";
import ReactDOM from "react-dom";


function Cards() {
    return(
        <>
         <div className="cards">
            <div className="card">
                <img
                    src = "https://picsum.photos/200/300"
                    alt = "myPic"
                    className="card__img"
                />
            </div>

            <div className="card__info">
                <span className="card__category">A Netflix Original Series</span>
                <h3 className="card__title"> STRANGER THINGS</h3>
                <a href="https://www.netflix.com/in/title/80057281" width="500" target="_blank">
                    <button>Watch Now</button>
                </a>
            </div>
        </div>
    </>
    )
}

ReactDOM.render(
    <>
        <Cards />
    </>,
    document.getElementById('root')
)
