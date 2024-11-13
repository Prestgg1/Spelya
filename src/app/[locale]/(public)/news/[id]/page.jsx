"use client";
import axios from "axios";
import Image from "next/image";
import BlogDate from "@/components/BlogDate";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Trail from "@/components/Trail";
import User from "@/components/User";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Hood from "@/components/Hood";
async function fetchPosts(id) {
  let res = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
  return res.data
}
export default function Single() {
  const { id } = useParams();
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    (async () => {
      const data = await fetchPosts(id)
      setPosts(data)
    })();
  }, [id])
  if (!posts) {
    return <main className="flex min-h-full bg-white flex-col items-center justify-center py-24 w-full">
      <span className=" loading loading-ring loading-lg"></span>
    </main>
  }
  return (
    <main className="flex  bg-white flex-col items-center justify-center py-24 gap-5 w-full">
      <Hood hood="Blog Details" title="Blog Details/Single Post" paragraf="Mastering the Art of AI Tool: Unleashing the Power of Automated Creativity with AIMug"/>
      <div className="card bg-base-100 container w-11/12 md:w-full md:px-20 rounded-sm">
        <div className="card-body">
          <h2 className="card-title tracking-wide ld:text-3xl md:text-2xl">Artificial Intelligence For Good: How AI Is Helping Humanity</h2>
        </div>
        <figure>
          <Image src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes" className="w-full max-h-[50vh] rounded-xl object-fit"  width={200} height={200} />
        </figure>
        <div className="author flex px-10 py-4 flex-col md:flex-row justify-center items-center gap-4 md:gap-0 md:justify-between">
          <User/>
          <BlogDate dateString={"2022-02-05"} />
        </div>
        <hr className="w-full bg-slate-500" />
        <div className="card-body p-0">
          <div className="p-4">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-start">
            <span className="">5 Feb • 3 min read</span>
          </div>
          </div>

          <hr />
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-0 md:justify-between items-center">
            <div className="tags   space-x-2   [&_.tag]:duration-300 [&_.tag]:rounded-md [&_.tag]:p-2 [&_.tag]:font-bold [&_.tag]:text-sm">
              <span className="tag bg-primary hover:text-primary hover:border-2 hover:border-primary text-white hover:bg-white cursor-pointer">Etiket1</span>
              <span className="tag bg-primary hover:text-primary hover:border-2 hover:border-primary text-white hover:bg-white cursor-pointer">Etiket1</span>
              <span className="tag bg-primary hover:text-primary hover:border-2 hover:border-primary text-white hover:bg-white cursor-pointer">Etiket1</span>
            </div>
          <div className="flex text-3xl gap-2 text-primary ">
            <FaGithub className="hover:text-secondary duration-300"/>
            <FaFacebook className="hover:text-secondary duration-300"/>
            <FaTwitter className="hover:text-secondary duration-300"/>
          </div>
          </div>
        </div>
       
      </div>
<div className="container px-2 md:px-20">
<Trail/>
</div>
    </main>
  );
}
