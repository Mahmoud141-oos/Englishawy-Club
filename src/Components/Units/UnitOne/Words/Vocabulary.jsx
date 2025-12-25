import { useState } from "react";
import data from "./WordsData";
import { Link } from "react-router-dom";

const VocabularyPro = () => {
    const [tab, setTab] = useState("vocabulary");
    const [search, setSearch] = useState("");
    const [flipped, setFlipped] = useState(null);
    const tabs = Object.keys(data);

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
        <div className="min-h-screen w-full bg-black text-white overflow-x-hidden">
            {/* MAIN CONTAINER */}
            <div className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 py-10">

                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
                        Vocabulary <Link to="/UnitOne" className="text-[#36d7b7]">Unit One</Link>
                    </h1>

                    {/* Tabs */}
                    <div
                        className="
              flex gap-3 mt-5
              overflow-x-auto whitespace-nowrap
              scrollbar-hide
              justify-center
              px-2
            "
                    >
                        {tabs.map((t) => (
                            <button
                                key={t}
                                onClick={() => {
                                    setTab(t);
                                    setFlipped(null);
                                }}
                                className={`
                  flex shrink-0
                  px-5 py-2
                  rounded-full border
                  text-sm
                  transition
                  ${tab === t
                                        ? "bg-[#36d7b7] text-black"
                                        : "border-[#36d7b7]"
                                    }
                `}
                            >
                                {t}
                            </button>
                        ))}
                    </div>

                    {/* Search */}
                    <div className="mt-6 max-w-xl mx-auto">
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search..."
                            className="
                w-full px-5 py-3 rounded-xl
                bg-[#020617] border border-[#36d7b7]
                outline-none text-sm
              "
                        />
                    </div>
                </div>

                {/* CARDS GRID */}
                <div
                    className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            gap-6
          "
                >
                    {words.map((item, i) => (
                        <div
                            key={i}
                            className="cursor-pointer"
                            onClick={() => setFlipped(flipped === i ? null : i)}
                        >
                            <div
                                className={`
                  relative transition-transform duration-700
                  transform-style-preserve-3d
                  ${flipped === i ? "rotate-y-180" : ""}
                `}
                            >
                                {/* FRONT */}
                                <div
                                    className="
                    bg-gradient-to-br from-[#0f172a] to-[#020617]
                    border border-[#36d7b7]
                    rounded-2xl px-5 py-5
                    backface-hidden
                    flex items-center justify-between
                    min-h-[80px]
                  "
                                >
                                    <span className="font-semibold text-sm sm:text-base">
                                        {highlight(item.word)}
                                    </span>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            speak(item.word);
                                        }}
                                        className="text-lg"
                                    >
                                        🔊
                                    </button>
                                </div>

                                {/* BACK */}
                                <div
                                    className="
                    absolute inset-0
                    bg-[#020617] border border-[#36d7b7]
                    rounded-2xl px-5 py-5
                    backface-hidden rotate-y-180
                    flex items-center justify-center text-center
                  "
                                >
                                    <p
                                        dir="rtl"
                                        className="text-sm sm:text-base text-gray-200 leading-relaxed"
                                    >
                                        {highlight(item.meaningAr)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default VocabularyPro;
