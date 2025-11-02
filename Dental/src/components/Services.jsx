import { motion, scale } from "framer-motion";
import { icons } from "lucide-react";
import React from "react";
import { FaSmileBeam, FaTooth, FaXRay } from "react-icons/fa";
import { GiToothbrush } from "react-icons/gi";

const services = [
  {
    icon: <FaTooth className="w-10 h-10 text-sky-500" />,
    title: "ldfsldfjdlfjsdlfjsdlfjsdlkfjsdf",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quis quae non repellendus quasi quidem.",
  },
  {
    icon: <GiToothbrush className="w-10 h-10 text-green-500" />,
    title: "ldfsldfjdlfjsdlfjsdlfjsdlkfjsdf",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quis quae non repellendus quasi quidem.",
  },
  {
    icon: <FaSmileBeam className="w-10 h-10 text-yellow-500" />,
    title: "ldfsldfjdlfjsdlfjsdlfjsdlkfjsdf",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quis quae non repellendus quasi quidem.",
  },
  {
    icon: <FaXRay className="w-10 h-10 text-pink-500" />,
    title: "ldfsldfjdlfjsdlfjsdlfjsdlkfjsdf",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quis quae non repellendus quasi quidem.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="scroll-mt-20 py-24 bg:gradient-to-br from-white to-sky-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-sky-500 mb-4">
            Our Dental Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eos
            perferendis iste asperiores nihil nemo blanditiis officia a itaque.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((services, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-md hover:shadow-lg
                transition-all border border-sky-100 hover:border-sky-300"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center justify-center mb-4">
                {services.icon}
              </div>
              <h3 className="text=lg font-semibold text-sky-400 mb-2 text-center">
                {services.title}
              </h3>
              <p className="text-gray-600 text-sm text-center">
                {services.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
