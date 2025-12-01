import Link from "next/link";
import { charts } from "../charts/index";

export default function ConfigurationsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Configurations prédéfinies</h1>
      <ul className="space-y-4">
        {charts.map((chart) => (
          <li key={chart.id} className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold">{chart.name}</h2>
            <p>{chart.description}</p>
            <Link
              href={`/configurations/${chart.id}`}
              className="text-blue-500 underline"
            >
              Voir
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}