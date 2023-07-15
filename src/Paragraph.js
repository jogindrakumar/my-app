import React from "react";
 
class Para extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            clicks: 0
        }
    }

    clickMe(){
       this.setState({
        clicks:this.state.clicks + 1
       })
    }
    render(){
        return (
          <div>
              <p onClick={()=>this.clickMe()}> this is item 2 for {this.props.name}</p>
            <span>{this.state.clicks} is the number of clicks</span>
          </div>
        )
    }
}

export default Para;