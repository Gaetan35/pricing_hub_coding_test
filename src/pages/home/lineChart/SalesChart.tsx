import {
  CartesianGrid,
  Label,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  XAxis,
  YAxis,
} from "recharts";
import styles from "./SalesChart.module.scss";

const dateFormatter = (dateString: string) => {
  const date = new Date(dateString);
  const mm = ("0" + (date.getMonth() + 1).toString()).slice(-2);
  const yyyy = date.getFullYear();

  return `${mm}/${yyyy}`;
};

type SalesChartProps = {
  graphData: { date: string; sales: number }[];
  selectedCategory?: string;
};

export const SalesChart = ({
  graphData,
  selectedCategory,
}: SalesChartProps) => {
  const formattedGraphData = graphData.map((point) => ({
    date: new Date(point.date).getTime(),
    sales: point.sales,
  }));

  return (
    <div className={styles.lineChartContainer}>
      <h2 className={styles.graphTitle}>
        {selectedCategory !== undefined
          ? `Ventes de la catégorie ${selectedCategory}`
          : "Cliquez sur une catégorie pour actualiser le graphique"}
      </h2>
      <ResponsiveContainer width="95%" height={400}>
        <ScatterChart margin={{ top: 0, right: 30, left: 20, bottom: 20 }}>
          <XAxis
            dataKey="date"
            domain={["auto", "auto"]}
            name="Date"
            tickFormatter={dateFormatter}
            type="number"
          >
            <Label value="Date" position="bottom" />
          </XAxis>
          <YAxis dataKey="sales" name="Sales">
            <Label value="Sales" position="left" angle={-90} />
          </YAxis>

          <Scatter
            data={formattedGraphData}
            line={{ stroke: "#0069b4" }}
            lineType="joint"
          />
          <CartesianGrid stroke="#f5f5f5" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};
