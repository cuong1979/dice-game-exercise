import React from 'react'

function ShowResult (props) {
    console.log(props)
    return (
            
            <div>
                <p className="playp" > Play poäng : { props.play }</p><br></br>
                <p className="datap" > Data poäng : { props.data }</p><br></br>
            </div>
        )
    
}
export default ShowResult 