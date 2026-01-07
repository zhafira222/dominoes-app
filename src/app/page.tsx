"use client";
import { useState } from "react";

type Domino = [number, number];

const DEFAULT_DATA: Domino[] = [
  [6,1],[4,3],[5,1],[3,4],[1,1],[3,4],[1,2]
];

export default function Home() {
  const [data, setData] = useState<Domino[]>(DEFAULT_DATA);
  const [removeTotal, setRemoveTotal] = useState("");

  const doubleCount = data.filter(([a,b]) => a === b).length;

  return (
    <main className="p-8 max-w-5xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Dominoes</h1>

      {/* Source */}
      <div className="border rounded-lg p-4">
        <h2 className="font-semibold mb-2">Source</h2>
        <pre className="bg-black p-2 rounded text-sm">
          {JSON.stringify(data)}
        </pre>
      </div>

      {/* Double Numbers */}
      <div className="border rounded-lg p-4">
        <h2 className="font-semibold mb-2">Double Numbers</h2>
        <p className="text-xl">{doubleCount}</p>
      </div>

      {/* Domino Cards */}
      <div className="flex gap-4">
        {data.map((d, i) => (
          <div
            key={i}
            className="w-12 border rounded-md flex flex-col items-center justify-center py-2"
          >
            <span>{d[0]}</span>
            <span>-</span>
            <span>{d[1]}</span>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-3 flex-wrap">
        {["Sort (ASC)", "Sort (DESC)", "Flip", "Remove Dup", "Reset"].map(b => (
          <button
            key={b}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            {b}
          </button>
        ))}
      </div>

      {/* Remove Input */}
      <div className="space-y-2">
        <input
          className="border rounded px-3 py-2 w-full max-w-sm"
          placeholder="Input Number"
          value={removeTotal}
          onChange={e => setRemoveTotal(e.target.value)}
        />
        <br />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Remove
        </button>
      </div>
    </main>
  );
}
