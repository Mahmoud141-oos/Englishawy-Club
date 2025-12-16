const vocabulary = [
    {
        word: "Learn",
        meaning: "To get knowledge or skill",
        example: "I learn English every day."
    },
    {
        word: "Practice",
        meaning: "To do something many times to be good at it",
        example: "Practice makes perfect."
    },
    {
        word: "Easy",
        meaning: "Not difficult",
        example: "English can be easy."
    }
];

const Vocabulary = () => {
    return (
        <div className="min-h-screen bg-black text-white px-6 py-12">
            <h1 className="text-4xl font-bold text-white text-center mb-10">
                Vocabulary
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {vocabulary.map((item, index) => (
                    <div
                        key={index}
                        className="bg-[#0f172a] border border-[#36d7b7] rounded-xl p-6"
                    >
                        <h2 className="text-2xl font-bold text-[#36d7b7]">
                            {item.word}
                        </h2>
                        <p className="mt-2 text-gray-300">
                            <strong>Meaning:</strong> {item.meaning}
                        </p>
                        <p className="mt-2 text-gray-400">
                            <strong>Example:</strong> {item.example}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Vocabulary;
