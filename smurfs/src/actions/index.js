/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
const axios = require("axios");
//GET
export const GETSMURF = "GETSMURF";
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
export const makeSmurfs = () => dispatch => {
  dispatch({ type: GETSMURF });
  axios
    .get("/smurfs")
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
export const addSmurfs = SMURF => dispatch => {
  dispatch({ type: ADDSMURF });
  console.log(SMURF);
  axios
    .post("/smurfs", {
      name: SMURF.name,
      age: SMURF.age,
      height: SMURF.height
    })
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
export const editSmurfs = (SMURF, id) => dispatch => {
  dispatch({ type: EDITSMURF });
  axios
    .put(`/smurfs/${SMURF.id}`, {
      name: SMURF.name,
      age: SMURF.age,
      height: SMURF.height
    })
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
export const removeSmurfs = (id, user) => dispatch => {
  dispatch({ type: REMOVEFETCH });
  axios
    .delete(`/smurfs/${id}`)
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
