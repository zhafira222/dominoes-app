"use client";

import { useState } from "react";

type Domino = [number, number];

const DEFAULT_DATA: Domino[] = [
  [6, 1],
  [4, 3],
  [5, 1],
  [3, 4],
  [1, 1],
  [3, 4],
  [1, 2],
];

export default function Home() {
  const [data, setData] = useState<Domino[]>(DEFAULT_DATA);
  const [removeTotal, setRemoveTotal] = useState("");

  const doubleCount = data.filter(([a, b]) => a === b).length;

  // ===== FUNCTIONS (DITAMBAHKAN) =====

  const sortAsc = () => {
    setData([...data].sort((a, b) => a[0] + a[1] - (b[0] + b[1])));
  };

  const sortDesc = () => {
    setData([...data].sort((a, b) => b[0] + b[1] - (a[0] + a[1])));
  };

  const flip = () => {
    setData(data.map(([a, b]) => [b, a]));
  };

  const removeDup = () => {
    setData(
      data.filter(
        (d, i, arr) =>
          i ===
          arr.findIndex(
            x =>
              (x[0] === d[0] && x[1] === d[1]) ||
              (x[0] === d[1] && x[1] === d[0])
          )
      )
    );
  };

  const reset = () => {
    setData(DEFAULT_DATA);
    setRemoveTotal("");
  };

  const removeByTotal = () => {
    const total = Number(removeTotal);
    if (isNaN(total)) return;

    setData(data.filter(d => d[0] + d[1] !== total));
    setRemoveTotal("");
  };

  // = UI =

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
        <button
          onClick={sortAsc}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Sort (ASC)
        </button>

        <button
          onClick={sortDesc}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Sort (DESC)
        </button>

        <button
          onClick={flip}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Flip
        </button>

        <button
          onClick={removeDup}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Remove Dup
        </button>

        <button
          onClick={reset}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Reset
        </button>
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
        <button
          onClick={removeByTotal}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Remove
        </button>
      </div>
    </main>
  );
}
