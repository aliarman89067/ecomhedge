import { useEffect, useState, type FormEvent } from "react";
import { useParams } from "react-router-dom";
// @ts-ignore
import html2Pdf from "html2pdf.js";
import { contractTypes } from "@/constant";
import { toast } from "sonner";
import axios from "axios";
import { ContractExpired } from "./contract-expired";

const ClientContract = () => {
  const { type, id } = useParams();
  const [name, setName] = useState("");
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");
  const [consultantName, setConsultantName] = useState("");
  const [isExpired, setIsExpired] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [html, setHtml] = useState<
    {
      key: string;
      value: string;
    }[]
  >([]);

  useEffect(() => {
    const loadContract = async () => {
      try {
        const { data } = await axios.get(
          import.meta.env.VITE_API_BASE_URL! + `/api/v1/contract/client/${id}`
        );
        if (data?.isExpired) {
          setIsExpired(true);
        }
        setHtml(data.html);
      } catch (error) {
        console.log(error);
      }
    };
    loadContract();
  }, [id]);

  const handleDownloadPdf = async () => {
    let pages = html.map((item) => document.getElementById(item.key));
    setIsDownloading(true);
    pages = [...pages, document.getElementById("client-details")];
    const filename = `contract-${Date.now()}.pdf`;

    let doc = html2Pdf().set({ filename }).from(pages[0]).toPdf();
    for (let j = 1; j < pages.length; j++) {
      doc = doc
        .get("pdf")
        .then((pdf: any) => {
          pdf.addPage();
        })
        .from(pages[j])
        .toContainer()
        .toCanvas()
        .toPdf()
        .finally(() => {});
    }
    const blob = await doc.output("blob");

    await uploadToS3(blob, filename, id);
    setIsDownloading(false);
  };

  const uploadToS3 = async (
    blob: Blob,
    filename: string,
    id: string | undefined
  ) => {
    const { data } = await axios.get(
      import.meta.env.VITE_API_BASE_URL! +
        `/api/v1/contract/upload-url/${filename}`
    );
    const res = await axios.put(data.url, blob, {
      headers: {
        "Content-Type": "application/pdf",
      },
    });
    if (res.status === 200) {
      const fileUrl = `https://ecomautomationshub.s3.eu-north-1.amazonaws.com/${filename}`;
      await axios.post(
        import.meta.env.VITE_API_BASE_URL! + `/api/v1/contract/send-pdf`,
        {
          fileUrl,
          id,
        }
      );
      downloadFromS3(fileUrl, filename);
    } else {
      toast.error("Something went wrong");
    }
  };

  const downloadFromS3 = async (fileUrl: string, filename: string) => {
    try {
      const response = await fetch(fileUrl, {
        method: "GET",
        mode: "cors", // Ensure CORS is enabled in S3
      });

      if (!response.ok) throw new Error("Failed to fetch file");

      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      link.remove();

      window.URL.revokeObjectURL(blobUrl);
    } catch (err) {
      console.error("Download error:", err);
      alert("File could not be downloaded. Please try again.");
    }
  };

  const handleSignature = (e: FormEvent) => {
    e.preventDefault();
    if (
      !date1.trim() ||
      !date2.trim() ||
      !name.trim() ||
      !consultantName.trim()
    ) {
      toast.error("Please fill all the fields");
      return;
    }
    handleDownloadPdf();
  };

  if (isExpired) {
    return <ContractExpired />;
  }

  const currentType = contractTypes.find((item) => item.label === type);
  return (
    <div className="relative flex flex-col gap-5 py-10 items-center bg-gray-300">
      {html.map((item) => (
        <div
          key={item.key}
          id={item.key}
          className="bg-white flex flex-col max-w-5xl w-full min-h-[11.5in] p-6 justify-between"
        >
          <div
            className="flex flex-col"
            dangerouslySetInnerHTML={{
              __html: item.value,
            }}
          />
          <img
            src="/contractFooter.jpg"
            alt="Contract Footer"
            className="w-full"
          />
        </div>
      ))}
      <div
        id="client-info"
        className="bg-white flex flex-col max-w-5xl w-full min-h-[11.5in] p-6 justify-between"
      >
        <div className="flex flex-col">
          <img
            src="/contractHeader.jpg"
            alt="Header Image"
            className="w-full object-contain"
          />
          <h1 className="text-3xl font-bold text-center">
            {currentType?.title}
          </h1>
          <span className="text-lg text-center mt-6">
            Contract on: 30-07-2025 | With EcomAsis | www.ecomasis.com
          </span>
          <h3 className="font-semibold text-lg mt-5">Termination</h3>
          <span className="text-sm">
            This agreement will be effective from the date of signing and will
            remain valid until either party provides a 30-day written notice for
            termination. Immediate termination can be initiated under the
            following conditions:
          </span>
          <div className="mt-6 flex flex-col gap-1">
            <span className="text-sm">
              1. Insolvency or bankruptcy filing by either party.
            </span>
            <span className="text-sm">
              2. Appointment of a trustee or similar agent over any business
              assets.
            </span>
            <span className="text-sm">
              3. Assignment of business assets for creditor benefits.
            </span>
            <span className="text-sm">
              4. Ecomasis’s failure to comply with the defined payment terms.
            </span>
          </div>
          <h3 className="font-semibold text-lg mt-5">Severability</h3>
          <span className="text-sm">
            If any part of this agreement is found to be illegal or
            unenforceable under applicable laws, that section will be considered
            null and void, while the remaining provisions will continue to be
            fully effective.
          </span>
          <form onSubmit={handleSignature}>
            <h3 className="font-semibold text-base my-5">Signature Form</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-semibold text-[#000000]">Date</h3>
                <input
                  type="date"
                  value={date1}
                  onChange={(e) => setDate1(e.target.value)}
                  className="border-b-2 border-[#000000] bg-white outline-transparent"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-semibold text-[#000000]">Date</h3>
                <input
                  type="date"
                  value={date2}
                  onChange={(e) => setDate2(e.target.value)}
                  className="border-b-2 border-[#000000] bg-white outline-transparent"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-semibold text-[#000000]">
                  Client Name
                </h3>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border-b-2 border-[#000000] bg-white outline-transparent"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-semibold text-[#000000]">
                  Consultant Name
                </h3>
                <input
                  value={consultantName}
                  onChange={(e) => setConsultantName(e.target.value)}
                  className="border-b-2 border-[#000000] bg-white outline-transparent"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={isDownloading}
              className="bg-gradient-to-b disabled:opacity-90 disabled:cursor-not-allowed from-charcoal to-gold px-6 py-3 text-lg font-medium text-white w-fit mt-3 cursor-pointer"
            >
              {isDownloading ? "Generating..." : "Generate Signature"}
            </button>
          </form>
        </div>
        <img
          src="/contractFooter.jpg"
          alt="Header Image"
          className="w-full object-contain mt-auto"
        />
      </div>
      <div className="hidden">
        <div
          id="client-details"
          className="bg-white max-w-5xl w-full min-h-[11.5in] p-6 flex flex-col"
        >
          <div>
            <img
              src="/contractHeader.png"
              alt="Header Image"
              className="w-full object-contain"
            />
            <label className="flex items-center mt-10">
              <span className="w-[250px] text-[#000000] font-semibold text-lg">
                Client Name
              </span>
              <span className="text-[#000000] text-lg">{name}</span>
            </label>
            <label className="flex items-center">
              <span className="w-[250px] text-[#000000] font-semibold text-lg">
                Consultant Name
              </span>
              <span className="text-[#000000] text-lg">{consultantName}</span>
            </label>
            <label className="flex items-center">
              <span className="w-[250px] text-[#000000] font-semibold text-lg">
                Client Date
              </span>
              <span className="text-[#000000] text-lg">{date1}</span>
            </label>
            <label className="flex items-center">
              <span className="w-[250px] text-[#000000] font-semibold text-lg">
                Consultant Date
              </span>
              <span className="text-[#000000] text-lg">{date2}</span>
            </label>
          </div>
          <img
            src="/contractFooter.jpg"
            alt="Header Image"
            className="w-full object-contain mt-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ClientContract;
