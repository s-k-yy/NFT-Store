import Gallery from '../components/Gallery';
import { dummyNFTs } from '../assets/dummyNFTs';


export default function Home() {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Explore NFTs</h1>
      <Gallery items={dummyNFTs} />
    </section>
  );
}
