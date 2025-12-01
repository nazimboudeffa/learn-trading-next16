import TradingChart from "../../components/TradingChart";
import { chart1 } from "../../charts/chart1";

export default function Page() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Graphique simple</h1>
      <TradingChart rawData={chart1.data}/>
    </div>
  );
}