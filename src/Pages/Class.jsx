import { useState } from "react";

const grammarLessons = [
    {
        title: "Present Simple",
        explanation: "نستخدم المضارع البسيط للتعبير عن العادات والحقائق.",
        example: "I play football every day.",
        question: {
            text: "Choose the correct sentence:",
            options: [
                "I plays football every day",
                "I play football every day",
                "I playing football every day"
            ],
            correctIndex: 1
        }
    },
    {
        title: "Past Simple",
        explanation: "نستخدم الماضي البسيط للأحداث اللي حصلت وانتهت.",
        example: "I played football yesterday.",
        question: {
            text: "Choose the correct sentence:",
            options: [
                "I play football yesterday",
                "I played football yesterday",
                "I playing football yesterday"
            ],
            correctIndex: 1
        }
    }
];

const GrammarQuiz = () => {
    const [step, setStep] = useState(0);
    const [score, setScore] = useState(0);
    const [selected, setSelected] = useState(null);
    const lesson = grammarLessons[step];

    const handleAnswer = (index) => {
        setSelected(index);

        if (index === lesson.question.correctIndex) {
            setScore((prev) => prev + 1);
        }

        setTimeout(() => {
            setSelected(null);
            setStep((prev) => prev + 1);
        }, 800);
    };

    // النهاية
    if (step >= grammarLessons.length) {
        const percentage = Math.round(
            (score / grammarLessons.length) * 100
        );

        return (
            <div>
                <h2>النتيجة النهائية 🎉</h2>
                <p>إجابات صحيحة: {score}</p>
                <p>النسبة: {percentage}%</p>
            </div>
        );
    }

    return (
        <div>
            <h2>{lesson.title}</h2>
            <p>{lesson.explanation}</p>
            <strong>Example:</strong>
            <p>{lesson.example}</p>

            <hr />

            <h3>{lesson.question.text}</h3>
            {lesson.question.options.map((opt, i) => (
                <button
                    key={i}
                    onClick={() => handleAnswer(i)}
                    disabled={selected !== null}
                    style={{
                        display: "block",
                        margin: "8px 0",
                        background:
                            selected === i
                                ? i === lesson.question.correctIndex
                                    ? "green"
                                    : "red"
                                : ""
                    }}
                >
                    {opt}
                </button>
            ))}
        </div>
    );
};

export default GrammarQuiz;
