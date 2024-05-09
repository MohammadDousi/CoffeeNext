const getThemeLocalStorage=()=>{
    const theme=localStorage.getItem('themeCoffee')
    return theme
}
const setThemeToLocalStorage =()=>{
    localStorage.setItem('themeCoffee','day')
}

export { getThemeLocalStorage , setThemeToLocalStorage }