/**
 * SceneConnector
 *
 * A short, curved hand-drawn dotted arrow connecting one scene to the next.
 * Rendered between every pair of scenes.
 *
 * @param {boolean} flipX - alternate left/right direction so it weaves naturally
 */
export function SceneConnector({ flipX = false }) {
  return (
    <div
      className="relative w-full flex justify-center pointer-events-none overflow-visible"
      aria-hidden="true"
      style={{ height: '72px' }}
    >
      <svg
        width="120"
        height="72"
        viewBox="0 0 120 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: flipX ? 'scaleX(-1)' : 'scaleX(1)' }}
      >
        <defs>
          <marker
            id={`arrow-${flipX ? 'r' : 'l'}`}
            viewBox="0 0 10 10"
            refX="7"
            refY="5"
            markerWidth="5"
            markerHeight="5"
            orient="auto"
          >
            <path d="M 0 2 L 8 5 L 0 8 z" fill="#C49363" opacity="0.75" />
          </marker>
        </defs>

        {/* Short organic curved arc from top-left to bottom-right */}
        <path
          d="M 20,4 C 30,20 90,40 100,68"
          stroke="#D4A373"
          strokeWidth="1.5"
          strokeDasharray="5 6"
          strokeLinecap="round"
          opacity="0.7"
          markerEnd={`url(#arrow-${flipX ? 'r' : 'l'})`}
        />

        {/* Start dot */}
        <circle cx="20" cy="4" r="3" fill="#D4A373" opacity="0.55" />
      </svg>
    </div>
  );
}
