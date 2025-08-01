export const ContractExpired = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-white">
      <div className="max-w-lg rounded-xl bg-primary px-5 py-16 flex flex-col gap-2">
        <h1 className="text-white font-bold text-xl text-center">
          Ooops, this Contract is expired call the support to re-create new
          contract for you
        </h1>
      </div>
    </div>
  );
};
