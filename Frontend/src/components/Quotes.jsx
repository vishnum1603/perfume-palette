import React from "react";

const Quotes = () => {
    const quotes = [
        "Crafting scents, painting memories. Welcome to PerfumePalette, where your fragrance story begins.",
        "In every bottle, a unique tale. PerfumePalette: Where creativity meets fragrance.",
        "Your essence, your story. PerfumePalette, where dreams have a scent.",
        "Embrace the art of fragrance. At PerfumePalette, every scent is a masterpiece.",
        "Where imagination meets aroma, PerfumePalette is your canvas of scent.",
        "From your imagination to our palette, together we create magic.",
        "A symphony of notes, a masterpiece of you. PerfumePalette, where fragrances come alive.",
        "Crafting bespoke scents, one dream at a time. Welcome to PerfumePalette.",
        "Unleash your inner perfumer. PerfumePalette: Your journey into bespoke fragrance.",
        "Every drop tells a story. At PerfumePalette, your story is our inspiration."
    ];

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    return (
        <div style={{ textAlign: "center", marginTop: "50vh", transform: "translateY(-50%)"}}>
            <blockquote>
                <p>{randomQuote}</p>
            </blockquote>
        </div>
    )
}

export default Quotes;
