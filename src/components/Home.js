import { useState } from "react";
import Todo from "./Todo";


const Home = () => {

    const [list, setList] = useState(['Create Mini Project', 'Go Shopping', 'Clear some bills'])
    const [isTrue, setTrue] = useState(true)
    const [inputval, setInputval] = useState('')
    


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

    


    return (
        <div className='wrapper'>
            <div className="container m-8" >
                <h1 className="heading text-6xl font-bold uppercase text-indigo-600 my-6">
                    To Do Lists
                </h1>
                <div className="addedlists pt-5">
                    <div className={`todoinput text-3xl mb-8 ${!isTrue ? "active" : "passive"} `}>
                        <input value={inputval} onChange={e => setInputval(e.target.value)} type="text" placeholder="T O D O ' s" />
                        <button className="ml-2 text-red-500" type="button" onClick={handleAdd}><i class="fa-solid fa-plus"></i> ADD</button>
                    </div>
                <ul className="orderoflists">
                    
                    {list.map((item,index) => (
                        <Todo list={item} handleDelete={handleDelete} index={index}  />
                    ))}
                    
                </ul>
                </div>

                <div className="addtodo">
                    <button className={`plus border-2 border-red-400 rounded-lg p-1 text-red-500 font-semibold ${isTrue ? "active" : "passive"} `} type="button" onClick={handleAddBtn}><i class="fa-solid fa-plus"></i> ADD</button>
                    <button className={`plus border-2 border-green-500 rounded-lg p-1 text-green-500 font-semibold ${!isTrue ? "active" : "passive"} `} type="button" onClick={handleAddBtn}> <i class="fa-solid fa-check"></i> Done </button>
                </div>
            </div>
            
        </div>
    );
}
 
export default Home;