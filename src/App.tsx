import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";

import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";

import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

import './styles/index.scss';


const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {hovered: true, asd: true}, [theme])}>
            <button onClick={toggleTheme}>Change theme</button>
            <Link to={'/main'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync />} />
                    <Route path={'/main'} element={<MainPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
