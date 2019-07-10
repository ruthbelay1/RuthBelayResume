import React from 'react';
import Homepage from "./Components/Homepage"
import Experience from './Components/Experience'
import About from'./Components/About'
import './App.css';

class App extends React.Component {
    constructor(props){
        super(props);
        this.myAbout = React.createRef();
        this.myExperiences = React.createRef();
    }

    scrollToAbout =() => window.scrollTo(0,this.myAbout.current.offsetTop)
    scrollToExperiences = () => window.scrollTo(0, this.myExperiences.current.offsetTop)
    



    render() {
        return (
            <div className="backgroundimage">
                <Homepage scrollToAbout={this.scrollToAbout} scrollToExperiences={this.scrollToExperiences}/>
                <div ref={this.myAbout}>
                    <About />
                </div>
                <div ref={this.myExperiences}>
                <Experience/>
                </div>
            </div>
            
        );
    }
}
export default App;