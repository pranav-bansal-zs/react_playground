
function Self_useState(initialValue) {
  let state = { value: initialValue };

  const setState = (newValue) => {
    state.value = newValue;
    console.log("State updated to:", state.value);
  };

  return [state.value, setState];
}

export default Self_useState;
