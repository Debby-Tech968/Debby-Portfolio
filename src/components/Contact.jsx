import { useState } from "react";
import confetti from "canvas-confetti";
import { toast } from "sonner";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  Copy,
  Clock,
  Sparkles,
  MessageSquare,
} from "lucide-react";
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
    toast.success("Email address copied to clipboard!", {
      description: "osekhimen2020@gmail.com",
    });
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
        toast.success("Message sent successfully!", {
          description: "Thank you! Deborah will reply to your email promptly.",
        });
        try {
          confetti({
            particleCount: 70,
            spread: 60,
            origin: { y: 0.6 },
          });
        } catch {
          // ignore confetti catch
        }
      } else {
        setStatus("error");
        toast.error("Failed to send message. Please send an email directly.", {
          description: "osekhimen2020@gmail.com",
        });
      }
    } catch {
      setStatus("error");
      toast.error("Network error. Please email directly.", {
        description: "osekhimen2020@gmail.com",
      });
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-12 bg-black relative w-full">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111111] border border-[#27272a] text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            Let's Connect
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Get In <span className="text-gradient-cyan">Touch</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base md:text-lg mt-3 leading-relaxed">
            Have a project in mind, an open frontend role, or want to discuss
            an opportunity? Drop a message or reach out through direct channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* LEFT: DIRECT INFO & AVAILABILITY (5 cols) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5 w-full">
            <div className="solid-surface p-5 sm:p-7 rounded-3xl border border-[#222222] space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <span>Direct Contact Channels</span>
                <Sparkles className="w-4 h-4 text-cyan-400" />
              </h3>

              {/* EMAIL WITH COPY BUTTON */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#111111] border border-[#222222] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-xl bg-[#181818] text-cyan-400 flex items-center justify-center shrink-0 border border-[#27272a]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <p className="text-[10px] font-mono text-zinc-500 uppercase">Email Address</p>
                    <a
                      href="mailto:osekhimen2020@gmail.com"
                      className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-400 transition truncate block"
                    >
                      osekhimen2020@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  className="p-2 sm:px-3 sm:py-2 rounded-xl bg-[#181818] hover:bg-[#222222] text-zinc-300 hover:text-white transition shrink-0 cursor-pointer border border-[#27272a] text-xs font-mono flex items-center gap-1.5"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 hidden sm:inline">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
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
                className="p-3.5 sm:p-4 rounded-2xl bg-[#111111] border border-[#222222] flex items-center justify-between gap-3 group hover:border-emerald-500/40 transition block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#181818] text-emerald-400 flex items-center justify-center shrink-0 border border-[#27272a]">
                    <FaWhatsapp className="text-base" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-zinc-500 uppercase">Instant Message</p>
                    <p className="text-xs sm:text-sm font-semibold text-white group-hover:text-emerald-400 transition">
                      WhatsApp (+234 703 153 9179)
                    </p>
                  </div>
                </div>
                <span className="text-xs text-zinc-500 font-mono group-hover:text-white transition">
                  Chat &rarr;
                </span>
              </a>

              {/* PHONE */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#111111] border border-[#222222] flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#181818] text-cyan-400 flex items-center justify-center shrink-0 border border-[#27272a]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-zinc-500 uppercase">Phone Line</p>
                  <p className="text-xs sm:text-sm font-semibold text-white">
                    07031539179 • 08051737017
                  </p>
                </div>
              </div>

              {/* LOCATION */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#111111] border border-[#222222] flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#181818] text-purple-400 flex items-center justify-center shrink-0 border border-[#27272a]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-zinc-500 uppercase">Location &amp; Timezone</p>
                  <p className="text-xs sm:text-sm font-semibold text-white">
                    Lagos, Nigeria (WAT • UTC+1)
                  </p>
                </div>
              </div>
            </div>

            {/* AVAILABILITY PILL CARD */}
            <div className="solid-surface p-5 sm:p-6 rounded-3xl border border-[#222222] bg-[#0c0c0c]">
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs sm:text-sm font-bold text-white">
                  Available for Immediate Hire
                </span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                <span>Typical response time: under 3 hours. Open to remote, hybrid, or onsite.</span>
              </p>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM (7 cols) */}
          <div className="lg:col-span-7 w-full">
            <div className="solid-surface p-5 sm:p-8 rounded-3xl border border-[#222222] shadow-2xl">
              <h3 className="text-lg sm:text-2xl font-bold text-white mb-1.5">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mb-6">
                Fill out the form below and I will get back to your inquiry promptly.
              </p>

              {status === "success" ? (
                <div className="p-6 sm:p-8 rounded-2xl bg-[#111111] border border-emerald-500/40 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto text-2xl">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-white">Message Delivered!</h4>
                  <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto">
                    Thank you for reaching out! Your message was transmitted directly to Deborah.
                    I will respond via email as soon as possible.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-5 py-2.5 rounded-xl bg-white text-black text-xs sm:text-sm font-semibold hover:bg-zinc-200 transition cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-zinc-300 mb-1.5">
                        Your Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-[#111111] border border-[#27272a] focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-zinc-500 text-xs sm:text-sm outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-zinc-300 mb-1.5">
                        Your Email <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-[#111111] border border-[#27272a] focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-zinc-500 text-xs sm:text-sm outline-none transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry / Job Opportunity"
                      className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-[#111111] border border-[#27272a] focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-zinc-500 text-xs sm:text-sm outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-300 mb-1.5">
                      Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, timeline, or role requirements..."
                      className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-[#111111] border border-[#27272a] focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-zinc-500 text-xs sm:text-sm outline-none transition resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <div className="p-3 rounded-xl bg-red-950/60 border border-red-500/40 text-red-200 text-xs">
                      Failed to send message via form. Please email directly at{" "}
                      <a href="mailto:osekhimen2020@gmail.com" className="underline font-bold">
                        osekhimen2020@gmail.com
                      </a>
                    </div>
                  )}

                  <Btn
                    type="submit"
                    text={status === "submitting" ? "Sending Message..." : "Send Message"}
                    icon={status === "submitting" ? null : Send}
                    variant="primary"
                    size="lg"
                    disabled={status === "submitting"}
                    className="w-full font-semibold cursor-pointer"
                  />
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;