import Image from "next/image";
import { FaGithub, FaFacebook, FaTwitter } from "react-icons/fa";

// Kullanıcı verilerini bir dizide tutalım
const teamMembers = [
  {
    name: "John Doe",
    role: "CEO",
    image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    github: "#",
    facebook: "#",
    twitter: "#",
  },
  {
    name: "Jane Smith",
    role: "Lead Developer",
    image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    github: "#",
    facebook: "#",
    twitter: "#",
  },
  {
    name: "Alice Johnson",
    role: "Product Designer",
    image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    github: "#",
    facebook: "#",
    twitter: "#",
  },
  {
    name: "Michael Brown",
    role: "Project Manager",
    image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    github: "#",
    facebook: "#",
    twitter: "#",
  },
  {
    name: "Sarah Williams",
    role: "Marketing Specialist",
    image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    github: "#",
    facebook: "#",
    twitter: "#",
  },
  {
    name: "David Lee",
    role: "UX/UI Designer",
    image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    github: "#",
    facebook: "#",
    twitter: "#",
  },
  {
    name: "Emily Davis",
    role: "Software Engineer",
    image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    github: "#",
    facebook: "#",
    twitter: "#",
  },
  {
    name: "Chris Wilson",
    role: "Content Strategist",
    image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    github: "#",
    facebook: "#",
    twitter: "#",
  },
];

export default function Team() {
  return (
    <div className="container flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-center mx-4 mb-8">
        Meet Our Dynamic Team Members, Who Really Care About You
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center md:w-2/3 items-center">
        {teamMembers.map((member, i) => (
          <div key={i} className="card card-compact bg-base-100 mx-2 md:mx-0 md:max-w-60 shadow-xl">
            <figure className="team relative">
              <Image
                src={member.image}
                alt={member.name}
                width={384}
                height={256}
                layout="responsive"
              />
              <div className="absolute justify-center flex items-center gap-4 [&_svg]:text-[#fff] [&_svg]:text-3xl [&_svg]:cursor-pointer opacity-0 [&_svg]:hover:visible [&_svg]:hover:opacity-100 [&_svg]:duration-300 w-11/12 h-5/6 rounded-xl bg-slate-500">
                <a href={member.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="hover:text-primary opacity-0 invisible" />
                </a>
                <a href={member.facebook} target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="hover:text-primary opacity-0 invisible" />
                </a>
                <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="hover:text-primary opacity-0 invisible" />
                </a>
              </div>
            </figure>
            <div className="card-body flex flex-col justify-center items-center text-center">
              <h2 className="card-title">{member.name}</h2>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
