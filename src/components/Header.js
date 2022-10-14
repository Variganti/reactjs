//Container =SCC

import React from "react";

class Header extends React.Component{
    constructor(props) {
        super(props)
        this.state={userName: 'krishna'}
    }

    render(){
        return(
            <div>
                <h1 className="bg-warning text-danger text-center">
                    React Casestudy for {this.props.company}
                </h1>
                <h4 className="text-center"> by {this.state.userName} </h4>
            </div>
        )
    }
}

Header.defaultProps={
    company : 'Krish Tech',
    city:'Hyd'
}
export default Header