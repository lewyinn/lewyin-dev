import { motion } from "framer-motion";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const Accordion = ({ title, data, isOpen, toggleAccordion }) => {
    return (
        <div className="text-white">
            <button
                className="w-full flex justify-between items-center text-start py-3 px-4 text-lg font-medium hover:text-blue-800 bg-transparent transition-all cursor-pointer"
                onClick={toggleAccordion}
            >
                {title}
                {isOpen ? <span className="bg-blue-800 px-1 py-1 rounded-full"><FaArrowDown className="text-base text-white" /></span> : <span className="bg-blue-800 px-1 py-1 rounded-full"><FaArrowUp className="text-base text-white" /></span>}
            </button>
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
            >
                <div className="p-4 bg-slate-800 rounded-lg">{data}</div>
            </motion.div>
        </div>
    );
};

export default Accordion;
