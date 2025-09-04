import { motion } from "framer-motion";

export default function Section({ id, title, icon: Icon, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-4"
      >
        <div className="flex items-center gap-3 mb-8">
          {Icon && <Icon className="w-6 h-6" />}
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
        </div>
        {children}
      </motion.div>
    </section>
  );
}
