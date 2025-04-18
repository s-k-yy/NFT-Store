export default function NFTCard({ nft }) {
    return (
      <div className="border p-4 rounded shadow-md">
        <div className="h-48 bg-gray-200 mb-2">[3D Model Placeholder]</div>
        <h2 className="font-bold">{nft.name}</h2>
        <p className="text-sm text-gray-500">{nft.rarity}</p>
      </div>
    );
  }
  