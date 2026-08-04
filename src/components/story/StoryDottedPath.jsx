/**
 * StoryDottedPath
 *
 * Renders a vertical continuous hand-drawn dotted line with organic curves
 * flowing down between scenes starting strictly from Scene 01.
 */
export function StoryDottedPath() {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      <svg
        className="w-full h-full min-h-[2800px]"
        preserveAspectRatio="none"
        viewBox="0 0 100 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <marker
            id="dotted-arrow"
            viewBox="0 0 10 10"
            refX="5"
            refY="5"
            markerWidth="4"
            markerHeight="4"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 8 5 L 0 9 z" fill="#C49363" opacity="0.75" />
          </marker>
        </defs>

        {/* Wavy organic continuous dotted path starting from Scene 01 */}
        <path
          d="M 32,15 
             C 45,60  70,90   62,140 
             C 54,190  35,220  40,270 
             C 45,320  65,350  60,400 
             C 55,450  35,480  40,530 
             C 45,580  65,610  60,660 
             C 55,710  35,740  40,790 
             C 45,840  60,880  50,935"
          stroke="#D4A373"
          strokeWidth="0.3"
          strokeDasharray="2.5 3.5"
          strokeLinecap="round"
          opacity="0.65"
          markerEnd="url(#dotted-arrow)"
        />

        {/* Decorative nodes along transition points */}
        <circle cx="32" cy="15" r="0.6" fill="#C49363" opacity="0.8" />
        <circle cx="62" cy="140" r="0.6" fill="#C49363" opacity="0.8" />
        <circle cx="40" cy="270" r="0.6" fill="#C49363" opacity="0.8" />
        <circle cx="60" cy="400" r="0.6" fill="#C49363" opacity="0.8" />
        <circle cx="40" cy="530" r="0.6" fill="#C49363" opacity="0.8" />
        <circle cx="60" cy="660" r="0.6" fill="#C49363" opacity="0.8" />
        <circle cx="40" cy="790" r="0.6" fill="#C49363" opacity="0.8" />
      </svg>
    </div>
  );
}
