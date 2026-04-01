import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Let's <span className="text-gradient-primary">Connect</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full mb-8 mx-auto" />
          <p className="text-muted-foreground mb-12 max-w-lg mx-auto">
            Interested in working together? Feel free to reach out through any of the channels below.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {[
            { icon: Mail, label: "Email", value: "umerkhayam1717@gmail.com", href: "mailto:umerkhayam1717@gmail.com" },
            { icon: Phone, label: "Phone", value: "03165511251", href: "tel:03165511251" },
            { icon: MapPin, label: "Location", value: "Alipur, Islamabad", href: "#" },
          ].map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-glow transition-all text-center group"
            >
              <item.icon className="w-6 h-6 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="text-xs text-muted-foreground mb-1 font-mono">{item.label}</p>
              <p className="text-sm text-foreground">{item.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
