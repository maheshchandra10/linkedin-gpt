import StyleChoice from "@/components/form/style-choice";
import TopicChoice from "@/components/form/topic-choice";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { stepAtom } from "@/store";
import { AnimatePresence, motion } from "framer-motion";
import { useAtom } from "jotai";
import { ChevronLeft, ChevronRight, Wand2 } from "lucide-react";
import React from "react";

export const Form = () => {
  const [step, setStep] = useAtom(stepAtom);

  return (
    <div className="sm:gradient-border mx-auto max-w-2xl border bg-background p-4 py-12 md:max-w-4xl lg:max-w-5xl">
      <div className="mx-auto h-[480px] max-w-screen-lg overflow-y-auto sm:h-72">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              className="flex h-full flex-col items-stretch justify-start"
              key={step}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <StyleChoice />
            </motion.div>
          )}
          {step === 1 && (
            <motion.div
              className="h-full"
              key={step}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <TopicChoice />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="mx-auto flex max-w-screen-lg items-center justify-between pt-6">
        <Button
          className={cn(
            "transform rounded-full p-2 transition-transform active:scale-75",
            step === 0 ? "invisible" : "",
          )}
          variant={"secondary"}
          onClick={() => setStep((prev) => (prev === 0 ? 1 : 0))}
        >
          <ChevronLeft />
        </Button>
        {step === 0 && (
          <Button
            className="transform rounded-full p-2 transition-transform active:scale-75"
            variant={"secondary"}
            onClick={() => setStep((prev) => (prev === 0 ? 1 : 0))}
          >
            <ChevronRight />
          </Button>
        )}
        {step === 1 && (
          <Button
            className="transform rounded-full bg-gradient-to-br from-[#3398c9] to-[#49b79c] p-2 transition-transform active:scale-75"
            variant={"secondary"}
          >
            <Wand2 className="fill-[#1CA583] text-white" />
          </Button>
        )}
      </div>
    </div>
  );
};
