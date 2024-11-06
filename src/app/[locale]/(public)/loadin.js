export default function Loading({className}) {
  // You can add any UI inside Loading, including a Skeleton.
  return <div className={`w-full min-h-[80vh]`}><span className="fixed top-1/2 left-1/2 loading loading-dots loading-lg"></span></div>
}
