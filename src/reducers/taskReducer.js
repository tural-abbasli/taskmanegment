let id=0;
export const taskReducer = (state=[],action) =>{
    switch (action.type) {
        case 'PUSH_TASK':
            action.payload.id=++id;
            return [action.payload,...state];
        case 'TOGGLE_TASK':
            return state.map(task =>{
                if(task.id === action.payload){
                    task.checked=!task.checked;
                }
                return task;
            })
        default:
            return state;
    }
}