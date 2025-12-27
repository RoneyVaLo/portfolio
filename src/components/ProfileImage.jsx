import Tilt from "react-parallax-tilt";
import { cn } from "../utils/cn";

const ProfileImage = ({ isVisible }) => {
  return (
    <div className="flex justify-center order-first md:order-last">
      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        perspective={1000}
        scale={1.05}
        transitionSpeed={1500}
        gyroscope={true}
        className="rounded-full"
      >
        <div
          className={cn(
            "relative h-78 w-78 md:h-90 md:w-90 overflow-hidden rounded-full border-4 border-[#3498DB]",
            isVisible &&
              "animate-flip-in-x animate-delay-300 animate-duration-800"
          )}
        >
          <img
            src="/profile.webp"
            // src="/profile2.jpg"
            alt="Foto de perfil"
            className="object-cover"
            width={360}
            height={360}
          />
        </div>
      </Tilt>
    </div>
  );
};

export default ProfileImage;
