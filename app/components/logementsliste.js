
import LogementCard from "./logementcard";


export default function LogementList({ logements }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {logements.map((logement) => (
        <LogementCard key={logement.id} logement={logement} />
      ))}
      
    </div>
      
  );
}