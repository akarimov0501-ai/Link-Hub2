/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Briefcase, Send, Mail, ArrowRight, Github, Twitter, Linkedin, Instagram, Palette, Bot } from "lucide-react";

const areas = [
  {
    id: "design",
    title: "UI/UX Dizayn",
    description: "Zamonaviy, qulay va premium interfeyslar yaratish.",
    icon: Palette,
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-400",
  },
  {
    id: "ai",
    title: "Sun'iy Intellekt",
    description: "AI modellarini integratsiya qilish va avtomatlashtirish.",
    icon: Bot,
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
  }
];

const socials = [
  { id: "github", icon: Github, url: "#" },
  { id: "twitter", icon: Twitter, url: "#" },
  { id: "linkedin", icon: Linkedin, url: "#" },
  { id: "instagram", icon: Instagram, url: "#" },
];

const links = [
  {
    id: "portfolio",
    title: "Shaxsiy Portfolio",
    description: "Mening so'nggi dizayn va loyihalarim",
    url: "#",
    icon: Briefcase,
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
  },
  {
    id: "telegram",
    title: "Telegram Kanal",
    description: "Dizayn, UI/UX va AI bo'yicha maqolalar",
    url: "#",
    icon: Send,
    iconBg: "bg-sky-500/10",
    iconColor: "text-sky-400",
  },
  {
    id: "contact",
    title: "Aloqa",
    description: "Hamkorlik va ishlash takliflari uchun",
    url: "#",
    icon: Mail,
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
  },
];

export default function App() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-[#09090B] text-slate-200 p-4 sm:p-8 relative overflow-x-hidden font-sans">
      {/* Decorative Background Elements */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <main className="max-w-4xl w-full flex flex-col z-10 mt-4 sm:mt-10 mb-10">
        
        {/* Bento Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-6">
          
          {/* Profile Block (Large, Top Right) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:col-start-2 md:col-span-2 md:row-start-1 md:row-span-2 order-1 p-8 md:p-12 bg-white/5 border border-white/10 rounded-[2rem] relative overflow-hidden group backdrop-blur-md flex flex-col justify-center"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none"></div>
            
            <div className="relative flex flex-col items-start text-left">
              <div className="relative inline-block mb-6 md:mb-8">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 opacity-60 blur-sm"></div>
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#1A1A1E] flex items-center justify-center overflow-hidden border-2 border-[#09090B]">
                  <img
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=256&h=256&auto=format&fit=crop"
                    alt="Profile Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
                Anvarov Azizbek
              </h1>
              
              <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-[360px]">
                Dizayn, UI/UX va Sun'iy Intellekt texnologiyalari bo'yicha mustaqil mutaxassis. Zamonaviy yechimlar va raqamli mahsulotlar yarataman.
              </p>

              {/* Social Icons */}
              <div className="mt-8 md:mt-10 flex gap-3 sm:gap-4">
                {socials.map((social, index) => {
                  const SocialIcon = social.icon;
                  return (
                    <motion.a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300 shadow-sm"
                    >
                      <SocialIcon size={20} strokeWidth={2} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Area Blocks (Left Side) */}
          {areas.map((area, index) => {
            const AreaIcon = area.icon;
            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1, ease: "easeOut" }}
                className={`order-${index + 2} md:col-start-1 p-6 md:p-8 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md flex flex-col justify-center group`}
              >
                <div className={`w-12 h-12 rounded-2xl ${area.iconBg} flex items-center justify-center mb-6 shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                  <AreaIcon className={`w-6 h-6 ${area.iconColor}`} strokeWidth={2} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {area.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Links Section (Vertical Stack) */}
        <div className="w-full mt-8 md:mt-10 flex flex-col items-center">
          <div className="w-full max-w-2xl space-y-4">
            {links.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative block w-full"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
                  <div className="relative flex items-center p-4 sm:p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer backdrop-blur-md">
                    <div className={`w-12 h-12 rounded-xl ${link.iconBg} flex items-center justify-center mr-5 shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                      <Icon className={`w-5 h-5 ${link.iconColor}`} strokeWidth={2} />
                    </div>
                    
                    <div className="flex-1 text-left">
                      <h3 className="text-base font-semibold text-white group-hover:text-blue-50 transition-colors">
                        {link.title}
                      </h3>
                      <p className="text-[12px] sm:text-sm text-slate-500 mt-1">
                        {link.description}
                      </p>
                    </div>
                    
                    <div className="ml-4 shrink-0 bg-white/5 p-2 rounded-full group-hover:bg-white/10 transition-colors">
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300" />
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 pb-6 text-center z-10"
        >
          <div className="flex justify-center space-x-6 mb-4 opacity-40">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-500"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-slate-500"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-slate-500"></div>
          </div>
          <p className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-600 font-medium">
            Copyright &copy; 2026 • Crafted with Precision
          </p>
        </motion.footer>

      </main>
    </div>
  );
}
