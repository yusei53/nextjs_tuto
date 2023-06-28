import Image from 'next/image'
import { Counter } from '@/components/counter'

export default function Home() {
  return (
    <>
      <div className="mt-20 text-4xl">First Post</div>
      <Counter></Counter>
    </>
  );
}
