import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import NotFound from '../components/notFound/NotFound';
import Home from '../pages/home/Home';
import Steps from '../pages/steps/Steps';


const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path={"steps"} element={<Steps/>}/>                     
                    </Route>
                    <Route path="*" element={<NotFound />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter;