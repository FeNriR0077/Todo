import { useState } from "react"


const Todo = ({list, handleDelete, index}) => {

    let date= new Date()
    let datestring = date.toString()
    const [isTrue2, setTrue2] = useState(false)
    
    const handleChange = () => {
        setTrue2(!isTrue2)
    };

    return (
        <>
            <div className="todolists">

                <li className="individualitem" >
                    <div className="todoinfo">
                        <span>{index+1} </span>
                        <input type='checkbox' value={isTrue2} onChange={handleChange}></input>  <span className="listitem">{list} </span> <i onClick={() => {handleDelete(list)}} className="fa-solid fa-trash"></i>
                    </div>

                    <p  className={`todocompletion ${isTrue2 ? "active" : "passive"}`}>(Completed at {datestring})</p>
                </li>
            </div>
        </>
    );
}
 
export default Todo;