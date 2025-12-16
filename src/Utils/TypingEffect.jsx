import { useEffect, useState } from "react";

const TypingEffect = ({ texts, speed = 100, delay = 1500, className = "" }) => {
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [displayed, setDisplayed] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = texts[textIndex];
        let timeout;

        if (!isDeleting && charIndex < currentText.length) {
            timeout = setTimeout(() => {
                setDisplayed(currentText.slice(0, charIndex + 1));
                setCharIndex((prev) => prev + 1);
            }, speed);
        }

        else if (isDeleting && charIndex > 0) {
            timeout = setTimeout(() => {
                setDisplayed(currentText.slice(0, charIndex - 1));
                setCharIndex((prev) => prev - 1);
            }, speed / 2);
        }

        else if (!isDeleting && charIndex === currentText.length) {
            timeout = setTimeout(() => {
                setIsDeleting(true);
            }, delay);
        }

        else if (isDeleting && charIndex === 0) {
            timeout = setTimeout(() => {
                setIsDeleting(false);
                setTextIndex((prev) => (prev + 1) % texts.length);
            }, 500);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, textIndex, texts, speed, delay]);

    return (
        <h1 className={className}>
            {displayed}
            <span className="cursor">|</span>
        </h1>
    );
};

export default TypingEffect;
