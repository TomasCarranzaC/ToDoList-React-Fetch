import React, {useEffect, useState} from 'react';


export const Lista = () => {
    const [input, setInput] = useState("");
    const [item, setItem] = useState([]);
    const [styles, setStyles] = useState('hidden');
   
 useEffect(() =>
    fetch('https://assets.breatheco.de/apis/fake/todos/user/tomicarra')
        .then(e => e.json())
        .then((data) => setItem(data.map(d => d.label)))
 ,[])   

 useEffect(() =>
 fetch('https://assets.breatheco.de/apis/fake/todos/user/tomicarra', {
    method: "PUT",
    body: JSON.stringify(item.map(it => ({ label: it, done: false }))),
    headers: {
      "Content-Type": "application/json"
    }
  }, [item]))
    
    const manager = (e) => {
        setInput(e.target.value)
        if(e.code === "Enter"){
            setItem(item.concat(input))
        }
        
    }
    const deleting = (index) => {
        const newArr = [...item]
        newArr.splice(index,1)
        setItem(newArr)   
    }
    
    return (
        
        <div className="container  border border-info rounded-2 w-50 shadow mt-5 p-3">
        Let's add some tasks: <input className="border border-info" type="text" onKeyUp={manager} placeholder="What's left to do?" />
        <ul style={{ listStyle: "none" }}>
            {item.map((u,index)=>{
                return <li className="border border-info rounded  mt-2 d-flex justify-content-between p-1" key={index} id={item.id} onMouseEnter={()=>{setStyles(index)}} onMouseLeave={() => setStyles("none")}>
                            {u}
                            <span className={"hidden"} onClick={() => deleting(index)}>
                                <i className="fa fa-trash m-2" style={{visibility: styles == index ? "" : "hidden"}}></i>
                            </span>
                        </li>
            })}
        </ul> 
        <p>{item.length == 0 ? "No tasks left" : item.length == 1 ? "Only one more to go" : item.length + " things left to do"}</p>
        </div>
    )
}


export default Lista;