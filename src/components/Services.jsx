import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";
import { AnimatedBeamDemo } from "./ui/animated-beam-live";
import { RippleDemo } from "./ui/ripple-live";

const Services = () => {
  return (
    <Section id="features2">
      <div className="container">
        <Heading
          title="heading"
          text="Aura "
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                src={service1}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">head</h4>
              <p className="body-2 mb-[3rem] text-n-3">
               text text text text text text text text text
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <AnimatedBeamDemo/>
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">head</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  text
                </p>
              </div>

              
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="pt-12 pb-3 px-4 xl:px-8">
                <h4 className="h4 mb-4">head</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  text
                </p>

                
              </div>

              <div className="relative h-[20rem] rounded-xl md:h-[25rem]">
                <RippleDemo/>

                
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
