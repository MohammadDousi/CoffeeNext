const getThemeLocalStorage=()=>{
    const theme=localStorage.getItem('themeCoffee')
    return theme
}
const setThemeToLocalStorage =(theme)=>{
    localStorage.setItem('themeCoffee',theme)
}

export { getThemeLocalStorage , setThemeToLocalStorage }