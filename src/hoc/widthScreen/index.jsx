import React, {Component} from 'react'


const WidthScreen = (WrappedComponent) => {
    return class extends Component {
        state = {
            smDown: false,
            mdDown: false,
            lgDown: false,
            xlDown: false,
            hdDown: false,
            xsUp: false,
            smUp: false,
            mdUp: false,
            lgUp: false,
            xlUp: false,
            hdUp: false,
  
        }

        handleWindowResize = () => {
            this.setState({ 
                smDown: window.innerWidth < 600,
                mdDown: window.innerWidth < 960,
                lgDown: window.innerWidth < 1280,
                xlDown: window.innerWidth < 1920,
                hdDown: window.innerWidth < 2400,
                xsUp: window.innerWidth > 0,
                smUp: window.innerWidth > 600,
                mdUp: window.innerWidth > 960,
                lgUp: window.innerWidth > 1280,
                xlUp: window.innerWidth > 1920,
                hdUp: window.innerWidth > 2400,
            });
        };
    
        componentDidMount() {
            this.handleWindowResize();
            window.addEventListener("resize", this.handleWindowResize);
        }
    
        componentWillUnmount() {
            window.removeEventListener("resize", this.handleWindowResize);            
        }
        render () {
            return <WrappedComponent screen={this.state} {...this.props}/>
        }
    }

} 

export default WidthScreen