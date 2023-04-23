import AppContext from "./AppContext";
const AppState = (props) => {
    const text1 = "Every new friend is a new adventure"
    const text2 = "Let's get connected"
  return(
  <AppContext.Provider value={{text1,text2}}>
    {props.children}
    </AppContext.Provider>)
};

export default AppState;
