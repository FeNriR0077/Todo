import { useState } from "react";
import Notes from "./Notes";
import Todo from "./Todo";


const Home = () => {

    const [list, setList] = useState(['Create Mini Project', 'Go Shopping', 'Clear some bills'])
    const [isTrue, setTrue] = useState(true)
    const [inputval, setInputval] = useState('')
    const [notes, setNotes] = useState(['Tailwind makes styling easy', "ES6 concepts make code cleaner"])
    


    const handleAddBtn = () => {
        setTrue(!isTrue)
    }

    const handleAdd = () => {
        if (inputval === '') {

            console.log('add value')
            console.log(list)

        } else {
            console.log(inputval)
            list.push(inputval)

            console.log(list)
            setInputval('')
            
        }
    };


    const handleDelete = (li) => {

        let i = list.indexOf(li)
        let sure = window.confirm('Are you sure?')

        if (sure) {
            let list2 = list.filter( (value, index) => index !== i)
            setList(list2)
            console.log(list)
        }
        
    };

    const handleDeleteNotes = () => {

    }

    


    return (
        <div className='wrapper'>

            {/*------------ Styling using CSS and tailwind both --------------*/}

            <div className="container m-8" >
                <h1 className="heading text-6xl font-bold uppercase text-indigo-600 my-6 ">
                    To Do Lists
                </h1>
                <div className="addedlists pt-5">
                    <div className={`todoinput text-3xl mb-8 ${!isTrue ? "active" : "passive"} `}>
                        <input className="text-2xl" value={inputval} onChange={e => setInputval(e.target.value)} type="text" placeholder="T O D O ' s" />
                        <button className="ml-2 transition ease-in delay-75 text-red-500" type="button" onClick={handleAdd}><i class="fa-solid fa-plus"></i> ADD</button>
                    </div>
                <ul className="orderoflists">
                    
                    {list.map((item,index) => (
                        <Todo list={item} handleDelete={handleDelete} index={index}  />
                    ))}
                    
                </ul>
                </div>

                <div className="addtodo">
                    <button className={`add transition ease-in delay-75 text-2xl border-2 hover:bg-red-400 hover:text-white border-red-400 rounded-lg p-1 text-red-500 font-semibold ${isTrue ? "active" : "passive"} `} type="button" onClick={handleAddBtn}><i class="fa-solid fa-plus"></i> ADD</button>
                    <button className={`done transition ease-in delay-75 text-2xl border-2 hover:bg-green-400 hover:text-white border-green-500 rounded-lg p-1 text-green-500 font-semibold ${!isTrue ? "active" : "passive"} `} type="button" onClick={handleAddBtn}> <i class="fa-solid fa-check"></i> Done </button>
                </div>
            </div>

            
            {/* -------------Styling mostly using tailwind---------------- */}
            <div className="notescontainer">
                <h1 className="notesheading text-center text-5xl font-bold uppercase text-black-400 my-6">Completed Tasks</h1>
                
                <ul className="orderofnotes">
                    {notes.map((note, index) => (
                        <Notes note={note} index={index} handleDeleteNotes={handleDeleteNotes} />
                    ))}
                </ul>
            </div>
            
        </div>

        
    );
}
 
export default Home;