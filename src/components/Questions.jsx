import FadeIn from "../app/animations/Fadein";

const questions = [
  {
    title: "What Is AIMug Generative AI Tool?",
    content: "Once you know your audience, choose a topic that will resonate with them. Look for trending topics in your industry or address common questions or challenges your audience may be facing. Keep in mind that your topic should be both interesting and relevant to your audience."
  },
  {
    title: "How Can AIMug Help Me?",
    content: "AIMug helps by generating tailored content ideas, providing deep insights into your audience, and assisting in creating engaging material that is aligned with current trends and needs."
  },
  {
    title: "Is AIMug Easy to Use?",
    content: "Yes, AIMug is designed to be user-friendly, with an intuitive interface that makes it accessible even to those with limited technical experience."
  },
  {
    title: "What Makes AIMug Different?",
    content: "AIMug leverages cutting-edge generative AI technology to create content that is both creative and highly relevant to your audience, saving you time and effort in the process."
  },
  {
    title: "Can I Customize My Content?",
    content: "Absolutely! AIMug offers various customization options, allowing you to tweak and adjust the content to match your specific needs and preferences."
  }
];

export default function Questions() {
  return (
    <FadeIn>
      <div className="container mx-auto px-4 py-10">
        {/* Başlık */}
        <div className="w-full flex-col my-10 gap-4 text-center justify-center items-center">
          <strong className="text-primary text-lg font-semibold">Frequently Asked Questions</strong>
          <h1 className="text-3xl font-extrabold text-gray-900 w-1/2 mx-auto">
            Questions About our AIMug? We Have Answers!
          </h1>
        </div>

        {/* Accordion */}
        {questions.map((faq, index) => (
          <div key={index} className="collapse collapse-arrow bg-white rounded-lg shadow-md mb-4">
            {/* Checkbox for each accordion item */}
            <input
              type="checkbox"
              id={`faq-${index}`}
              className="peer hidden"
            />
            <label
              htmlFor={`faq-${index}`}
              className="collapse-title text-xl font-medium px-5 py-3 cursor-pointer hover:bg-gray-100 rounded-t-lg transition duration-300"
            >
              {faq.title}
            </label>
            <div className="collapse-content px-5 py-4 text-gray-700 peer-checked:block hidden">
              <p>{faq.content}</p>
            </div>
          </div>
        ))}
      </div>
    </FadeIn>
  );
}
