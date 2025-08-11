export const CTAButton = ({
  title,
  onClick,
}: {
  title: string;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className="group relative w-fit transition-transform duration-300 active:scale-95 cursor-pointer"
    >
      <button className="relative z-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 p-0.5 cursor-pointer duration-300 group-hover:scale-110">
        <span className="block rounded-md bg-slate-950 px-10 py-4 font-semibold text-slate-100 duration-300 group-hover:bg-slate-950/50 group-hover:text-slate-50 group-active:bg-slate-950/80">
          {title}
        </span>
      </button>
      <span className="pointer-events-none absolute -inset-4 z-0 transform-gpu rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 opacity-30 blur-xl transition-all duration-300 group-hover:opacity-60 group-active:opacity-50"></span>
    </div>
  );
};
