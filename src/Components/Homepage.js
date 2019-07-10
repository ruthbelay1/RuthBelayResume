import React from "react";
import Icon from "./Icon"
import googleimage from "../Images/google.png"
import linkedin from "../Images/Linkedin.png"


class Homepage extends React.Component {
    render (){
        return (
            <div className="page">
                <div>
                <Icon link="https://linkedin.com/in/ruthbelay" image={linkedin} />
                    <button className= "headerTabs" onClick={this.props.scrollToAbout}>About</button>
                    <button className= "headerTabs" onClick={this.props.scrollToExperiences}>Experience</button>
                </div>
                <div>
                    <div className="centertext">
                       RUTH BELAY 
                       </div>
                </div>
                 </div>
        )
    }
}
export default Homepage;