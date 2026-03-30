/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Shield, 
  Star, 
  Clock, 
  AlertCircle,
  TrendingUp,
  Target,
  Rocket
} from "lucide-react";

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes countdown

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-dark overflow-x-hidden selection:bg-brand selection:text-dark">
      {/* 1. HERO SECTION */}
      <section id="hero" className="relative h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.1),transparent_70%)]" />
        
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <span className="inline-block px-4 py-1 mb-6 text-xs font-bold tracking-widest uppercase bg-brand text-dark rounded-full">
            The Future is Here
          </span>
          <h1 className="text-6xl md:text-8xl mb-6 leading-[0.9]">
            STOP <span className="text-brand italic">SETTLING</span> FOR AVERAGE.
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-md mx-auto mb-10 font-medium">
            You were built for more. Simba gives you the roar you've been missing.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-white text-dark font-black text-xl rounded-full transition-all hover:bg-brand"
          >
            JOIN SIMBA NOW
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
        >
          <div className="w-px h-12 bg-gradient-to-b from-brand to-transparent mx-auto" />
        </motion.div>
      </section>

      {/* 2. PROBLEM SECTION */}
      <section id="problem" className="py-24 px-6 bg-zinc-900/50">
        <div className="max-w-xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl mb-12 text-center">DOES THIS SOUND LIKE YOU?</h2>
          </FadeIn>
          
          <div className="space-y-8">
            {[
              "Waking up tired, dreading the same routine.",
              "Watching others win while you stay stuck.",
              "Knowing you have potential but no clear path.",
              "Feeling like life is passing you by at 2x speed."
            ].map((text, i) => (
              <div key={i}>
                <FadeIn delay={i * 0.1}>
                  <div className="flex items-start gap-4 p-6 bg-dark border border-zinc-800 rounded-2xl">
                    <AlertCircle className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <p className="text-xl font-medium text-gray-300 italic">"{text}"</p>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PATTERN INTERRUPT */}
      <section id="interrupt" className="py-32 px-6 bg-brand text-dark text-center overflow-hidden relative">
        <motion.div
          initial={{ x: "-100%" }}
          whileInView={{ x: "100%" }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 whitespace-nowrap text-[12rem] font-black opacity-10 pointer-events-none"
        >
          WAKE UP WAKE UP WAKE UP WAKE UP
        </motion.div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl mb-8 leading-none">
              HARD WORK IS <br/> <span className="underline decoration-8 underline-offset-8">NOT</span> THE ANSWER.
            </h2>
            <p className="text-2xl font-bold uppercase tracking-tight">
              If it were, the hardest workers would be the richest. They aren't. 
              <br/>
              <span className="text-accent">Strategy is the roar.</span>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 4. SOLUTION (SIMBA OFFER) */}
      <section id="solution" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-5xl mb-4">THE SIMBA BLUEPRINT</h2>
              <p className="text-gray-400">Three steps to total dominance.</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Target, title: "IDENTIFY", desc: "Pinpoint the exact levers that move your needle." },
              { icon: Zap, title: "ACTIVATE", desc: "Deploy high-leverage systems that work while you sleep." },
              { icon: Rocket, title: "SCALE", desc: "Multiply your results without multiplying your effort." }
            ].map((step, i) => (
              <div key={i}>
                <FadeIn delay={i * 0.2}>
                  <div className="text-center group">
                    <div className="w-20 h-20 bg-zinc-900 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand group-hover:text-dark transition-colors border border-zinc-800">
                      <step.icon className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl mb-3">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SOCIAL PROOF */}
      <section id="social" className="py-24 px-6 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl text-center mb-16 uppercase tracking-widest">REAL ROARS. REAL RESULTS.</h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "@alex_growth", text: "I was skeptical. 3 weeks in and my business doubled. Simba is the real deal.", rating: 5 },
              { name: "Sarah M.", text: "Finally a system that doesn't require 18 hours a day. I have my life back.", rating: 5 },
              { name: "@jordan_dev", text: "The pattern interrupt section changed my entire perspective on wealth.", rating: 5 }
            ].map((review, i) => (
              <div key={i}>
                <FadeIn delay={i * 0.1}>
                  <div className="p-8 bg-dark border border-zinc-800 rounded-3xl hover:border-brand transition-colors">
                    <div className="flex gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-brand text-brand" />
                      ))}
                    </div>
                    <p className="text-lg mb-6 italic text-gray-300">"{review.text}"</p>
                    <p className="font-bold text-brand">{review.name}</p>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OFFER SECTION */}
      <section id="offer" className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-zinc-900 to-dark p-12 rounded-[3rem] border border-zinc-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 blur-[100px]" />
          
          <FadeIn>
            <h2 className="text-5xl mb-8">WHAT YOU GET</h2>
            <ul className="space-y-6 mb-12">
              {[
                "The Complete Simba Masterclass (Value $997)",
                "Weekly High-Leverage Strategy Calls",
                "Private 'Pride' Community Access",
                "The 24-Hour Implementation Checklist"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-xl">
                  <CheckCircle2 className="w-6 h-6 text-brand shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-5xl font-black text-brand">$49</span>
              <span className="text-xl text-gray-500 line-through">$497</span>
              <span className="text-sm font-bold bg-accent/20 text-accent px-3 py-1 rounded-full">90% OFF</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 7. URGENCY + SCARCITY */}
      <section id="urgency" className="py-12 px-6 bg-accent text-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <Clock className="w-10 h-10 animate-pulse" />
            <div>
              <h3 className="text-2xl font-black leading-none mb-1 uppercase">TIME IS RUNNING OUT</h3>
              <p className="font-bold opacity-80">Only 7 spots left at this price.</p>
            </div>
          </div>
          <div className="text-6xl font-black tabular-nums tracking-tighter">
            {formatTime(timeLeft)}
          </div>
        </div>
      </section>

      {/* 8. FINAL CALL TO ACTION */}
      <section id="final-cta" className="py-32 px-6 text-center">
        <FadeIn>
          <h2 className="text-6xl md:text-8xl mb-8 leading-none">READY TO <br/> <span className="text-brand">ROAR?</span></h2>
          <p className="text-xl text-gray-400 mb-12 max-w-md mx-auto">
            Don't let another day pass in silence. Join the pride and claim your future today.
          </p>
          <motion.button
            whileHover={{ scale: 1.1, rotate: -1 }}
            whileTap={{ scale: 0.9 }}
            className="group relative inline-flex items-center gap-3 px-12 py-6 bg-brand text-dark font-black text-2xl rounded-full shadow-[0_0_40px_rgba(255,215,0,0.3)]"
          >
            START NOW
            <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
          </motion.button>
          
          <div className="mt-12 flex items-center justify-center gap-8 text-gray-500 text-sm font-bold uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Secure Checkout
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Instant Access
            </div>
          </div>
        </FadeIn>
      </section>

      <footer className="py-12 px-6 border-t border-zinc-900 text-center text-gray-600 text-xs tracking-widest uppercase">
        &copy; 2026 SIMBA. ALL RIGHTS RESERVED. NO MORE WHISPERS.
      </footer>
    </div>
  );
}
