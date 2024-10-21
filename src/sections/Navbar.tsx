'use client';

import React, { useState } from "react";
import LogoIcon from '@/assets/logo.svg';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const Navbar: React.FC<{ className?: string }> = ({ className }) => {
  const [active, setActive] = useState<string>("mining-site");
  const router = useRouter();

  const handleNavClick = (path: string) => {
    setActive(path);
    router.push(path);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 ${className}`}>
      <motion.div
        className="container mx-auto flex justify-between items-center px-6 py-4 bg-black rounded-full border border-white/10 shadow-lg backdrop-blur-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4">
          <div className="border h-12 w-12 rounded-full flex justify-center items-center border-white/30 glow-effect">
            <LogoIcon className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-white text-2xl font-bold tracking-wider">Lunar Mining</h1>
        </div>
        <nav className="flex items-center gap-8 text-white text-sm">
          <Link href="/mining-site">
            <motion.span
              className={`nav-button ${active === 'mining-site' ? 'active' : ''}`}
              onClick={() => handleNavClick('/mining-site')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Mining Site
            </motion.span>
          </Link>
          <Link href="/contact">
            <motion.span
              className={`nav-button ${active === 'contact' ? 'active' : ''}`}
              onClick={() => handleNavClick('/contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.span>
          </Link>
        </nav>
      </motion.div>

      <style jsx>{`
        .nav-button {
          padding: 0.75rem 1.25rem;
          font-weight: 500;
          text-transform: uppercase;
          background: linear-gradient(145deg, #5e4e9c, #4b3f79);
          border: 2px solid #9c77d1;
          border-radius: 9999px;
          color: white;
          box-shadow: 0px 0px 12px #9c77d1;
          transition: all 0.3s ease;
          cursor: pointer;
          display: inline-block;
        }

        .nav-button:hover {
          box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.7);
          border-color: #ffffff;
        }

        .active {
          background: rgba(255, 255, 255, 0.2);
          box-shadow: 0px 0px 20px #9c77d1;
        }

        .glow-effect {
          box-shadow: 0px 0px 12px rgba(255, 255, 255, 0.5), inset 0px 0px 12px rgba(255, 255, 255, 0.3);
        }

        @keyframes radium-glow {
          0% {
            box-shadow: 0px 0px 30px rgba(255, 255, 255, 0.7);
          }
          50% {
            box-shadow: 0px 0px 50px rgba(255, 255, 255, 1);
          }
          100% {
            box-shadow: 0px 0px 30px rgba(255, 255, 255, 0.7);
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
