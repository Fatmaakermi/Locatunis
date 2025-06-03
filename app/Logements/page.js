
import LogementList from "../components/logementsliste";
import { logements } from "../data/page";


export default function LogementsPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl text-color1 font-bold mb-6">Toutes les Logements</h1>
  <h2 className="text-2xl font-bold text-center text-primary mt-6">Tous les logements</h2>
        <LogementList logements={logements} />
    </div>
  );
}