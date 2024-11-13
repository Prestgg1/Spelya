'use client'
import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import BlogDate from "./BlogDate";

const fetcher = (url) => fetch(url).then((res) => res.json());

const News = ({ max = 3 }) => {
  // Use SWR for data fetching
  const { data: posts, error } = useSWR(`https://jsonplaceholder.typicode.com/posts?_limit=${max}`, fetcher);

  // Loading and error states
  if (error) return <div>Error loading posts</div>;
  if (!posts) {
    return (
      <div className="place-items-center grid gap-2 md:gap-4 w-full lg:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(3)].map((_, idx) => (
          <div key={idx} className="flex w-52 flex-col gap-4">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <section className="w-full justify-center items-center flex-col flex gap-10 mt-20">
      <h1 className="text-4xl font-bold text-center inline-block border-b-2 border-black uppercase">Güncel Haberler</h1>
      <div className="latest-blog flex gap-2 md:gap-4 w-full justify-center items-stretch flex-wrap lg:gap-6">
        {posts.map((item) => (
          <Suspense key={item.id} fallback={
            <div className="flex w-52 flex-col gap-4">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
          }>
            <div className="card flex-auto flex flex-col bg-base-100 rounded-sm max-w-96 overflow-hidden shadow-xl">
              <Link href={`/news/${item.id}`} className="w-full flex-auto">
                <figure className="h-full max-h-[200px]">
                  <Image src="/img/lisanslar.webp" className="w-full h-full hover:scale-110 duration-200" width={200} height={200} alt="News image" />
                </figure>
              </Link>
              <div className="card-body flex flex-col justify-between self-start">
                <Link href={`/news/${item.id}`} className="line-clamp-1 card-title hover:text-primary duration-300">{item.title}</Link>
                <div className="card-actions justify-between flex text-nowrap">
                  <BlogDate dateString={"2022-02-05"} />
                </div>
              </div>
            </div>
          </Suspense>
        ))}
      </div>
      {max < 5 ? null : (
        <div className="join">
          <button className="join-item btn btn-disabled">1</button>
          <button className="join-item btn">2</button>
          <button className="join-item btn">...</button>
          <button className="join-item btn">99</button>
          <button className="join-item btn">100</button>
        </div>
      )}
    </section>
  );
};

export default News;
