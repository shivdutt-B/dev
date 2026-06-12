import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { cn } from "../lib/utils";
import { LinkIcon, Maximize2, ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ProjectCard({
  title,
  href,
  description,
  tags,
  link,
  image,
  video,
  links,
  screenshots = [],
  className,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const modalImages = screenshots && screenshots.length > 0 ? screenshots : (image ? [image] : []);

  useEffect(() => {
    if (!screenshots || screenshots.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [screenshots]);

  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      } else if (e.key === "ArrowRight") {
        setModalIndex((prev) => (prev + 1) % modalImages.length);
      } else if (e.key === "ArrowLeft") {
        setModalIndex((prev) => (prev - 1 + modalImages.length) % modalImages.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, modalImages.length]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const openModal = (e) => {
    e.preventDefault();
    setModalIndex(0);
    setIsModalOpen(true);
  };

  const closeModal = (e) => {
    e?.stopPropagation();
    setIsModalOpen(false);
  };

  const nextSlide = (e) => {
    e.stopPropagation();
    setModalIndex((prev) => (prev + 1) % modalImages.length);
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setModalIndex((prev) => (prev - 1 + modalImages.length) % modalImages.length);
  };

  return (
    <>
      <Card className="flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full">
        <div
          onClick={openModal}
          className={cn("block cursor-pointer relative h-40 w-full group overflow-hidden bg-muted", className)}
        >
          {video && (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="pointer-events-none absolute inset-0 h-full w-full object-cover object-top"
            />
          )}

          {/* Screenshots Crossfade */}
          {screenshots && screenshots.length > 0 ? (
            screenshots.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`${title}-screenshot-${index}`}
                className={cn(
                  "absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-700",
                  index === currentIndex ? "opacity-100" : "opacity-0"
                )}
              />
            ))
          ) : (
            image && (
              <img
                src={image}
                alt={title}
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
            )
          )}

          {/* Hover overlay with expand symbol */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
            <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30 text-white transform scale-90 group-hover:scale-100 transition-transform duration-300">
              <Maximize2 className="h-6 w-6" />
            </div>
          </div>
        </div>

        <CardHeader className="px-2">
          <div className="space-y-1">
            <CardTitle className="mt-1 text-base">{title}</CardTitle>
            {link && (
              <div className="hidden font-sans text-xs underline print:visible">
                {link.replace("https://", "").replace("www.", "").replace("/", "")}
              </div>
            )}
            <div className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert text-[14px]">
              {description}
            </div>
          </div>
        </CardHeader>

        <CardContent className="mt-auto flex flex-col px-2">
          {tags && tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {tags.filter(Boolean).map((tag) => (
                <Badge
                  className="px-1 py-0 text-[11px] rounded-xs"
                  variant="secondary"
                  key={tag}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>

        <CardFooter className="px-2 pb-2">
          {links && links.length > 0 && (
            <div className="flex flex-row flex-wrap items-start gap-1">
              {links.map((link, idx) => (
                <a
                  href={link?.href}
                  key={idx}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Badge className="flex gap-2 px-2 py-1 text-[10px] rounded-sm"> 
                    {link.icon || <LinkIcon size={12} />}
                    {link.type}
                  </Badge>
                </a>
              ))}
            </div>
          )}
        </CardFooter>
      </Card>

      {/* Carousel Modal */}
      {createPortal(
        <AnimatePresence>
          {isModalOpen && modalImages.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => closeModal()}
              className="fixed inset-0 bg-black/10 backdrop-blur-md z-50 flex flex-col items-center justify-center"
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 p-2.5 rounded-full bg-black/45 hover:bg-black/60 text-white transition-colors cursor-pointer backdrop-blur-xs z-50"
                aria-label="Close modal"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Carousel Content */}
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-[90vw] md:max-w-3xl h-[55vh] px-12 flex items-center justify-center select-none"
              >
                {/* Prev Button */}
                {modalImages.length > 1 && (
                  <button
                    onClick={prevSlide}
                    className="absolute left-0 z-10 p-3 rounded-full bg-black/45 hover:bg-black/60 text-white transition-colors cursor-pointer backdrop-blur-sm"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                )}

                {/* Slide */}
                <div className="w-full h-full rounded-lg border border-black/10 dark:border-white/10 bg-zinc-100/10 dark:bg-zinc-950/40 backdrop-blur-xs flex items-center justify-center overflow-hidden shadow-lg">
                  <motion.img
                    key={modalIndex}
                    src={modalImages[modalIndex]}
                    alt={`${title} screenshot ${modalIndex + 1}`}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="max-w-full max-h-full object-contain p-2"
                  />
                </div>

                {/* Next Button */}
                {modalImages.length > 1 && (
                  <button
                    onClick={nextSlide}
                    className="absolute right-0 z-10 p-3 rounded-full bg-black/45 hover:bg-black/60 text-white transition-colors cursor-pointer backdrop-blur-sm"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                )}
              </div>

              {/* Indicators / Caption */}
              {modalImages.length > 1 && (
                <div className="mt-4 flex flex-col items-center gap-2">
                  <span className="text-gray-800 dark:text-white/60 text-sm font-semibold">
                    {modalIndex + 1} / {modalImages.length}
                  </span>
                  <div className="flex gap-1.5">
                    {modalImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setModalIndex(idx)}
                        className={cn(
                          "h-1.5 rounded-full transition-all duration-300",
                          idx === modalIndex ? "w-6 bg-gray-800 dark:bg-white" : "w-1.5 bg-gray-800/30 dark:bg-white/40 hover:bg-gray-800/50 dark:hover:bg-white/60"
                        )}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
