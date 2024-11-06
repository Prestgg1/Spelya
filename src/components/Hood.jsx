export default function Hood({ hood, title, paragraf }) {
  return (
    <div className="hood text-center md:my-10 my-5 h-[40vh] md:h-auto flex justify-center items-center flex-col gap-2 md:gap-4 lg:w-1/2">
      <strong className='text-primary'>{hood}</strong>
      <h1 className='lg:text-4xl md:text-3xl text-2xl font-extrabold text-clip bg-clip-text text-transparent w-full lg:w-2/3 animate-colorful bg-colorful overflow-hidden leading-tight' style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundSize: "500%" }}>{title}</h1>
      <p className='text-lg md:text-xl w-3/4'>{paragraf}</p>
    </div>
  )
}
