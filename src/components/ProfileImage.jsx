import Tilt from "react-parallax-tilt";
import { cn } from "../utils/cn";

const ProfileImage = ({ isVisible }) => {
  return (
    <div className="flex justify-center order-first md:order-last">
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={1200}
        scale={1.03}
        transitionSpeed={1800}
        gyroscope={true}
        className="rounded-full"
      >
        <div
          className={cn(
            "relative",
            isVisible && "animate-flip-in-x animate-delay-300 animate-duration-800"
          )}
        >
          {/* Outer glow ring */}
          <div
            className="absolute -inset-1 rounded-full bg-gradient-to-br from-brand-blue via-brand-blue/50 to-brand-orange opacity-60 blur-sm"
            aria-hidden="true"
          />
          {/* Inner ring */}
          <div className="relative h-72 w-72 md:h-88 md:w-88 overflow-hidden rounded-full border-4 border-background shadow-2xl">
            <img
              src="/profile.webp"
              alt="Foto de perfil de Roney Valdelomar"
              className="h-full w-full object-cover"
              width={352}
              height={352}
              fetchpriority="high"
            />
          </div>

          {/* Floating badge */}
          <div
            className="absolute -bottom-2 -right-2 flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 shadow-lg"
            aria-hidden="true"
          >
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="code-font text-xs font-semibold text-foreground/70">
              Open to work
            </span>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default ProfileImage;
