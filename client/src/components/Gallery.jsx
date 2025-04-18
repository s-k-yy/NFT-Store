import { useState } from 'react';
import NFTCard from './NFTCard';

export default function Gallery({ items }) {
  console.log('Gallery loaded. NFTs:', items); // ✅ Add it here

  const [rarityFilter, setRarityFilter] = useState('All');

  const filtered = rarityFilter === 'All'
    ? items
    : items.filter(nft => nft.rarity === rarityFilter);

  return (
    <div>
      <select onChange={e => setRarityFilter(e.target.value)} className="mb-4 p-2 border">
        <option>All</option>
        <option>Common</option>
        <option>Rare</option>
        <option>Legendary</option>
      </select>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(nft => <NFTCard key={nft.id} nft={nft} />)}
      </div>
    </div>
  );
}
