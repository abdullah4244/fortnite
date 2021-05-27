import React,{useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux';

const UpcomingItems = () => {

    const dispatch = useDispatch();



    const handleUpcomingItems = async () => {
        let data = await fetchUpcomingItems();
        console.log(data);
        dispatch({type:"UITEMS" , payload : data});
    }

    useEffect( () => {

      
        if(store.length === 0) {
        console.log("Entered useEffect");
       handleUpcomingItems();
        }
        
        
    }, [handleUpcomingItems])
    
    const fetchUpcomingItems =async () => {
   const url= "https://fortnite-api.theapinetwork.com/upcoming/get";
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
    
  //  const store= useSelector((state) => state[0]?.itemId);
    //console.log(store +"store value rendered");

    const store= useSelector((state) => state.uitems);
    return (
        <div className="d-flex justify-content-around flex-wrap mt-5">
           {renderingList(store)}
        </div>
    )
}

export default UpcomingItems
