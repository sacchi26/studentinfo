import React from 'react'
import "./Heading.css"

const Heading = () => {
  return (
    <>
    <h1>Student Info</h1>

    <div className="heading">
        <h1>Add Students </h1>
    </div>
    
    <div className="form">
        <form>
            <label>
                Name :
                <input type="name" />
            </label>
        </form>

        <form>
            <label>
                Batch :
                <input type="batch" />
            </label>
        </form>

        <form>
            <label>
                Course :
                <input type="course" />
            </label>
        </form>

        <form>
            <label>
                Image :
                <input  type="pic" />
            </label>
        </form>

        <form>
            <label>
                Rating :
                <input type="rate" />
            </label>
        </form>

        <form>
            <label>
                Current Status :
                active
            </label>
        </form>
    </div>

    <button className='button'>
        submit
    </button>

    </>

    
  )
}

export default Heading