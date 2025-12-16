import { useEffect, useState } from "react";

const TypingOnce = ({ text, speed = 100, className = "" }) => {
    const [displayed, setDisplayed] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index >= text.length) return;

        const timeout = setTimeout(() => {
            setDisplayed((prev) => prev + text[index]);
            setIndex((prev) => prev + 1);
        }, speed);

        return () => clearTimeout(timeout);
    }, [index, text, speed]);

    return (
        <h1 className={className}>
            {index < text.length && <span className="cursor">|</span>}
            {displayed}
        </h1>
    );
};

export default TypingOnce;
