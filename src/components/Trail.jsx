import Button from "./Button";

export default function Trail() {
  return (
    <section style={{ backgroundImage: "url('/img/site_arka_plan_deneme_.webp')" }} className=" bg-no-repeat bg-cover border-2 px-4 text-center h-[40vh] gap-4 border-primary rounded-xl w-full flex justify-center items-center flex-col">
      <strong className="text-primary text-xl">14 Day&apos;s Free Trail</strong>
      <h1 className="text-3xl  text-center font-bold">Be part of the future of AIMug Let’s
        Create Something</h1>
        <p>Choose a topic & create something better than before, get started from today.
        No Credit Card Required</p>
        <Button className="uppercase">Get Started Free</Button>
        </section>
  );
}
