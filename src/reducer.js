import createReducer from 'redux-updeep';
 
const initialState = {
};
 
export default (state = initialState, action) => {
   return {
       global: createReducer('GLOBAL', initialState)
   }
}