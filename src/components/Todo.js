
const Todo = ({list, handleDelete, handleChange, isTrue2}) => {

    let date= new Date()
    let datestring = date.toString()
    

    return (
        <>
            <div className="todolists">
                
                {list.map((li,index) => (
                    <p className="individualitem" key={index}>
                        <div className="todoinfo">
                            <span>{index+1} </span>
                            <input type='checkbox' onChange={() => {handleChange(li)}}></input> {li} <i onClick={() => {handleDelete(li)}} class="fa-solid fa-trash"></i>
                        </div>

                        <p  className={`todocompletion ${!isTrue2 ? "active" : "passive"}`}>Completed at {datestring}</p>
                    </p>

                    
                ))}
            </div>
        </>
    );
}
 
export default Todo;