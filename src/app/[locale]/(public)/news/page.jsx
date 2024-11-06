
import Hood from "@/components/Hood";
import News from "@/components/News";
import Questions from "@/components/Questions";
import Trail from "@/components/Trail";

export default async function NewsPage() {
  return <main className="gap-4 flex min-h-screen bg-white flex-col items-center justify-center py-24 px-5">
    <Hood hood='Career' title="Check Out our Articles it may help to start your AI Journey" paragraf="Mastering the Art of AI Tool: Unleashing the Power of Automated Creativity with AIMug" />
    <div className="container">
    <News max={8} />
    </div>
    <Questions/>
    <Trail/>
  </main>;
}
