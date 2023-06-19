import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import NotFound from '../components/notFound/NotFound';
import Home from '../pages/home/Home';
import Steps from '../pages/steps/Steps';
import GlobalStyles from '../components/styles/GlobalStyle';
import RestaurantsDetails from '../pages/restaurantsDetails/RestaurantsDetails';
import FoodPlate from '../pages/foodPlate/FoodPlate';


const AppRouter = () => {
    return (
        <>
       
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path={"steps"} element={<Steps/>}/>
                        <Route path={"details"} element={<RestaurantsDetails/>}/>  
                        <Route path={"foodplate"} element={<FoodPlate />}/>                    
                    </Route>
                    <Route path="*" element={<NotFound />}/>
                </Routes>
            </BrowserRouter>
            <GlobalStyles />
         
        </>
    )
}

export default AppRouter;