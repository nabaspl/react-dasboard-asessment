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
export function setActiveSafe(id){
    return{
        type:actions.SET_ACTIVE_SAFE,
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
export function filterSafe(key){
    return{
        type:actions.FILTER_SAFE,
        payload:key
    }
}

export function deleteSecret(data){
    return{
        type:actions.SAFE_DELETED,
        payload:data
    }
}
export function setSafeCount(count){
    return{
        type:actions.SET_SAFECOUNT,
        payload:count
    }
}