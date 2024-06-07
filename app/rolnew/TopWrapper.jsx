'use client';

import { isSidebarOpenAtom } from 'rolnew/context/atoms';
import { motion, AnimatePresence } from 'framer-motion';
import { useAtom } from 'jotai';

export default function TopWrapper({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useAtom(isSidebarOpenAtom);

  return (
    <div>
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 0.3,
            }}
            transition={{
              duration: 0.2,
              ease: 'easeOut',
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() => setIsSidebarOpen(false)}
            className="bg-black min-h-screen w-full fixed z-40 cursor-pointer pb-[0.75rem] md:pb-[1.5rem] lg:pb-[2.5rem]"
          />
        )}
      </AnimatePresence>
      {children}
    </div>
  );
}
