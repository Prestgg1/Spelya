import Form from "@/components/Form"
import Hood from "@/components/Hood";
import Questions from "@/components/Questions";
import Trail from "@/components/Trail";
import FadeIn from "../../../animations/Fadein";

export const metadata = {
  title: 'İletişim',
  description: 'Bizimle iletişime geçin.',
}
 


export default function Contact() {
  return (
    <main className="flex pt-40 gap-10 w-full bg-gray-100 flex-col items-center justify-center p-10">
      <Hood title="Our Dynamic Team are Waiting for Reach you" hood="Contact Us" paragraf="Mastering the Art of AI Tool: Unleashing the Power of Automated Creativity with AIMug" />
      <Form />

     
      <div className="container">
        <iframe src="https://geo-devrel-javascript-samples.web.app/samples/style-array/app/dist/" allowFullScreen="" loading="lazy" className="w-full h-[50vh]"></iframe>
        <Questions />
        <Trail />
      </div>

    </main>
  );
}
