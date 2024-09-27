import { brainwaveSymbol, check } from "../assets";
import { collabApps, collabContent, collabText3 } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import ShinyRotatingBorderButtonVariant3 from "./ui/BodyButton";
import { OrbitingCirclesDemo } from "./ui/live-orbiting-circles";

const Collaboration = () => {
  return (
    <Section crosses id="connectivity">
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">
            <span className="text-color-2">Integrate</span> <span className="text-color-1">seamlessly</span> with your <span className="text-color-3">favorite apps.</span> 
          </h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>

          <ShinyRotatingBorderButtonVariant3/>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="body-2 mb-8 text-n-4 md:mb-8 lg:mb-8 lg:w-[22rem] lg:mx-auto">
            {collabText3}
          </p>

          <OrbitingCirclesDemo/>

            
          </div>
      </div>
    </Section>
  );
};

export default Collaboration;
