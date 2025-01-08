import { useState } from "react";

const EdgeButtonExample = () => {
  const [position, setPosition] = useState<"inside" | "outside" | "edge">(
    "edge"
  );

  const positionClass =
    position === "inside"
      ? "bottom-0 translate-y-0"
      : position === "outside"
      ? "-bottom-4 translate-y-0"
      : "bottom-0 translate-y-1/2";

  return (
    <div className="relative w-full h-64 bg-gray-200">
      <button
        className={`absolute left-1/2 transform -translate-x-1/2 ${positionClass} btn btn-outline`}
        onClick={() =>
          setPosition((prev) =>
            prev === "inside"
              ? "outside"
              : prev === "outside"
              ? "edge"
              : "inside"
          )
        }
      >
        {position === "inside"
          ? "Inside"
          : position === "outside"
          ? "Outside"
          : "Edge"}
      </button>
    </div>
  );
};

export default EdgeButtonExample;
