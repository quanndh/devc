let store = null;

export default {
    setStore: newStore => {
        store = newStore;
    },
    createTask: task => {
        store.dispatch({ type: "NEW_TASK", data: task });
    },
    toggleDone: taskId => {
        store.dispatch({ type: "TOGGLE_DONE", data: taskId });
    },
    deleteTask: taskId => {
        store.dispatch({ type: "DELETE_TASK", data: taskId })
    },
    toggleCreateModal: () => {
        store.dispatch({ type: "TOGGLE_CREATE_MODAL" })
    },
}