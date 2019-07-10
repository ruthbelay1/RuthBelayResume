import React from "react"

class Icon extends React.Component{
    render(){
        return(
            <a href={this.props.link} target="_blank" className="icon">
                <img src={this.props.image} width="40" heighht="40" className="centerImage"/>
            </a>

        )
    }
}

export default Icon;