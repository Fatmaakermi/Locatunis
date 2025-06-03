"use client";

import { logements } from "../data/page";

export default function DetailsLogementCard({ logement }) {
  if (!logement) return <p>Chargement...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow-lg">
      <img
        src={`/images/${logements.image}`}
        alt={logement.nom}
        className="w-full h-64 object-cover rounded mb-6"
      />
      <h2 className="text-3xl font-bold mb-2 text-gray-800">{logement.nom}</h2>
      <p className="text-lg text-gray-600 mb-2">
        <strong>Catégorie :</strong> {logement.categorie}
      </p>
      <p className="text-lg text-gray-600 mb-4">
        <strong>Prix / nuit :</strong> {logement.prix} TND
      </p>
      <p className="text-gray-700 mb-6">{logement.description}</p>

      <button
        onClick={() => alert("Réservation Confirmée")}
        className="bg-primary text-white px-6 py-3 rounded hover:bg-secondary transition"
      >
        Réserver
      </button>
    </div>
  );
}