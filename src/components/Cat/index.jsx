import React from "react";
import "./Cat.scss";
import favoriteBorder from "/favorite_border.svg";
import favorite from "/favorite.svg";

const Cat = ({ cat, isFavorite, toggleFavorite }) => {
    return (
        <div className="cat-item">
            <img src={cat.url} alt="Cat" className="cat-grid__image" />
            <button
                className={`favorite-heart ${isFavorite ? "filled" : ""}`}
                onClick={() => toggleFavorite(cat)}
                aria-label="Add to favorites"
            >
                <img
                    src={isFavorite ? favorite : favoriteBorder}
                    alt={isFavorite ? "Remove from favorites" : "Add to favorites"}
                />
            </button>
        </div>
    );
};

export default Cat;
