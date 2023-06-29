
import { Counter } from '@/components/counter'
import Image from "../public/img/icon.jpg";

export default function Home() {
  return (
    <>
      <div className="bg-red-100 h-28 flex items-center">
        <img src="/img/icon.jpg" alt="" className='w-4'/>
        <div className="text-black text-4xl font-extrabold ml-28">
          Liscript
        </div>
      </div>
    </>
  );
}
