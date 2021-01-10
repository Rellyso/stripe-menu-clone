import React, { useState, useCallback, useEffect } from 'react'

const Context = React.createContext();


export function DropdownProvider({ children }) {
    const [options, setOptions] = useState([]);
    const [targetId, setTargetId] = useState(null);
    const [cachedId, setCachedId] = useState(null);

    const registerOption = useCallback((({
        id,
        optionDimensions,
        optionCenterX,
        WrappedContent,
        backgroundHeight,
    }) => {
        setOptions(items => [
            ...items,
            {
                id,
                optionDimensions,
                optionCenterX,
                WrappedContent,
                backgroundHeight,
            }
        ])
    }, 
    [setOptions]))

    const updateOptionsProps = useCallback((optionId, props) => {
        setOptions(items => 
            items.map(item => {
                if (item.id === optionId) {
                    item = { ...item, ...props}
                }

                return item
            })       
    )
    }, 
    [setOptions])

    const getOptionsById = useCallback((id) =>
        options.find(item => item.id === id),
        [options]
    )

    const deleteOptionsById = useCallback((id) => {
        setOptions((items) => items.filter((item) => item.id !== id))
    }, [setOptions])

    useEffect(() => {
        if (targetId !== null) setCachedId(targetId)
    }, [targetId])
    
    return (
        <Context.Provider
            value={{

            }}
        >
            { children}
        </Context.Provider>
    )
}