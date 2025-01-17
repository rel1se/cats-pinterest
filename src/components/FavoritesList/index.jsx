import Cat from "../Cat/index.jsx";
import React from "react";

const FavoritesList = ({favorites, toggleFavorite}) => {
    return (
        <div className="cat-grid">
            {favorites.map((cat) => (
                <Cat
                    key={cat.id}
                    cat={cat}
                    isFavorite={true}
                    toggleFavorite={toggleFavorite}
                />
            ))}
        </div>
    )
}

export default FavoritesList