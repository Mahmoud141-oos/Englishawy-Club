import { useState } from "react";
import data from "./WordsData";

const VocabularyPro = () => {
    const [tab, setTab] = useState("vocabulary");
    const [search, setSearch] = useState("");
    const [flipped, setFlipped] = useState(null);

    const speak = (word) => {
        const u = new SpeechSynthesisUtterance(word);
        u.lang = "en-US";
        speechSynthesis.speak(u);
    };

    const highlight = (text) => {
        if (!search) return text;
        const regex = new RegExp(`(${search})`, "gi");
        return text.split(regex).map((part, i) =>
            part.toLowerCase() === search.toLowerCase() ? (
                <span key={i} className="bg-yellow-300 text-black px-1 rounded">
                    {part}
                </span>
            ) : (
                part
            )
        );
    };

    const words = data[tab]
        .filter(
            (w) =>
                w.word.toLowerCase().includes(search.toLowerCase()) ||
                w.meaningAr.includes(search)
        )
        .sort((a, b) => a.word.localeCompare(b.word));

    return (
        <div className="min-h-screen bg-black text-white px-6 py-10">
            <h1 className="text-4xl font-bold text-center mb-8">
                Vocabulary
            </h1>

            {/* Tabs */}
            <div className="flex justify-center gap-4 mb-6">
                {["vocabulary", "expressions", "important"].map((t) => (
                    <button
                        key={t}
                        onClick={() => {
                            setTab(t);
                            setFlipped(null);
                        }}
                        className={`px-4 py-2 rounded-full border
              ${tab === t
                                ? "bg-[#36d7b7] text-black"
                                : "border-[#36d7b7]"
                            }`}
                    >
                        {t}
                    </button>
                ))}
            </div>

            {/* Search */}
            <div className="max-w-md mx-auto mb-8">
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search..."
                    className="
            w-full px-4 py-3 rounded-xl
            bg-[#020617] border border-[#36d7b7]
            outline-none
          "
                />
            </div>

            {/* Cards */}
            <div className="flex flex-wrap justify-center gap-6">
                {words.map((item, i) => (
                    <div
                        key={i}
                        className="perspective cursor-pointer"
                        onClick={() => setFlipped(flipped === i ? null : i)}
                    >
                        <div
                            className={`
                relative transition-transform duration-700
                transform-style-preserve-3d
                ${flipped === i ? "rotate-y-180" : ""}
              `}
                        >
                            {/* Front */}
                            <div className="
                bg-[#0f172a] border border-[#36d7b7]
                rounded-xl px-6 py-4
                backface-hidden flex items-center gap-3
              ">
                                <span className="text-xl font-bold">
                                    {highlight(item.word)}
                                </span>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        speak(item.word);
                                    }}
                                >
                                    🔊
                                </button>
                            </div>

                            {/* Back */}
                            <div className="
                absolute inset-0
                bg-[#020617] border border-[#36d7b7]
                rounded-xl px-6 py-4
                backface-hidden rotate-y-180
                flex items-center justify-center text-center
              ">
                                <p dir="rtl" className="text-gray-200">
                                    {highlight(item.meaningAr)}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VocabularyPro;
