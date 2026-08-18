import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../lib/motion";

const suggestedQuestions = [
    "Who is Sourav?",
    "What is Sourav's tech stack?",
    "What projects has Sourav built?",
    "What is Sourav's education?",
];

const SuggestedQuestions = ({ onSelect, disabled = false }) => {
    return (
        <motion.div
            variants={staggerContainer(0.06)}
            initial="hidden"
            animate="show"
            className="ml-9 flex flex-wrap gap-2"
        >
            {suggestedQuestions.map((question) => (
                <motion.button
                    key={question}
                    variants={fadeUp}
                    type="button"
                    onClick={() => onSelect(question)}
                    disabled={disabled}
                    whileHover={{ scale: disabled ? 1 : 1.03 }}
                    whileTap={{ scale: disabled ? 1 : 0.97 }}
                    className="rounded-full border border-slate-600 bg-transparent px-3 py-1.5 text-xs text-slate-400 transition-colors duration-200 hover:border-orange-500 hover:bg-orange-500/5 hover:cursor-pointer hover:text-orange-500 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {question}
                </motion.button>
            ))}
        </motion.div>
    );
};

export default SuggestedQuestions;