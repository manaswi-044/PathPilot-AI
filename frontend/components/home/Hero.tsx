import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Compass, ShieldCheck, Play, Star } from 'lucide-react';
import { PrimaryButton } from '../ui/PrimaryButton';
import { SecondaryButton } from '../ui/SecondaryButton';
import { GradientBadge } from '../ui/GradientBadge';
import { HeroIllustration } from './HeroIllustration';

interface HeroProps {
  onNavigate?: (path: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate = () => {} }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden" id="home">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Content Center Column */}
        <div className="text-center max-w-4xl mx-auto space-y-8">
          
          {/* Top Pill Announcement */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2"
          >
            <GradientBadge variant="purple" icon={<Sparkles className="w-3.5 h-3.5 text-purple-400" />}>
              PathPilot AI 2.0 • Autonomous Career Guidance
            </GradientBadge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]"
          >
            Navigate Your Dream Career with{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Precision Intelligence
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed"
          >
            The all-in-one AI copilot that maps your academic path, bridges skill gaps, curates personalized learning roadmaps, and accelerates your career trajectory.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <PrimaryButton
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
              onClick={() => onNavigate('/signup')}
              className="w-full sm:w-auto text-base"
            >
              Start Free Trial
            </PrimaryButton>

            <SecondaryButton
              size="lg"
              icon={<Play className="w-4 h-4 fill-current text-purple-400" />}
              onClick={() => {
                const el = document.getElementById('how-it-works');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto text-base"
            >
              Watch Demo (2 min)
            </SecondaryButton>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-gray-400 font-medium"
          >
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>No Credit Card Required</span>
            </div>
            <span className="hidden sm:inline text-gray-700">•</span>
            <div className="flex items-center gap-1">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-gray-300 font-semibold">4.9/5</span>
              <span>by 50,000+ Students</span>
            </div>
            <span className="hidden sm:inline text-gray-700">•</span>
            <div className="flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-blue-400" />
              <span>Trusted by 200+ Top Tech Universities</span>
            </div>
          </motion.div>
        </div>

        {/* Hero Interactive Workspace Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <HeroIllustration />
        </motion.div>
      </div>
    </section>
  );
};
