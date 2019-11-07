

import React, { createContext, useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const DEFAULT_SCREEN_SIZES = {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
}

const SCREEN_SIZES = {
    xs: 0,
    sm: 1,
    md: 2,
    lg: 3,
    xl: 4,
}

const getScreenSize = (screenSizes) => {
    const width = window.innerWidth || 0;
    if (width < screenSizes.sm) return SCREEN_SIZES.xs;
    if (width >= screenSizes.sm && width < screenSizes.md) return SCREEN_SIZES.sm;
    if (width >= screenSizes.md && width < screenSizes.lg) return SCREEN_SIZES.md;
    if (width >= screenSizes.lg && width < screenSizes.xl) return SCREEN_SIZES.lg;
    if (width >= screenSizes.xl) return SCREEN_SIZES.xl;
}

const Context = createContext({screenSizes: DEFAULT_SCREEN_SIZES, screenSize: getScreenSize(DEFAULT_SCREEN_SIZES)});
const ContextProvider = Context.Provider;
export const Consumer = Context.Consumer;

export const Provider = (props) => {
    const { children } = props;
    const [ screenSizes, setScreenSizes ] = useState({...DEFAULT_SCREEN_SIZES, ...props.screenSizes});
    const [ screenSize, setScreenSize ] = useState(getScreenSize(screenSizes));
    const updateScreenSizes = (newScreenSizes) => setScreenSizes({...screenSizes, ...newScreenSizes});
    const onResize = useCallback(() => setScreenSize(getScreenSize(screenSizes)), []);

    useEffect(() => {
        setScreenSize(getScreenSize(screenSizes));
        window.removeEventListener && window.removeEventListener('resize', onResize);
        window.addEventListener && window.addEventListener('resize', onResize);
        return () => window.removeEventListener && window.removeEventListener('resize', onResize)
    }, [screenSizes]);

    return (
        <ContextProvider value={{ screenSizes, updateScreenSizes, screenSize }}>
            {children}
        </ContextProvider>
    )
}

Provider.propTypes = {
    children: PropTypes.node.isRequired,
    screenSizes: PropTypes.shape({
        xs: PropTypes.number,
        sm: PropTypes.number,
        md: PropTypes.number,
        lg: PropTypes.number,
        xl: PropTypes.number,
    })
}