/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  GETSMURF,
  GETSUCCESS,
  GETFAILURE,
  ADDSMURF,
  ADDSUCCESS,
  ADDFAILURE,
  EDITSMURF,
  EDITSUCCESS,
  EDITFAILURE,
  REMOVEFETCH,
  REMOVESUCCESS,
  REMOVEFAILURE
} from "../actions";

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const initialState = {
  SMURF: [],
  isloadingGET: false,
  successGET: false,
  isloadingPOST: false,
  successPOST: false,
  isloadingPUT: false,
  successPUT: false,
  isloadingDELETE: false,
  successDELTE: false,
  isloadingLOGIN: false,
  successLOGIN: false
};
export default (state = initialState, action) => {
  switch (action.type) {
    //GET
    case GETSMURF:
      return {
        ...state,
        SMURF: [],
        isloadingGET: true
      };
    case GETSUCCESS:
      return {
        ...state,
        SMURF: action.payload,
        isloadingGET: false,
        successGET: true
      };
    case GETFAILURE:
      return {
        ...state,
        SMURF: [],
        isloadingGET: false,
        successGET: false
      };
    //POST
    case ADDSMURF:
      return {
        ...state,
        isloadingPOST: false,
        successPOST: true
      };
    case ADDSUCCESS:
      return {
        ...state,
        SMURF: [...state.SMURF, action.payload],
        isloadingPOST: false,
        successPOST: true
      };
    case ADDFAILURE:
      return {
        ...state,
        isloadingPOST: false,
        successPOST: false
      };
    //PUT
    case EDITSMURF:
      return {
        ...state,
        isloadingPUT: true,
        successPUT: false
      };

    case EDITSUCCESS:
      return {
        ...state,
        SMURF: state.SMURF.map(smurf => {
          if (smurf.id !== action.payload) {
            return smurf;
          }
        }),
        isloadingPUT: false,
        successPUT: true
      };
    case EDITFAILURE:
      return {
        ...state,
        isloadingPUT: false,
        successPUT: false
      };
    //DELETE
    case REMOVEFETCH:
      return {
        ...state,
        isloadingDELETE: true,
        successDELETE: false
      };
    case REMOVESUCCESS:
      return {
        ...state,
        SMURF: state.SMURF.map(smurf => {
          if (smurf.id !== action.payload) {
            return smurf;
          }
        }),
        isloadingDELETE: false,
        successDELETE: true
      };
    case REMOVEFAILURE:
      return {
        ...state,
        isloadingDELETE: false,
        successDELETE: false
      };

    default:
      return state;
  }
};
