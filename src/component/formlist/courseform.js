import React from 'react'

const Courseform = (props) => {
    return (
        <form onSubmit={props.addcourse}>
            <input type="text" value={props.current} onChange={props.updatecourse}/>
            <button type="submit">Add Course</button>
        </form>
    )
}

export default Courseform 