'use client';

import { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>あなたは、{count}回クリックしたよ！</p>
            <button className="bg-blue-500"  onClick={() => setCount(count + 1)}>クリックして！</button>
        </div>
    )
}