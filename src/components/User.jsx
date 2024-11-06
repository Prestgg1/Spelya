import Image from "next/image";

export default function User({ name = "Prestgg", className, jobname = "Frontend Developer", avatar = "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" }) {
  return (
    <div className={`flex justify-center items-center gap-4 text-start ${className}`}>
      <div className="avatar">
        <div className="ring-primary ring-offset-base-100 w-14 rounded-full ring ring-offset-2">
          <Image src={avatar} alt={name} width={50} height={50} />
        </div>
      </div>
      <div className="details">
        <div className="name">{name}</div>
        <div className="jobname">{jobname}</div>
      </div>
    </div>
  );
}
