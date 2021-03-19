import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { Thermometer } from "./LilGagets/Thermometer/thermometer"
import { Calculator } from "./LilGagets/Calculator/calculator"
import { NumberProvider } from './LilGagets/Calculator/NumberProvider';
import { ShoppingList } from "./LilGagets/ShoppingList/shoppinglist";
import { Quizzer } from "./LilGagets/Quizzer/quizzer";

export const ApplicationViews = () => {
    return (
        <>
           
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/thermometer">
                <Thermometer />
            </Route>
            <Route path="/calculator">
                <NumberProvider>
                <Calculator />
                </NumberProvider>
            </Route>
            <Route path="/shoppingList">
                <ShoppingList />
            </Route>
            <Route path="/quizzer">
                <Quizzer />
            </Route>
        </>
    )
}