// Action type
const ADD_USER='ADD_USER';

// Initial state
const initialState={
    user:[],
};
// Reducer function for adding a user
const addUser=(state=initialState,action)=>{
    switch (action.type) {
        case ADD_USER:
            return{
                ...state,
                user:[...state.user,{username:action.payload.username,
                                    password:action.payload.password}]
            }
        default:
          return state;
    }
}
export default addUser;