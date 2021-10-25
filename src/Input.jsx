import React,{useState} from 'react';

const Input = () => {
    let [data, setdata] = useState({name:"",email:"",pwd:""});
    function show(event)
    {
        let d={...data,[event.target.name]:event.target.value};
// write to way ========================
            // let d={...data};
            // d[event.target.name]=event.target.value;
            // =================================================
                setdata(d); 
        // if(event.target.name==="name"){
        // setdata({...data,name:event.target.value}); 
        // }
        // else  if(event.target.name==="email"){
        //     setdata({...data,email:event.target.value});  
        //     }
        //     else  if(event.target.name==="pwd"){
        //         setdata({...data,pwd:event.target.value}); 
        //         }
    }
function submit(event){

    event.preventDefault();
    console.log(data);
    setdata({name:"",email:"",pwd:""});
}

    return (
        <>
       
        <h1>{data.name} {data.email} {data.pwd}</h1>
        <form onSubmit={submit}>
      NAME : <input type="text" name="name" value={data.name} onChange={show}  />
      <br/>
      EMAIL : <input type="text" name="email" value={data.email} onChange={show}  />
       <br/> PASSWORD : <input type="password" name="pwd" value={data.pwd} onChange={show}  /><br />
       <button> Submit</button>
       </form>
        </>
    )
}

export default Input
