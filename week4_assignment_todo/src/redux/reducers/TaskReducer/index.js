import data from '../../../data';
const initialState = {
    tasks: data
}

const TaskReducer = (state = initialState, action) => {
    let temp = [...state.tasks]
    switch (action.type) {
        case "NEW_TASK":
            temp = [action.data, ...temp]
            return { ...state, tasks: temp }
        case "TOGGLE_DONE":
            let toggleIndex = temp.findIndex(item => item.id === action.data)
            temp[toggleIndex].isDone = !temp[toggleIndex].isDone;
            return { ...state, tasks: temp }
        case "DELETE_TASK":
            let deleteIndex = temp.findIndex(item => item.id === action.data)
            temp = [...temp.slice(0, deleteIndex), ...temp.slice(deleteIndex + 1)]
            return { ...state, tasks: temp }
        default:
            return state;
    }
}

export default TaskReducer;