function Self_useState(initialValue) {
    let state ={value:initialValue};
  
    const getState = () => state.value;
  
    const setState = (newValue) => {
      state.value = newValue; 
      console.log("State updated to:", state);
    };
  
    return [getState, setState];
  }
  
  export default Self_useState;
  