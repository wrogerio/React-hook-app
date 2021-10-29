import React, { useEffect, useState } from "react";

export const Mensagem = () => {
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const { x, y } = coords;

    const mouseMove = (e) => {
        const coordenadas = { x: e.x, y: e.y };
        setCoords(coordenadas);
    };

    useEffect(() => {
        window.addEventListener("mousemove", mouseMove);
        return () => {
            console.log("desmontado");
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    return (
        <div>
            <h1>Mensagem</h1>
            <h3 className="text-danger">
                Latitude: {x} | Longitude: {y}
            </h3>
        </div>
    );
};
