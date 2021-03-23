import React from "react"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationsView"
import "./ComponentLibrary.css"
import {ThemeProvider} from "styled-components";
import  {useDarkMode} from "./LilGagets/DarkModeToggle/useDarkMode"
import { GlobalStyles } from "./LilGagets/DarkModeToggle/Globalstyle";
import { lightTheme, darkTheme } from "./LilGagets/DarkModeToggle/Themes"
import Toggle from "./LilGagets/DarkModeToggle/Toggler"

export const ComponentLibrary = () => {


    const [theme, themeToggler, ] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;


    return (

        <ThemeProvider theme={themeMode}>
            <>
                <GlobalStyles />
                <Toggle theme={theme} toggleTheme={themeToggler} />
                <NavBar />
                <ApplicationViews />
            </>
        </ThemeProvider>
    )
}