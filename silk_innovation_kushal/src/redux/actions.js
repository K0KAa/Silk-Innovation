import { ADD_USER, FETCH_USER,  } from "./Types"

export const addUsers =postData => dispatch =>{
    console.log(postData)
    fetch("https://stagingapi.icash.com.np/api/login", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'content-type': 'application/json',
            'App-Authorizer': 647061697361
        },
        body: JSON.stringify(postData)
    })
    .then(res=>{
        if(res !== null){
             res.json()
        }
        else {
            throw new Error("Something went wrong")
        }
    })
    .then(data  => dispatch({type: ADD_USER, payload: data})) 
    .catch(error=>console.log(error))
    
}

export const fetchUsers =() =>dispatch =>{
    fetch("https://stagingapi.icash.com.np/api/login")
            .then(res => res.json())
            .then(users => {dispatch({type: FETCH_USER, payload: users})
                        console.log(users)
                })
            //
}