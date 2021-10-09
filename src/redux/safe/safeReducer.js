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
                    isSelected:false,
                    secrets:[]
                    }
                ]
            }
            break;
        case actions.SAFE_DELETED:
            return {
                safes:state.safes.filter((safe, index) => safe.safeId !== action.payload)
              }
              break;

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
                break;
        case actions.CREATE_SECRET:
            const updatedSafe = state.safes.map((safe) => {
                        if(safe.safeId === action.payload.safeId){
                            const shallowCopy = Object.assign({}, safe); 
                            shallowCopy.secrets.push(action.payload.secret);
                            return shallowCopy;
                        }else{
                            return safe;
                        }
                });                      
            return{
                ...state,
                safes: updatedSafe
            }
            break;
        default:
            return state;
    }

}