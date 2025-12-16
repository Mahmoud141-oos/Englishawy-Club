const grammarLessons = [
    {
        title: "Present Simple",
        explanation: "We use the present simple for daily routines and facts.",
        structure: "Subject + verb (base form)",
        example: "I play football every day."
    },
    {
        title: "Past Simple",
        explanation: "We use the past simple for actions that finished in the past.",
        structure: "Subject + verb + ed",
        example: "I played football yesterday."
    }
];

const Grammar = () => {
    return (
        <div className="min-h-screen bg-black text-white px-6 py-12">
            <h1 className="text-4xl font-bold text-white text-center mb-10">
                Grammar
            </h1>

            <div className="max-w-4xl mx-auto space-y-8">
                {grammarLessons.map((lesson, index) => (
                    <div
                        key={index}
                        className="bg-[#0f172a] border border-[#36d7b7] rounded-xl p-6"
                    >
                        <h2 className="text-2xl font-bold text-[#36d7b7]">
                            {lesson.title}
                        </h2>
                        <p className="mt-3 text-gray-300">
                            <strong>Explanation:</strong> {lesson.explanation}
                        </p>
                        <p className="mt-2 text-gray-400">
                            <strong>Structure:</strong> {lesson.structure}
                        </p>
                        <p className="mt-2 text-gray-400">
                            <strong>Example:</strong> {lesson.example}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Grammar;
