export const WetButton = ({ title }: { title: string }) => {
  return (
    <button className="cursor-pointer group relative rounded bg-secondary px-4 py-2.5 font-semibold text-background hover:text-white transition-colors hover:bg-black">
      {title}

      {/* Drip 1 */}
      <div
        className="absolute top-[99%] origin-top"
        style={{ left: "10%", transform: "scaleY(0.883326) translateZ(0px)" }}
      >
        <div
          style={{ height: "24px" }}
          className="w-2 rounded-b-full bg-secondary transition-colors group-hover:bg-black"
        ></div>
        {/* Left SVG */}
        <svg
          width="6"
          height="6"
          viewBox="0 0 6 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-full top-0"
        >
          <g clipPath="url(#clip0)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
              className="fill-secondary transition-colors group-hover:fill-black"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="6" height="6" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>
        {/* Right SVG */}
        <svg
          width="6"
          height="6"
          viewBox="0 0 6 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-full top-0 rotate-90"
        >
          <g clipPath="url(#clip0)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
              className="fill-secondary transition-colors group-hover:fill-black"
            ></path>
          </g>
        </svg>
        <div
          className="absolute top-full h-2 w-2 rounded-full bg-secondary transition-colors group-hover:bg-black"
          style={{
            opacity: 0.415041,
            transform: "translateY(25.9276px) translateZ(0px)",
          }}
        ></div>
      </div>

      {/* Drip 2 */}
      <div
        className="absolute top-[99%] origin-top"
        style={{ left: "30%", transform: "scaleY(0.75) translateZ(0px)" }}
      >
        <div
          style={{ height: "20px" }}
          className="w-2 rounded-b-full bg-secondary transition-colors group-hover:bg-black"
        ></div>
        <svg
          width="6"
          height="6"
          viewBox="0 0 6 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-full top-0"
        >
          <g clipPath="url(#clip0)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
              className="fill-secondary transition-colors group-hover:fill-black"
            ></path>
          </g>
        </svg>
        <svg
          width="6"
          height="6"
          viewBox="0 0 6 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-full top-0 rotate-90"
        >
          <g clipPath="url(#clip0)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
              className="fill-secondary transition-colors group-hover:fill-black"
            ></path>
          </g>
        </svg>
        <div
          className="absolute top-full h-2 w-2 rounded-full bg-secondary transition-colors group-hover:bg-black"
          style={{ opacity: 0, transform: "translateY(50px) translateZ(0px)" }}
        ></div>
      </div>

      {/* Drip 3 */}
      <div
        className="absolute top-[99%] origin-top"
        style={{ left: "57%", transform: "scaleY(0.827988) translateZ(0px)" }}
      >
        <div
          style={{ height: "10px" }}
          className="w-2 rounded-b-full bg-secondary transition-colors group-hover:bg-black"
        ></div>
        <svg
          width="6"
          height="6"
          viewBox="0 0 6 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-full top-0"
        >
          <g clipPath="url(#clip0)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
              className="fill-secondary transition-colors group-hover:fill-black"
            ></path>
          </g>
        </svg>
        <svg
          width="6"
          height="6"
          viewBox="0 0 6 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-full top-0 rotate-90"
        >
          <g clipPath="url(#clip0)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
              className="fill-secondary transition-colors group-hover:fill-black"
            ></path>
          </g>
        </svg>
        <div
          className="absolute top-full h-2 w-2 rounded-full bg-secondary transition-colors group-hover:bg-black"
          style={{
            opacity: 0.238572,
            transform: "translateY(36.1628px) translateZ(0px)",
          }}
        ></div>
      </div>

      {/* Drip 4 */}
      <div
        className="absolute top-[99%] origin-top"
        style={{ left: "85%", transform: "scaleY(0.95681) translateZ(0px)" }}
      >
        <div
          style={{ height: "16px" }}
          className="w-2 rounded-b-full bg-secondary transition-colors group-hover:bg-black"
        ></div>
        <svg
          width="6"
          height="6"
          viewBox="0 0 6 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-full top-0"
        >
          <g clipPath="url(#clip0)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
              className="fill-secondary transition-colors group-hover:fill-black"
            ></path>
          </g>
        </svg>
        <svg
          width="6"
          height="6"
          viewBox="0 0 6 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-full top-0 rotate-90"
        >
          <g clipPath="url(#clip0)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.4 0H0V5.4C0 2.41765 2.41766 0 5.4 0Z"
              className="fill-secondary transition-colors group-hover:fill-black"
            ></path>
          </g>
        </svg>
        <div
          className="absolute top-full h-2 w-2 rounded-full bg-secondary transition-colors group-hover:bg-black"
          style={{
            opacity: 0.924222,
            transform: "translateY(-3.60489px) translateZ(0px)",
          }}
        ></div>
      </div>
    </button>
  );
};
