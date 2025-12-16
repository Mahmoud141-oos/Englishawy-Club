import TypingEffect from '../Utils/TypingEffect'
import TypingOnce from '../Utils/TypingOnce'

const Hero = () => {
    return (
        <div className="w-full my-5 mx-auto px-2 flex flex-col md:flex-row items-center gap-8">

            {/* صورة صغيرة */}
            <div className="w-62 h-62 md:w-68 md:h-68 text-center shadow-lg">
                <img
                    src="/hero-img.jpg"
                    alt="Grammar learning"
                    className="w-full h-full object-cover rounded-2xl"
                />
                <TypingEffect
                    texts={[
                        "Front-End Developer",
                        "React Specialist",
                        "Next.js Lover"
                    ]}
                    className='text-[#36d7b7] '
                />
            </div>

            {/* النصوص والأزرار */}
            <div className="flex-1 md:text-left">
                <TypingOnce text="السلام عليكم ورحمة الله وبركاته . أنا أسمي محمود عبدالجليل محمد. مبرمج مواقع لذا حبيت استخدم خبرتي في البرمجة واطلع موقع احترافي علشان يساعدنا في تعلم الأنجليزي. وحابب أشكر المستر علي كل مجهوداته اللي بيبذلها هو والتيم" className='text-right md:text-2xl text-xl hero-text' speed={80} />

            </div>
        </div>
    )
}

export default Hero