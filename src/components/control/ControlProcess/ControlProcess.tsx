import { useControlStore } from "@/store/control/controlStore";
import { useMutationBulb } from "@/state/control/useBulb";

export default function ControlProcess() {
  const brightness = useControlStore((state) => state.brightness);
  const setBrightness = useControlStore((state) => state.setBrightness);
  const { mutate: controlBulb } = useMutationBulb(
    import.meta.env.VITE_DEVICE_ID
  );

  return (
    <div className="w-full">
      <div className="flex justify-between mb-1 text-xs text-gray-500">
        <span>0%</span>
        <span>밝기</span>
        <span>100%</span>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={brightness}
        onChange={(e) => {
          setBrightness(Number(e.target.value));
          controlBulb(Number(e.target.value));
        }}
        className="w-full h-2 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 rounded-full appearance-none cursor-pointer"
      />
      <div className="flex justify-center mt-2">
        <span className="px-3 py-1 bg-yellow-50 rounded-full text-sm font-bold shadow text-gray-900">
          {brightness}%
        </span>
      </div>
    </div>
  );
}
