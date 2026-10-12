import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlinePaperAirplane,
  HiOutlineCheck,
  HiOutlineClipboardDocument,
  HiOutlineSparkles,
  HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa6";
import Btn from "./Btn";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("osekhimen2020@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/xvznaaek", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
          });
        } catch {
          // ignore confetti error if any
        }
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-12 relative">
      {/* Decorative glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
            <HiOutlineChatBubbleLeftRight className="text-sm" />
            Let's Connect
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Get In <span className="text-gradient-cyan">Touch</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
            Have a project in mind, an open frontend role, or want to discuss
            an exciting opportunity? Drop a message or connect directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT: CONTACT DETAILS & AVAILABILITY (5 cols) */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            {/* DIRECT INFO CARD */}
            <div className="glass-card p-6 sm:p-7 rounded-3xl border border-white/10 space-y-5">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>Direct Contact Channels</span>
                <HiOutlineSparkles className="text-cyan-400" />
              </h3>

              {/* EMAIL WITH COPY BUTTON */}
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/30">
                    <HiOutlineEnvelope className="text-lg" />
                  </div>
                  <div className="truncate">
                    <p className="text-[11px] font-mono text-slate-400">Email Address</p>
                    <a
                      href="mailto:osekhimen2020@gmail.com"
                      className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-300 transition truncate block"
                    >
                      osekhimen2020@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition shrink-0 cursor-pointer border border-white/5 text-xs font-mono flex items-center gap-1"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <HiOutlineCheck className="text-emerald-400 text-base" />
                      <span className="text-emerald-400 hidden sm:inline">Copied!</span>
                    </>
                  ) : (
                    <>
                      <HiOutlineClipboardDocument className="text-base" />
                      <span className="hidden sm:inline">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/2347031539179"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-slate-900/60 border border-white/5 flex items-center justify-between gap-3 group hover:border-emerald-500/30 transition block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                    <FaWhatsapp className="text-lg" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-slate-400">Instant Chat</p>
                    <p className="text-xs sm:text-sm font-semibold text-white group-hover:text-emerald-400 transition">
                      WhatsApp (+234 703 153 9179)
                    </p>
                  </div>
                </div>
                <span className="text-xs text-slate-400 font-mono group-hover:text-white transition">
                  Chat &rarr;
                </span>
              </a>

              {/* PHONE */}
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/30">
                  <HiOutlinePhone className="text-lg" />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-slate-400">Call / Phone</p>
                  <p className="text-xs sm:text-sm font-semibold text-white">
                    07031539179 • 08051737017
                  </p>
                </div>
              </div>

              {/* LOCATION */}
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 border border-purple-500/30">
                  <HiOutlineMapPin className="text-lg" />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-slate-400">Location &amp; Timezone</p>
                  <p className="text-xs sm:text-sm font-semibold text-white">
                    Lagos, Nigeria (WAT • UTC+1)
                  </p>
                </div>
              </div>
            </div>

            {/* AVAILABILITY PILL CARD */}
            <div className="glass-card p-6 rounded-3xl border border-emerald-500/20 bg-emerald-500/[0.03]">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-sm font-bold text-white">
                  Currently Available for Work
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Open to full-time frontend developer roles, contract projects, and
                exciting collaborations. Quick turnaround on inquiries.
              </p>
            </div>
          </motion.div>

          {/* RIGHT: CONTACT FORM (7 cols) */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill out the form below and I will respond to your inquiry promptly.
              </p>

              {status === "success" ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-3xl">
                    <HiOutlineCheck />
                  </div>
                  <h4 className="text-xl font-bold text-white">Message Delivered!</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out! Your message was sent directly to Deborah.
                    I will get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-5 py-2 rounded-xl bg-slate-800 text-sm font-semibold text-white hover:bg-slate-700 transition"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-2">
                        Your Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-500 text-sm outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-2">
                        Your Email <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-500 text-sm outline-none transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry / Job Opportunity"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-500 text-sm outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2">
                      Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, timeline, or role requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-500 text-sm outline-none transition resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs">
                      Something went wrong submitting the form. Please email directly at{" "}
                      <a href="mailto:osekhimen2020@gmail.com" className="underline font-bold">
                        osekhimen2020@gmail.com
                      </a>
                    </div>
                  )}

                  <Btn
                    type="submit"
                    text={status === "submitting" ? "Sending Message..." : "Send Message"}
                    icon={status === "submitting" ? null : HiOutlinePaperAirplane}
                    variant="primary"
                    size="lg"
                    disabled={status === "submitting"}
                    className="w-full font-bold cursor-pointer"
                  />
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;