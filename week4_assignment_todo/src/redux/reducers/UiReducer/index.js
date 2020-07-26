const initialState = {
    openCreateModal: false
}

const UiReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE_CREATE_MODAL":
            return { ...state, openCreateModal: !state.openCreateModal }
        default:
            return state
    }
}

export default UiReducer;