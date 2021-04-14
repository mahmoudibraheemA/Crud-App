import React, {Component} from 'react';
import Courselist from './component/courselist/courselist';
import Courseform from './component/formlist/courseform'

class App extends Component {

  state = {
    courses : [
      {name : 'HTML'},
      {name : 'Css'},
      {name : 'React'}
    ],
    current : ''
  }

  updatecourse = (e) =>{
    this.setState({
      current : e.target.value
    })
  }

  addcourse = (e) =>{
    e.preventDefault()
    if (this.state.current === ''){
        return false
    }
    else{
      let loccurrent = this.state.current
      let loccourses = this.state.courses
      loccourses.push({name : loccurrent})
      this.setState({
        courses : loccourses,
        current : ''
      })
    }
  }

  deletecourse = (index) =>{
    let loccourses = this.state.courses
    loccourses.splice(index, 1)
    this.setState({
      courses : loccourses
    })
  }

  editcourse = (index, value) =>{
    let loccourses = this.state.courses
    let course = loccourses[index]
    course ["name"] = value
    this.setState({
      courses : loccourses
    })
  }

  render(){
    const {courses} = this.state
    const length = courses.length
    const courselist = length ? (
      courses.map((course, index) => {
        return(
          <Courselist details={course} key={index} delete={this.deletecourse} index={index} edit={this.editcourse}/>
        )
      })
    ) : (
      <p>No Courses to Show</p>
    )
    return(
      <section className="App">
        <h2>Add Course</h2>
        <Courseform current={this.state.current} updatecourse={this.updatecourse} addcourse={this.addcourse}/>
        <ul>
          {courselist}
        </ul>
      </section>
    )
  }
}

export default App;
