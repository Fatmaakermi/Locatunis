import Link from "next/link";

export default function LogementCard({ logement }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden">
      <img
        src={logement.image}
        alt={logement.nom}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-primary">{logement.nom}</h3>
        <p className="text-sm text-gray-600">{logement.categorie}</p>
        <p className="text-secondary font-bold mt-2">{logement.prix} TND / nuit</p>
      </div>
       <div className="mt-auto pt-4">
          <Link
            href={`/Logements/${logement.id}`}
            className="inline-block bg-primary text-secondary px-4 py-2 rounded hover:bg-color1 transition"
          >
            Détails
          </Link>
        </div>
    </div>
  );
}