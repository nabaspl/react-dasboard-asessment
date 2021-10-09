import * as actions from'./actionTypes.js';

export function safeCreate(inputs){
    return{
        type:actions.SAFE_CREATE,
        payload:inputs
    }
}
export function safeDeleted(id){
    return{
        type:actions.SAFE_DELETED,
        payload:id
    }
}

export function safeEdit(index){
    return{
        type:actions.SAFE_EDIT,
        payload:index
    }
}

export function createSecret(data){
    return{
        type:actions.CREATE_SECRET,
        payload:data
    }
}