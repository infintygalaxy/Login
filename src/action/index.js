//Actions
export const userAction=(username,password)=>{
    return{
        type:"ADD_USER",
        payload:{username,password},
    }
}