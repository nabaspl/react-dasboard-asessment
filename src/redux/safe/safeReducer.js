import * as actions from'./actionTypes.js';
let lastSafeId=0;
let lastsecretId =0;
let initialState =  {
    safes:[],
    editSafes:false,
    secrets:[]
};
export default function SafeReducer(state=initialState,action){
    switch(action.type){
        case actions.SAFE_CREATE:
            console.log(action);
            if(action.payload.safeId){
                const afterUpdate = state.safes.map((safe) => {
                    if (safe.safeId === action.payload.safeId) {
                    return {
                        ...safe,
                        ...action.payload,
                    };
                    }else{
                        return safe;
                    }
                });
                return {
                    ...state,
                    safes:afterUpdate
                }
            }
            else
            return{
                ...state,
                safes: [
                    ...state.safes,
                    {
                    safeId:++lastSafeId,
                    safeName:action.payload.safeName,
                    ownerName:action.payload.ownerName,
                    safeType:action.payload.safeType,
                    safeDescription:action.payload.safeDescription,
                    isSelected:false
                    }
                ]
            }
        case actions.SAFE_DELETED:
            return {
                safes:state.safes.filter((safe, index) => index !== action.payload)
              }

        case actions.SAFE_EDIT:
            if(action.payload)
                return {...state,
                    editSafes:true,
                    editSafeData:state.safes.filter((safe, index) => safe.safeId === action.payload)};
            else
                return {...state,
                    editSafes:false,
                    editSafeData:[]
                }
        case action.CREATE_SECRET:
            return{
                ...state,
                secrets: [
                    ...state.secrets,
                    {
                    id:++lastsecretId,
                    safeId:1,
                    secret:"hjkhj"
                    }
                ]
            }
        
        default:
            return state;
    }

}