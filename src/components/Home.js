import { useState } from "react";
import Todo from "./Todo";


const Home = () => {

    const [list, setList] = useState(['Create Mini Project', 'Hello2', 'Hello3'])
    const [isTrue, setTrue] = useState(true)
    const [isTrue2, setTrue2] = useState(true)
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

        let list2 = list.filter( (value, index) => index !== i)
        setList(list2)
        console.log(list2)
        console.log(list)
        
    };

    const handleChange = (li) => {

        setTrue2(!isTrue2)
        
    };


    return (
        <div className='wrapper'>
            <div className="container">
                <h1 className="heading">
                    To Do Lists
                </h1>
                <div className="addedlists">
                    <div className={`todoinput ${!isTrue ? "active" : "passive"} `}>
                        <input value={inputval} onChange={e => setInputval(e.target.value)} type="text" placeholder="T O D O ' s" />
                        <button type="button" onClick={handleAdd}>+ ADD</button>
                    </div>

                <Todo list={list} handleDelete={handleDelete} handleChange={handleChange} isTrue2={isTrue2} />

                </div>

                <div className="addtodo">
                    <button className={`plus ${isTrue ? "active" : "passive"} `} type="button" onClick={handleAddBtn}>+ ADD TODO'S</button>
                    <button className={`plus ${!isTrue ? "active" : "passive"} `} type="button" onClick={handleAddBtn}>- Close TODO's</button>
                </div>
            </div>
            
        </div>
    );
}
 
export default Home;