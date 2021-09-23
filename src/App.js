import './App.css'
import React from "react"
import {useState} from "react"


function App() {
    const [down, setDown] = useState(false)
    const [circles, setCircles] = useState([])
    let x = []
    let y = []

    const mouseDownHandler = () => {
        setDown(true)
    }
    const mouseMoveHandler = (e) => {
        x.push(e.nativeEvent.pageX)
        y.push(e.nativeEvent.pageY)
    }
    const mouseUpHandler = () => {
        setDown(false)
        let mt = Math.min.apply(null, y)
        //let ml = Math.min.apply(null, x)
        let h = Math.max.apply(null, y) - Math.min.apply(null, y)
        let ml = x[y.indexOf(mt)] - h / 2
        x.splice(0, x.length)
        y.splice(0, y.length)
        circles.push({
            marginTop: mt,
            marginLeft: ml,
            width: h,
            height: h,
            borderRadius: "50%",
            position: "absolute",
            border: "1px solid black"
        })
        setCircles(circles)
    }
    const clear = () => {
        setCircles([])
    }

  return (
    <div onMouseDown={mouseDownHandler}
         onMouseMove={down ? mouseMoveHandler : null}
         onMouseUp={mouseUpHandler}
         className="App"
    >
        <button onClick={clear}>Clear</button>
        {
            circles.map((circle, index) => {
                return (
                    <div key={index + Date.now()} style={circle}>
                    </div>
                )
            })
        }
    </div>
  );
}

export default App;
