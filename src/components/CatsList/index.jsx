import React, { useState, useEffect } from "react";
import { fetchCats } from "../../api/service";
import { useFavorites } from "../../context/FavoriteContext";
import Cat from "../Cat";
import "./CatsList.scss";

const CatsList = () => {
    const { favorites, toggleFavorite } = useFavorites();
    const [cats, setCats] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getCats = async () => {
            setIsLoading(true);
            const data = await fetchCats(15);
            setCats(data);
            setIsLoading(false);
        };
        getCats();
    }, []);

    const isFavorite = (cat) => favorites.some((favorite) => favorite.id === cat.id);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="cat-grid">
            {cats.map((cat) => (
                <Cat
                    key={cat.id}
                    cat={cat}
                    isFavorite={isFavorite(cat)}
                    toggleFavorite={toggleFavorite}
                />
            ))}
        </div>
    );
};

export default CatsList;
