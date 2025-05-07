import { useControlStore } from "@/store/control/controlStore";

export default function Bulb() {
  const brightness = useControlStore((state) => state.brightness);

  return (
    <div className="relative flex flex-col items-center">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl pointer-events-none"
        style={{
          width: 120 + brightness,
          height: 120 + brightness,
          background: `rgba(253, 224, 71, ${0.15 + brightness / 200})`,
          opacity: brightness / 100,
          zIndex: 0,
        }}
      />

      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        className="drop-shadow-lg relative z-10"
      >
        <ellipse
          cx="40"
          cy="38"
          rx="28"
          ry="30"
          fill={`rgba(254, 249, 195, ${0.7 + brightness / 200})`}
          stroke="#fde047"
          strokeWidth="4"
          style={{
            filter: `drop-shadow(0 0 ${
              10 + brightness / 2
            }px rgba(253, 224, 71, ${0.2 + brightness / 200}))`,
            transition: "all 0.3s",
          }}
        />

        <polyline
          points="30,50 40,40 50,50"
          stroke="#facc15"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />

        <rect
          x="32"
          y="60"
          width="16"
          height="12"
          rx="4"
          fill="#a3a3a3"
          stroke="#d4d4d4"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}
