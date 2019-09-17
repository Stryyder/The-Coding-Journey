/* 
This file makes the say-what-now folder because I'm not 100% on how all these values are getting passed around. I think I need a more thorough explanation on just exactly how these values are being tossed about.
*/

// define ADD, addMessage(), messageReducer(), and store here:
const ADD = 'ADD';

function addMessage(msg) {
    return {
        type: ADD,
        message: msg
    }
}

function messageReducer(state = [], action){
    switch (action.type){
        case ADD:
            return [...state, action.message]
        break;

        default:
        return state;
    }
}

const store = Redux.createStore(messageReducer);
