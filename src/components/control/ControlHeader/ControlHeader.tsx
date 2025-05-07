export default function ControlHeader(props: { title: string }) {
  return (
    <div className="flex items-center gap-2 mb-2">
      <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
      <span className="ml-2 text-xs text-gray-400">{props.title}</span>
    </div>
  );
}
