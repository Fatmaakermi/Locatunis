import Image from "next/image";

import Link from 'next/link';

export default function Home() {
  return (
  
 
    <section className="relative h-screen flex items-center justify-center bg-blue-50 text-center px-4">
      {/* Image de fond (optionnelle, floue et claire) */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url('/images/rent.jpg')` }}
      ></div>

      {/* Contenu centré */}
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-2xl md:text-3xl font-bold text-primary mb-6">
          Trouvez  votre logement avec LocaTunisie
        </h1>

        <p className="text-gray-700 mb-8 text-lg">
          Parcourez des centaines d'annonces ou publiez la vôtre en quelques clics.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/Logements"
            className="px-6 py-3 bg-secondary text-white rounded hover:bg-primary transition"
          >
              Voir les logements
          </Link>
         
          <Link
            href="/Contact"
            className="px-6 py-3 bg-secondary text-white rounded hover:bg-primary transition"
          >
             Contacter nous
          </Link>
        </div>
      </div>
    </section>
  );
}

 