import { AiFillAccountBook } from "react-icons/ai";

export default function Hizmetler() {
  return (
    <div className="w-full flex-col flex justify-center items-center">
      <h1 className="text-3xl font-bold text-center">We deliver great quality and performance
        while offering you the most recent AI
        Busoness products.</h1>
      <div className="grid grid-cols-1 [&_svg]:text-5xl [&_h2]:text-2xl [&_h2]:font-extrabold p-10 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
        <AiFillAccountBook  />
          <h2 className="text-2xl font-bold">Research and Discovery</h2>
          <p>A Magical Tool to Optimize you content for the first know who  targeting.</p>
        </div>
        <div>
        <AiFillAccountBook />
          <h2>Research and Discovery</h2>
          <p>A Magical Tool to Optimize you content for the first know who  targeting.</p>
        </div>
        <div>
        <AiFillAccountBook />
          <h2>Research and Discovery</h2>
          <p>A Magical Tool to Optimize you content for the first know who  targeting.</p>
        </div>
        <div>
        <AiFillAccountBook />
          <h2>Research and Discovery</h2>
          <p>A Magical Tool to Optimize you content for the first know who  targeting.</p>
        </div>
      </div>
    </div>
  );
}
