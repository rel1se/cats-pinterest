import React, { createContext, useState, useContext } from 'react';

const FavoriteContext = createContext([]);

export const useFavorites = () => {
    return useContext(FavoriteContext);
};

export const FavoriteProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
        return storedFavorites || [];
    });

    const toggleFavorite = (cat) => {
        setFavorites((prevFavorites) => {
            const isFavorite = prevFavorites.some((favorite) => favorite.id === cat.id);
            let newFavorites;
            if (isFavorite) {
                newFavorites = prevFavorites.filter((favorite) => favorite.id !== cat.id);
            } else {
                newFavorites = [...prevFavorites, cat];
            }

            localStorage.setItem('favorites', JSON.stringify(newFavorites));
            return newFavorites;
        });
    };

    return (
        <FavoriteContext.Provider value={{ favorites, toggleFavorite }}>
            {children}
        </FavoriteContext.Provider>
    );
};
