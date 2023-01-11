


const Notes = ({note, index, handleDeleteNotes}) => {
    return ( 
        <>
            <li className="flex justify-between text-xl m-6">
                {/* <h1>{index+1}</h1> */}
                <span contentEditable className="noteitem ">{note}</span>
                <i onClick={() => {handleDeleteNotes(index)}} className="fa-solid fa-trash"></i>
            </li>
        </>
    );
}
 
export default Notes;