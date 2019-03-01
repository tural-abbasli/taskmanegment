export const pushTask = (task)  => {
    return{
        type:'PUSH_TASK',
        payload:task
    }
}

export const toggleTask = (id) =>{
    return{
        type:'TOGGLE_TASK',
        payload:id
    }
}