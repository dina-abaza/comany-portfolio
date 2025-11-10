"use client";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function FilterSection({ filters, items, activeFilter,setActiveFilter, onCardClick }) {
  const scrollRef = useRef(null);

  const filteredItems =
    activeFilter === "all"
      ? items
      : items.filter((i) => i.category === activeFilter);

  const scrollLeft = () => {
    if (scrollRef.current)
      scrollRef.current.scrollBy({ left: -150, behavior: "smooth" });
  };
  const scrollRight = () => {
    if (scrollRef.current)
      scrollRef.current.scrollBy({ left: 150, behavior: "smooth" });
  };

  return (
    <section className="w-full flex justify-center mb-14">
      <div className="w-full px-4">
        <div className="relative flex justify-center mt-6 lg:mt-8">
          <div className="w-full flex justify-center h-auto">
            <button
              onClick={scrollLeft}
              className="flex lg:hidden absolute left-0 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black transition-all duration-300 z-10"
            >
              <FaChevronLeft size={16} />
            </button>

            <div ref={scrollRef} className="w-full overflow-x-auto no-scrollbar scroll-smooth">
              <div className="flex justify-center min-w-max px-2">
                <div className="inline-flex items-center gap-[16px] sm:gap-[24px] lg:gap-[32px]">
                  {filters.map((f) => (
                    <button
                      key={f.value}
                      onClick={() => setActiveFilter(f.value)} // استخدم الفانكشن من الأب
                      className={`whitespace-nowrap inline-flex items-center justify-center
                        px-[14px] sm:px-[16px] py-[8px] rounded-full text-[13px] sm:text-[14px] font-medium
                        transition-all duration-300
                        ${
                          activeFilter === f.value
                            ? "bg-gradient-to-r from-[#10A700] to-[#B8FF00] text-black shadow-[0_6px_18px_rgba(16,167,0,0.18)] scale-[1.05]"
                            : "bg-black/40 text-white/80 border border-white/10 hover:bg-black/60 hover:scale-[1.02]"
                        }`}
                      style={{ height: 40, minWidth: 44 }}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={scrollRight}
              className="flex lg:hidden absolute right-0 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black transition-all duration-300 z-10"
            >
              <FaChevronRight size={16} />
            </button>
          </div>
        </div>

        <div className="mt-[60px] lg:mt-[95px]" />

        <div className="flex justify-center">
          <div className="w-full lg:mx-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-[20px] p-[20px] lg:gap-x-[44px] lg:gap-y-[44px] lg:p-0 justify-center">
              {filteredItems.map((item) => (
                <article
                  key={item.id}
                  onClick={() => onCardClick(item)}
                  className="cursor-pointer group relative overflow-hidden rounded-[12px] shadow-lg transform transition-transform duration-500 hover:scale-[1.04] bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    width: "100%",
                    height: "240px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                
                loading="lazy" 
                >
                  <div
                    className="absolute bottom-0 left-0 w-full flex flex-col justify-center px-[12px] sm:px-[16px] md:px-[20px] transition-all duration-500 group-hover:bg-white/10 rounded-b-[12px]"
                    style={{
                      height: "90px",
                      background: "rgba(255,255,255,0.06)",
                      backdropFilter: "blur(3px)",
                      borderTop: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <h5 className="text-[14px] sm:text-[16px] md:text-[18px] font-semibold text-white truncate">
                      {item.title || ""}
                    </h5>
                    <p className="text-[12px] sm:text-[13px] md:text-[14px] text-white/80 mt-[6px] leading-tight line-clamp-2">
                      {item.description || ""}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}