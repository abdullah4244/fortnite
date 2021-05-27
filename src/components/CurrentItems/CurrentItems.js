
import React,{useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux';

const CurrentItems = () => {
    const dispatch = useDispatch();



    const handleCurrentItems = async () => {
        let data = await fetchCurrentItems();
        console.log(data);
        dispatch({type:"CITEMS" , payload : data});
    }

    useEffect( () => {

      
        if(store.length === 0) {
        console.log("Entered useEffect");
       handleCurrentItems();
        }
        
        
    }, [handleCurrentItems])
    
    const fetchCurrentItems =async () => {
   const url= "https://fortnite-api.theapinetwork.com/items/list";
   const response = await fetch(url);
   const Jsondata = await response.json();
   const data = Jsondata.data;
   return data.slice(0,10)
   


    }
    const renderingList = (store) => {
        if(store.length === 0 ) {
          return  <h1>Loading</h1>
        }
     let items =   store.map(element=> {
        return <div key={element.itemId} className="card form-group" style={{width:"30%"}}>
            <img className="card-img-top" style={{borderBottom:"1px solid #eee"}} src={element.item.images.background} />
            <div className="card-body">
                <h5 className="card-title">{element.item.name}</h5>
            </div>
            
        </div>            
        }
        )
        return items;
    }
    
  

    const store= useSelector((state) => state.citems);
    return (
        <div className="d-flex justify-content-around flex-wrap mt-5">
           {renderingList(store)}
        </div>
    )
}

export default CurrentItems
