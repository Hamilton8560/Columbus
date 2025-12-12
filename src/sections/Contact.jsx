import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";
import Confetti from "../components/magicui/Confetti";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [feedback, setFeedback] = useState({ message: "", type: "" });
  const [cooldownTime, setCooldownTime] = useState(0);
  
  const confetti = Confetti();
  
  const COOLDOWN_DURATION = 30 * 60 * 1000; // 30 minutes in milliseconds

  // Check cooldown on component mount and set up interval
  useEffect(() => {
    const checkCooldown = () => {
      const lastEmailSent = localStorage.getItem('lastEmailSent');
      if (lastEmailSent) {
        const timePassed = Date.now() - parseInt(lastEmailSent);
        const timeRemaining = COOLDOWN_DURATION - timePassed;
        
        if (timeRemaining > 0) {
          setCooldownTime(timeRemaining);
        } else {
          setCooldownTime(0);
          localStorage.removeItem('lastEmailSent');
        }
      }
    };

    checkCooldown();
    const interval = setInterval(checkCooldown, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  const formatCooldownTime = (milliseconds) => {
    const minutes = Math.ceil(milliseconds / (1000 * 60));
    return `${minutes} minute${minutes !== 1 ? 's' : ''}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // Clear feedback when user starts typing
    if (feedback.message) {
      setFeedback({ message: "", type: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback({ message: "", type: "" });

    // Check if user is in cooldown
    if (cooldownTime > 0) {
      setFeedback({
        message: `Please wait ${formatCooldownTime(cooldownTime)} before sending another message.`,
        type: "error"
      });
      setLoading(false);
      return;
    }

    // Basic validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setFeedback({
        message: "Please fill in all fields.",
        type: "error"
      });
      setLoading(false);
      return;
    }

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      // Set cooldown timestamp
      localStorage.setItem('lastEmailSent', Date.now().toString());
      setCooldownTime(COOLDOWN_DURATION);

      // Trigger confetti celebration
      confetti.fireSideCannons();

      setForm({ name: "", email: "", message: "" });
      setFeedback({
        message: "Message sent successfully! ✨ We'll get back to you soon.",
        type: "success"
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setFeedback({
        message: "Failed to send message. Please try again or contact us directly.",
        type: "error"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Ready to Ship Smarter?"
          sub="💬 Join Columbus today and start saving! 🚀"
        />
        <div className="grid-12-cols mt-16">
          <div className="col-span-full xl:col-span-5">
            <div className="xl:flex-center xl:card-border xl:rounded-xl xl:p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your business email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your freight needs"
                    rows="5"
                    required
                  />
                </div>

                <button type="submit" disabled={loading || cooldownTime > 0}>
                  <div className={`cta-button group ${cooldownTime > 0 ? 'opacity-50 cursor-not-allowed' : ''}`}>
                    <div className="bg-circle" />
                    <p className="text">
                      {loading 
                        ? "Sending..." 
                        : cooldownTime > 0 
                          ? `Wait ${formatCooldownTime(cooldownTime)}` 
                          : "Send Message"
                      }
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>

                {feedback.message && (
                  <div className={`mt-4 p-4 rounded-lg text-center ${
                    feedback.type === "success" 
                      ? "bg-green-100 text-green-800 border border-green-200" 
                      : "bg-red-100 text-red-800 border border-red-200"
                  }`}>
                    {feedback.message}
                  </div>
                )}
              </form>
            </div>
          </div>
          <div className="hidden xl:block xl:col-span-7 min-h-96">
            <div className="bg-black w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
