import React from "react";
import {useFavorites} from "../../context/FavoriteContext";
import "./FavoritePage.scss";
import FavoritesList from "../../components/FavoritesList";

const FavoritePage = () => {
    const {favorites, toggleFavorite} = useFavorites();

    return (
        <div className="container">
            <FavoritesList favorites={favorites} toggleFavorite={toggleFavorite}/>
        </div>
    );
};

export default FavoritePage;
