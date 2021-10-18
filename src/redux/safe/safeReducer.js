import * as actions from "./actionTypes.js";
let lastSafeId = 0;
let lastsecretId = 0;
let initialState = {
  safes: [],
  editSafes: false,
  activeSafe: false,
  filter: "",
  safeCount:0
};
export default function SafeReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SAFE_CREATE:
      if (action.payload.safeId) {
        const afterUpdate = state.safes.map((safe) => {
          if (safe.safeId === action.payload.safeId) {
            return {
              ...safe,
              ...action.payload,
            };
          } else {
            return safe;
          }
        });
        return {
          ...state,
          safes: afterUpdate,
        };
      } else
        return {
          ...state,
          safes: [
            ...state.safes,
            {
              safeId: ++lastSafeId,
              safeName: action.payload.safeName,
              ownerName: action.payload.ownerName,
              safeType: action.payload.safeType,
              safeDescription: action.payload.safeDescription,
              isSelected: false,
              secrets: [],
            },
          ],
        };
      break;
    case actions.SAFE_DELETED:
      return {
        safes: state.safes.filter(
          (safe, index) => safe.safeId !== action.payload
        ),
      };

      break;

    case actions.SAFE_EDIT:
      if (action.payload)
        return {
          ...state,
          editSafes: action.payload,
          editSafeData: state.safes.filter(
            (safe, index) => safe.safeId === action.payload
          ),
        };
      else return { ...state, editSafes: false, editSafeData: [] };
      break;
    case actions.CREATE_SECRET:
      const updatedSafe = state.safes.map((safe) => {
        if (safe.safeId === action.payload.safeId) {
          const shallowCopy = Object.assign({}, safe);
          shallowCopy.secrets.push(action.payload.secret);
          return shallowCopy;
        } else {
          return safe;
        }
      });
      return {
        ...state,
        safes: updatedSafe,
      };
      break;
    case actions.SET_ACTIVE_SAFE:
      return {
        ...state,
        activeSafe: action.payload,
      };
      break;
    case actions.FILTER_SAFE:
      return {
        ...state,
        filter: action.payload,
      };
      break;
    case actions.DELETE_SECRET:
        const updatedSafed = state.safes.map((safe) => {
            if (safe.safeId === action.payload.safeId) {
              const shallowCopy = Object.assign({}, safe);
              shallowCopy.secrets.splice(action.payload.index, 1);
              return shallowCopy;
            } else {
              return safe;
            }
          });
          return {
            ...state,
            safes: updatedSafed,
          };
      break;
    case actions.SET_SAFECOUNT:
      return{
        ...state,
        safeCount:action.payload
      }

    default:
      return state;
  }
}
