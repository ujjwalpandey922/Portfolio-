import { technologies } from "../Constants";
import { BallCanvas } from "./canvas";

const Tech = () => {
  return (
    <div className="flex flex-wrap gap-10 justify-center align-center">
      {technologies.map((technology) => (
        <div className="w-28 h-28 " key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default Tech;
