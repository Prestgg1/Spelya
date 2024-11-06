import FadeIn from "../app/animations/Fadein";
export default function Questions() {
  return (
    <FadeIn>
        <div className="container flex gap-2 flex-col">
      {/* Başlık */}
      <div className="w-full flex-col my-10 gap-4 text-center justify-center items-center flex">
        <strong className="text-primary">Frequently Asked Questions</strong>
      <h1 className="text-4xl font-bold w-1/2">Questions About our AIMug? ​​​​​​​Weh ave Answers!</h1>
      </div>
      <div className="collapse outline-none collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">What Is AIMug Generative AI Tool?</div>
        <div className="collapse-content">
          <p>Once you know your audience, choose a topic that will resonate with them. Look for trending topics in your industry or address common questions or challenges your audience may be facing. Keep in mind that your topic should be both interesting and relevant to your audience</p>
        </div>
      </div>
      <div className="collapse outline-none collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">What Is AIMug Generative AI Tool?</div>
        <div className="collapse-content">
          <p>Once you know your audience, choose a topic that will resonate with them. Look for trending topics in your industry or address common questions or challenges your audience may be facing. Keep in mind that your topic should be both interesting and relevant to your audience</p>
        </div>
      </div>
      <div className="collapse outline-none collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">What Is AIMug Generative AI Tool?</div>
        <div className="collapse-content">
          <p>Once you know your audience, choose a topic that will resonate with them. Look for trending topics in your industry or address common questions or challenges your audience may be facing. Keep in mind that your topic should be both interesting and relevant to your audience</p>
        </div>
      </div>
      <div className="collapse outline-none collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">What Is AIMug Generative AI Tool?</div>
        <div className="collapse-content">
          <p>Once you know your audience, choose a topic that will resonate with them. Look for trending topics in your industry or address common questions or challenges your audience may be facing. Keep in mind that your topic should be both interesting and relevant to your audience</p>
        </div>
      </div>
      <div className="collapse outline-none collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">What Is AIMug Generative AI Tool?</div>
        <div className="collapse-content">
          <p>Once you know your audience, choose a topic that will resonate with them. Look for trending topics in your industry or address common questions or challenges your audience may be facing. Keep in mind that your topic should be both interesting and relevant to your audience</p>
        </div>
      </div>
    </div>

    </FadeIn>
 
  )
}
