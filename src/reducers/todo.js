const initState ={
    todos:[
        {id: 1, name: 'ceate a store', isComplete : false},
        {id: 2, name: 'load state throught the store', isComplete : false},
        {id: 3, name: 'Handle state  changes with redux', isComplete : false}
    ],
    currentTodo : ' '

}


const CURRENT_UPDATE = 'CURRENT_UPDATE';
const TODO_ADD = 'TODO_ADD';


export const updateCurrentTodo = (val) =>( {type: CURRENT_UPDATE, payload: val})

export default (state = initState, action) => {
    switch (action.type) {
        case TODO_ADD:
            
            return{...state, todos : state.todos.concat(action.payload)}
    
            case  CURRENT_UPDATE :
                    return{...state, currentTodo : action.payload}

        default:
            return state;
       
    }
    
}

    
