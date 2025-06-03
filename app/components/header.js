import { FaHome } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="text-center py-6 bg-color1 border-b border-gray-300">
      <div className="flex justify-center items-center gap-3">
        <FaHome className="text-secondary text-4xl" />
        <h1 className="text-3xl font-itim text-secondary">LocaTunisie</h1>
      </div>
    </header>
  );
}