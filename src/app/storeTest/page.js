'use client';

import { useState } from 'react';
import { usePsyStore } from '../store/store';

export default function StoreTest() {
  const bears = usePsyStore((state) => state.bears);
  const increasePopulation = usePsyStore((state) => state.increasePopulation);
  const removeAllBears = usePsyStore((state) => state.removeAllBears);
  

  return (
    <div className="max-w-2xl mx-auto p-6">
      Bears: {bears}
      <button onClick={increasePopulation}>Increase Population</button>
      <button onClick={removeAllBears}>Remove All Bears</button>
    </div>
  );
}
