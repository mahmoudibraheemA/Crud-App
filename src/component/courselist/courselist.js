import React, {Component} from 'react';

class Courselist extends Component {


    state = {
        isedit : false
    }
    // render course item
    rendercourse = () =>{
        return(
            <li>
                <span>{this.props.details.name}</span>
                <button onClick={() => this.togglestate()}>Edit Course</button>
                <button onClick={() => {this.props.delete(this.props.index)}}>Delete</button>
            </li>
        )
    }


    // changing isedit value when edit course clicked
    togglestate = () =>{
        let {isedit} =this.state
        this.setState({
            isedit : !isedit
        })
    }
    
    updatecourseitem =(e) =>{
        e.preventDefault()
        this.props.edit(this.props.index, this.input.value)
        this.togglestate()
    }
    
    // render update form
    renderupdateform =() =>{
        return(
            <form onSubmit={this.updatecourseitem}>
                <input type="text" ref={(v)=>{this.input = v}} defaultValue={this.props.details.name}/>
                <button>Edit Course</button>
            </form>
        )
    }

  render(){
    let {isedit} = this.state
    return(
      <React.Fragment>
        {isedit ?  this.renderupdateform() : this.rendercourse()}
      </React.Fragment>
    )
  }
}

export default Courselist;
