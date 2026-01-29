import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "motion/react";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <div className={cn("relative p-[2px] group", containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-lg z-[1] opacity-60 group-hover:opacity-100 blur-sm transition duration-500 will-change-transform",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#525252,transparent),radial-gradient(circle_farthest-side_at_100%_0,#a3a3a3,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#737373,transparent),radial-gradient(circle_farthest-side_at_0_0,#404040,#525252)]",
          "dark:bg-[radial-gradient(circle_farthest-side_at_0_100%,#a3a3a3,transparent),radial-gradient(circle_farthest-side_at_100%_0,#d4d4d4,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#b3b3b3,transparent),radial-gradient(circle_farthest-side_at_0_0,#8a8a8a,#a3a3a3)]"
        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-lg z-[1] will-change-transform",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#525252,transparent),radial-gradient(circle_farthest-side_at_100%_0,#a3a3a3,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#737373,transparent),radial-gradient(circle_farthest-side_at_0_0,#404040,#525252)]",
          "dark:bg-[radial-gradient(circle_farthest-side_at_0_100%,#a3a3a3,transparent),radial-gradient(circle_farthest-side_at_100%_0,#d4d4d4,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#b3b3b3,transparent),radial-gradient(circle_farthest-side_at_0_0,#8a8a8a,#a3a3a3)]"
        )}
      />

      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
