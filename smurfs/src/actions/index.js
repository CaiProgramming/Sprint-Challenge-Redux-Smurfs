/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
const axios = require("axios");
//GET
export const GETSMURF = "FETCHINGSMURF";
export const GETSUCCESS = "GETSUCCESS";
export const GETFAILURE = "GETFAILURE";
//POST
export const ADDSMURF = "ADDSMURF";
export const ADDSUCCESS = "ADDSUCCESS";
export const ADDFAILURE = "ADDFAILURE";
//PUT
export const EDITSMURF = "EDITSMURF";
export const EDITSUCCESS = "EDITSUCCESS";
export const EDITFAILURE = "EDITFAILURE";
//DELETE
export const REMOVEFETCH = "REMOVEFETCH";
export const REMOVESUCCESS = "REMOVESUCCESS";
export const REMOVEFAILURE = "REMOVEFAILURE";

//LOGIN
export const LOGINFETCH = "LOGINFETCH";
export const LOGINSUCCESS = "LOGINSUCCESS";
export const LOGINFAILURE = "LOGINFAILURE";

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
export const makeSmurf = user => dispatch => {
  dispatch({ type: FETCHINGSmurf });
  axios
    .get("/Smurf", {
      headers: {
        authorization: getUser().token
      }
    })
    .then(res => {
      dispatch({ type: GETSUCCESS, payload: res.data });
    })
    .catch(res => {
      dispatch({
        type: GETFAILURE,
        payload: res.data
      });
    });
};
export const addSmurf = FRIEND => dispatch => {
  dispatch({ type: ADDSmurf });
  axios
    .post(
      "/smurf",
      {
        name: FRIEND.name,
        age: FRIEND.age,
        email: FRIEND.email
      },
      {
        headers: {
          authorization: getUser().token
        }
      }
    )
    .then(res => {
      dispatch({ type: ADDSUCCESS, payload: res.data });
    })
    .catch(res => {
      dispatch({
        type: ADDFAILURE,
        payload: res.data
      });
    });
};
export const editSmurf = (FRIEND, id) => dispatch => {
  dispatch({ type: EDITSmurf });
  axios
    .put(
      `/smurf/${FRIEND.id}`,
      {
        name: FRIEND.name,
        age: FRIEND.age,
        email: FRIEND.email
      },
      {
        headers: {
          authorization: getUser().token
        }
      }
    )
    .then(res => {
      dispatch({ type: EDITSUCCESS, payload: res.data });
    })
    .catch(res => {
      dispatch({
        type: EDITFAILURE,
        payload: res.data
      });
    });
};
export const removeSmurf = (id, user) => dispatch => {
  dispatch({ type: REMOVEFETCH });
  axios
    .delete(`/smurf/${id}`, {
      headers: {
        authorization: getUser().token
      }
    })
    .then(res => {
      dispatch({ type: REMOVESUCCESS, payload: res.data });
    })
    .catch(res => {
      dispatch({
        type: REMOVEFAILURE,
        payload: res.data
      });
    });
};
