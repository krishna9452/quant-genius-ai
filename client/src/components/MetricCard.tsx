interface MetricCardProps {
  title: string;
  value: string;
}

export default function MetricCard({ title, value }: MetricCardProps) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h4 className="text-sm font-medium text-gray-500">{title}</h4>
      <p className="text-xl font-semibold">{value}</p>
    </div>
  );
}