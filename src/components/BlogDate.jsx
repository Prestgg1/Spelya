import { CiClock1 } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
export default function BlogDate({ dateString }) {
  return (
    <time dateTime={dateString} className="flex gap-4 flex-wrap text-sm text-gray-600">
      <span className="flex justify-center items-center gap-2"><CiCalendar />
        {new Date(dateString).toLocaleDateString('tr-TR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}</span>
      <span className="flex justify-center items-center gap-2"><CiClock1 />4 Minute Read</span>
    </time>
  );
}
