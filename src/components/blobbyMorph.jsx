import { useEffect, useState, useRef } from "react";
import { interpolate } from "flubber";

const blob1 = "M440,281Q453,322,411.5,340.5Q370,359,347,384Q324,409,292,433Q260,457,225.5,434Q191,411,166,391Q141,371,127.5,344.5Q114,318,110.5,291.5Q107,265,110,240.5Q113,216,97,179Q81,142,106.5,119.5Q132,97,160,77Q188,57,224.5,36.5Q261,16,299,30.5Q337,45,358.5,79Q380,113,419.5,134Q459,155,443,197.5Q427,240,440,281Z";
const blob2 = "M410,265Q369,290,391.5,344.5Q414,399,370.5,407Q327,415,289.5,389.5Q252,364,226.5,371Q201,378,150.5,402Q100,426,95,379.5Q90,333,92,300Q94,267,85,238Q76,209,91.5,183.5Q107,158,107.5,111.5Q108,65,149.5,67Q191,69,222.5,77Q254,85,293,70Q332,55,363,77Q394,99,399,137.5Q404,176,427.5,208Q451,240,410,265Z";

export default function BlobbyMorph() {
  const [path, setPath] = useState(blob1);
  const interpolatorRef = useRef(interpolate(blob1, blob2));
  const startTimeRef = useRef(null);
  const duration = 2000; // 3 seconds for full morph cycle

  useEffect(() => {
    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = (elapsed % duration) / duration;

      // Use sine easing for smooth back-and-forth
      const easedProgress = 0.5 - 0.5 * Math.cos(progress * 2 * Math.PI);

      setPath(interpolatorRef.current(easedProgress));
      requestAnimationFrame(animate);
    };

    const id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <svg viewBox="0 0 400 550" width={400} height={400}>
      <mask id="mask">
        <path fill="white" d={path} />
      </mask>
      <image
        style={{zIndex: 10}}
        href="../../assets/1655314014659.png"
        x="40"
        y="1"
        width="450"
        height="450"
        mask="url(#mask)"
      />
    </svg>
  );
}
