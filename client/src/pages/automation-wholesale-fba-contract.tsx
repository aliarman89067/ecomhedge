import { Button } from "@/components/ui/button";
// @ts-ignore
import html2Pdf from "html2pdf.js";
import { GlobeIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { useState, type ReactNode } from "react";
import { BsFileRichtext } from "react-icons/bs";
import { toast } from "sonner";

const AmazonAutomationContract = () => {
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");
  const [name, setName] = useState("");
  const [consultantName, setConsultantName] = useState("");
  const [isDownloading, setIsDownloading] = useState(false);

  const Heading = ({ heading, desc }: { heading: string; desc: string }) => {
    return (
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-9 bg-charcoal" />
          <span className="font-semibold text-lg text-charcoal">{heading}</span>
        </div>
        <p className="text-[#000000] text-base">{desc}</p>
      </div>
    );
  };
  const Point = ({
    point,
    heading,
    desc,
    isPoint = true,
    isMonthNames = false,
  }: {
    point: number;
    heading: string;
    desc: string;
    isPoint?: boolean;
    isMonthNames?: boolean;
  }) => {
    return (
      <div className="flex flex-col gap-1">
        <span className="font-semibold text-base text-charcoal">
          {isPoint && point + "."} {heading}
        </span>
        {isMonthNames && (
          <div className="flex flex-col ml-2">
            <span className="font-semibold text-base text-charcoal">
              BreakDown
            </span>
            <div className="flex flex-col">
              <span className="text-[#000000] text-base">
                First Month $1,000
              </span>
              <span className="text-[#000000] text-base">
                Second Month $1,000
              </span>
              <span className="text-[#000000] text-base">
                Third Month $1,000
              </span>
            </div>
            <span className="font-semibold text-base text-charcoal">
              Total Cost $4,000
            </span>
          </div>
        )}
        <p className="text-[#000000] text-base">{desc}</p>
      </div>
    );
  };

  const Header = () => {
    const getDate = () => {
      //     const options = {
      //   timeZone: 'America/New_York',
      //   day: '2-digit',
      //   month: '2-digit',
      //   year: 'numeric',
      // };

      const usaDate = new Intl.DateTimeFormat("en-GB", {
        timeZone: "America/New_York",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }).format(new Date());

      return usaDate.replace(/\//g, "-");
    };

    return (
      <>
        <h1 className="text-[#000000] font-bold text-3xl text-center">
          TikTok Shop (DS) Automation
        </h1>
        <span className="text-center text-[#000000] font-medium text-lg">
          Contract on: {getDate()} | With Ecom Automations Hub | www.Ecom
          Automations Hub.com
        </span>
      </>
    );
  };

  const BulletPoints = ({
    title,
    points,
    subBullets,
  }: {
    title: string;
    points: string[];
    subBullets?: ReactNode;
  }) => {
    return (
      <div className="flex flex-col gap-3">
        <h3 className="text-[#000000] text-base font-semibold">{title}</h3>
        <div className="flex flex-col gap-1">
          {points.map((point, index) => (
            <div
              key={index}
              className="text-[#000000] text-base flex items-center gap-1"
            >
              <div className="w-1 h-1 rounded-full bg-[#000000]" />
              {point}
            </div>
          ))}
        </div>
        {subBullets && <div className="ml-5">{subBullets}</div>}
      </div>
    );
  };

  const Footer = () => {
    return (
      <div className="bg-gradient-to-bl from-charcoal to-gold w-full justify-center gap-7 px-4 py-2 rounded-md flex items-center flex-wrap mt-auto">
        <span className="flex items-center gap-1">
          <MapPinIcon color="#ffffff" className="text-[#ffffff] size-4" />
          <p className="text-[#ffffff] text-sm">
            777 S Central Expy #4h Richardson, TX 75080, USA
          </p>
        </span>
        <span className="flex items-center gap-1">
          <MailIcon color="#ffffff" className="text-[#ffffff] size-4" />
          <p className="text-[#ffffff] text-sm">
            info@Ecom Automations Hub.com
          </p>
        </span>
        <span className="flex items-center gap-1">
          <GlobeIcon color="#ffffff" className="text-[#ffffff] size-4" />
          <p className="text-[#ffffff] text-sm">
            https://Ecom Automations Hub.com
          </p>
        </span>
        <span className="flex items-center gap-1">
          <PhoneIcon color="#ffffff" className="text-[#ffffff] size-4" />
          <p className="text-[#ffffff] text-sm">+1(469) 935-7701</p>
        </span>
      </div>
    );
  };

  const pointsFor1 = [
    {
      heading: "Product Research and Selection:",
      desc: "We conduct extensive research to identify trending, high-demand products that align with market needs. Our data-driven approach ensures the selection of products with the highest sales potential.",
    },
    {
      heading: "tikTok shop (DS) Seller Account Setup",
      desc: "We take care of the entire seller account setup process, including verification and compliance, ensuring a seamless launch of your tikTok shop (DS) store.",
    },
    {
      heading: "Branding For tikTok shop (DS)",
      desc: "Branding plays a crucial role in differentiation. We create a distinct brand identity for your store, including logo design, brand colors, and an appealing aesthetic tailored to attract your target audience.",
    },
    {
      heading: "Store Management",
      desc: "We handle inventory management, order fulfillment, and overall store operations to ensure smooth functionality and an excellent customer experience.",
    },
    {
      heading: "Organic Sales",
      desc: "We implement content strategies and SEO optimization to boost your store’s visibility and engagement. Our marketing efforts enhance reach, maximize sales, and drive customer acquisition.",
    },
  ];

  const pointsFor2 = [
    {
      heading: "Optimize E-commerce Operations",
      desc: "Simplifying store management through automation, allowing you to focus on growth.",
    },
    {
      heading: "Increase Sales & Revenue",
      desc: "Leveraging research, branding, and marketing strategies to maximize profit.",
    },
    {
      heading: "Boost Brand Visibility",
      desc: "Enhancing brand recognition through strategic positioning and advertising.",
    },
    {
      heading: "Ensure Customer Satisfaction",
      desc: "Providing efficient store management and superior customer service.",
    },
    {
      heading: "Sustainable Business Growth",
      desc: "Continuous optimization of product selection, marketing, and customer engagement for long-term success.",
    },
  ];
  const pointsFor3 = [
    {
      heading: "Expertise",
      desc: "Our team has years of experience in e-commerce, marketplace automation, and product management. We understand the complexities of tikTok shop (DS)  platform and implement proven strategies to ensure success.",
    },
    {
      heading: "Comprehensive Service",
      desc: "We offer an end-to-end tikTok shop (DS)  solution, covering everything from product research, account setup, branding, and inventory management to digital marketing and customer engagement.",
    },
    {
      heading: "Data-Driven Approach",
      desc: "We make informed decisions backed by real-time analytics and market research. This allows us to identify high-converting products, optimize pricing strategies, and enhance customer acquisition.",
    },
    {
      heading: "Customer-Centric Approach",
      desc: "Our focus is not just on selling but on creating an excellent shopping experience for customers. We ensure that your store delivers high-quality service, leading to positive reviews, repeat customers, and sustainable growth.",
    },
    {
      heading: "Proven Success",
      desc: "We have a track record of successfully launching and scaling tikTok shop (DS) . Our strategies are tailored to meet tikTok shop (DS)  requirements and best practices, ensuring long-term profitability.",
    },
  ];
  const pointsFor4 = [
    {
      heading: "Product Hunting",
      desc: "7 to 10 Working Days",
    },
    {
      heading: "Product Sourcing",
      desc: "3 to 5 Working Days",
    },
    {
      heading: "tikTok shop (DS) Seller Account Setup",
      desc: "10 to 15 Working Days",
    },
    {
      heading: "tikTok shop (DS) Content",
      desc: "1 to 2 Working Days",
    },
    {
      heading: "Product Packaging and Branding",
      desc: "5 to 10 Working Days",
    },
  ];
  const bulletPoints1 = [
    "tikTok shop (DS) store creation & approval",
    "Product research, listing, and SEO optimization",
    "Order processing and fulfillment",
    "24/7 account monitoring & customer service",
    "Access to proprietary automation platform",
    "Sales management & profit generation",
    "Gift card system integration (as needed)",
    "Platform maintenance, tools, & software",
    "All legal paperwork managed and delivered",
  ];
  const bulletPoints3 = [
    "Store typically stabilizes in ~6 months post-launch",
    "Until then, Client retains 100% of profits",
    "After stabilization:",
  ];
  const bulletPoints4 = [
    "Stripe",
    "PayPal",
    "Wise",
    "Wire Bank Transfer (Preferred for smoother, secure processing)",
  ];

  const bulletPoints5 = [
    "The client retains ownership of all assets developed under this project, including social media pages and the tikTok shop (DS) Seller Account",
    "Either party may terminate this agreement by providing a one-month written notice. Upon termination, any outstanding profits will be calculated and distributed based on the agreed profit split.",
    "Both parties agree to maintain confidentiality regarding financial details and business strategies, ensuring no disclosure to third parties without prior written consent.",
  ];
  const bulletPoints6 = [
    "Insolvency or bankruptcy filing by either party.",
    "Appointment of a trustee or similar agent over any business assets.",
    "Assignment of business assets for creditor benefits.",
    "Ecom Automations Hub’s failure to comply with the defined payment terms.",
  ];

  const handleDownload = ({ isSignature }: { isSignature: boolean }) => {
    let pages: any[] = [];
    const target1 = document.getElementById("pdf-content1");
    const target2 = document.getElementById("pdf-content2");
    const target3 = document.getElementById("pdf-content3");
    const target4 = document.getElementById("pdf-content4");
    const target5 = document.getElementById("pdf-content5");
    const target6 = document.getElementById("pdf-content6");
    const target7 = document.getElementById("pdf-content7");
    const target8 = document.getElementById("pdf-content8");
    const target9 = document.getElementById("pdf-content9");
    const target10 = document.getElementById("pdf-content10");
    if (isSignature) {
      pages = [
        target1,
        target2,
        target3,
        target4,
        target5,
        target6,
        target7,
        target8,
        target10,
      ];
    } else {
      pages = [
        target1,
        target2,
        target3,
        target4,
        target5,
        target6,
        target7,
        target8,
        target9,
      ];
    }
    const filename = `contract-${Date.now()}.pdf`;
    setIsDownloading(true);
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
        .finally(() => {
          setIsDownloading(false);
        });
    }
    doc.save();
  };
  const handleSignature = () => {
    if (
      !date1.trim() ||
      !date2.trim() ||
      !name.trim() ||
      !consultantName.trim()
    ) {
      toast.error("Please fill all the fields");
      return;
    }
    handleDownload({ isSignature: true });
  };

  return (
    <section className="w-full py-5 flex flex-col gap-6 items-center justify-center bg-gray-300">
      <Button
        disabled={isDownloading}
        onClick={() => handleDownload({ isSignature: false })}
        className="ml-auto mr-10"
      >
        {isDownloading ? "Downloading..." : "Download PDF"}
        <BsFileRichtext />
      </Button>
      <div
        id="pdf-content1"
        className="max-w-5xl w-full flex flex-col gap-4 px-8 py-8 bg-white min-h-[11in]"
      >
        <div className="relative bg-gradient-to-bl from-charcoal to-gold w-full px-5 py-7 overflow-hidden">
          <div className="w-52 h-52 bg-[rgba(255,255,255,0.3)] rounded-full absolute -left-10 -top-8" />
          <img
            src="/logo.png"
            alt="Logo"
            className="w-32 object-contain z-10 relative"
          />
        </div>

        <Header />

        <Heading
          heading="Scope and Goals"
          desc="Ecom Automations Hub offers a complete tikTok shop (DS)  service, optimizing e-commerce operations to enhance profitability. Our cutting-edge strategies ensure a smooth and efficient selling experience on tikTok shop (DS) . Below are the key services covered under our tikTok shop (DS)  package:"
        />
        {pointsFor1.map((item, index) => (
          <Point
            key={index}
            point={index + 1}
            heading={item.heading}
            desc={item.desc}
          />
        ))}
        <Footer />
      </div>
      <div
        id="pdf-content2"
        className="max-w-5xl w-full flex flex-col gap-4 px-8 py-8 bg-white min-h-[11in]"
      >
        <div className="relative bg-gradient-to-bl from-charcoal to-gold w-full px-5 py-7 overflow-hidden">
          <div className="w-52 h-52 bg-[rgba(255,255,255,0.3)] rounded-full absolute -left-10 -top-8" />
          <img
            src="/logo.png"
            alt="Logo"
            className="w-32 object-contain z-10 relative"
          />
        </div>
        <Header />
        <Heading heading="Goals For tikTok shop (DS) " desc="" />
        {pointsFor2.map((item, index) => (
          <Point
            key={index}
            point={index + 1}
            heading={item.heading}
            desc={item.desc}
          />
        ))}
        <Footer />
      </div>
      <div
        id="pdf-content3"
        className="max-w-5xl w-full flex flex-col gap-4 px-8 py-8 bg-white min-h-[11in]"
      >
        <div className="relative bg-gradient-to-bl from-charcoal to-gold w-full px-5 py-7 overflow-hidden">
          <div className="w-52 h-52 bg-[rgba(255,255,255,0.3)] rounded-full absolute -left-10 -top-8" />
          <img
            src="/logo.png"
            alt="Logo"
            className="w-32 object-contain z-10 relative"
          />
        </div>
        <Header />
        <Heading heading="Why Choose Ecom Automations Hub?" desc="" />
        {pointsFor3.map((item, index) => (
          <Point
            key={index}
            point={index + 1}
            heading={item.heading}
            desc={item.desc}
          />
        ))}
        <Footer />
      </div>
      <div
        id="pdf-content4"
        className="max-w-5xl w-full flex flex-col gap-4 px-8 py-8 bg-white min-h-[11in]"
      >
        <div className="relative bg-gradient-to-bl from-charcoal to-gold w-full px-5 py-7 overflow-hidden">
          <div className="w-52 h-52 bg-[rgba(255,255,255,0.3)] rounded-full absolute -left-10 -top-8" />
          <img
            src="/logo.png"
            alt="Logo"
            className="w-32 object-contain z-10 relative"
          />
        </div>
        <Header />
        <Heading
          heading="Timeline"
          desc="In order to effectively implement everything necessary to make your business a success, we'll need around 4 - 5 weeks. We'll start right away after you've signed the proposal."
        />
        {pointsFor4.map((item, index) => (
          <Point
            key={index}
            isPoint={false}
            point={index + 1}
            heading={item.heading}
            desc={item.desc}
          />
        ))}
        <Footer />
      </div>
      <div
        id="pdf-content5"
        className="max-w-5xl w-full flex flex-col gap-4 px-8 py-8 bg-white min-h-[11in]"
      >
        <div className="relative bg-gradient-to-bl from-charcoal to-gold w-full px-5 py-7 overflow-hidden">
          <div className="w-52 h-52 bg-[rgba(255,255,255,0.3)] rounded-full absolute -left-10 -top-8" />
          <img
            src="/logo.png"
            alt="Logo"
            className="w-32 object-contain z-10 relative"
          />
        </div>
        <Header />
        <Heading
          heading="tikTok shop (DS)  Plan – Package Breakdown"
          desc="In order to effectively implement everything necessary to make your business a success, we'll need around 4 - 5 weeks. We'll start right away after you've signed the proposal."
        />
        <Point
          isPoint={false}
          isMonthNames
          heading="Total Investment of One-Year Management & Platform Fees: $4,000 ($1,000 Monthly Instalment)"
          desc="This covers everything needed to set up, manage, and scale your tikTok shop (DS) dropshipping business."
          point={1}
        />
        <BulletPoints title="Include:" points={bulletPoints1} />
        <Footer />
      </div>
      <div
        id="pdf-content6"
        className="max-w-5xl w-full flex flex-col gap-4 px-8 py-8 bg-white min-h-[11in]"
      >
        <div className="relative bg-gradient-to-bl from-charcoal to-gold w-full px-5 py-7 overflow-hidden">
          <div className="w-52 h-52 bg-[rgba(255,255,255,0.3)] rounded-full absolute -left-10 -top-8" />
          <img
            src="/logo.png"
            alt="Logo"
            className="w-32 object-contain z-10 relative"
          />
        </div>
        <Header />
        <Heading heading="Profit Structure & Timeline" desc="" />
        <BulletPoints
          title=""
          points={bulletPoints3}
          subBullets={
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1">
                <div className="w-1 h-1 rounded-full bg-[#ffffff] border border-[#000000]" />
                <span className="text-[#000000]  text-base">
                  <b>80% profits to Client</b>
                </span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-1 h-1 rounded-full bg-[#ffffff] border border-[#000000]" />
                <span className="text-[#000000] text-base">
                  <b>20% profits to Ecom Automations Hub</b> for ongoing scale &
                  management
                </span>
              </div>
            </div>
          }
        />
        <BulletPoints title="Accepted Payment Methods" points={bulletPoints4} />
        <Footer />
      </div>
      <div
        id="pdf-content7"
        className="max-w-5xl w-full flex flex-col gap-4 px-8 py-8 bg-white min-h-[11in]"
      >
        <div className="relative bg-gradient-to-bl from-charcoal to-gold w-full px-5 py-7 overflow-hidden">
          <div className="w-52 h-52 bg-[rgba(255,255,255,0.3)] rounded-full absolute -left-10 -top-8" />
          <img
            src="/logo.png"
            alt="Logo"
            className="w-32 object-contain z-10 relative"
          />
        </div>
        <Header />
        <Heading heading="Contract and Statement of Work" desc="" />
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1 text-base">
            <b>Name: </b>
            <span>Leon Tran</span>
          </div>
          <div className="flex items-center gap-1 text-base">
            <b>Address: </b>
            <span>1413-Dentwood-drive-Garland-Texas-75041</span>
          </div>
          <div className="flex items-center gap-1 text-base">
            <b>Email: </b>
            <span>leonxtprofessional@gmail.com</span>
          </div>
          <div className="flex items-center gap-1 text-base">
            <b>Phone: </b>
            <span>+1(469)7131745</span>
          </div>
        </div>
        <Point
          point={1}
          isPoint={false}
          heading="Cooperation"
          desc="Ecom Automations Hub is committed to delivering the outlined services with the highest level of effort and professionalism. The client agrees to provide all necessary information and maintain open communication to facilitate the successful execution of the project."
        />
        <Point
          point={1}
          isPoint={false}
          heading="Charging of our Services"
          desc="Any additional services requested beyond the agreed scope will result in an adjustment to the charges. If a project remains inactive for more than 90 days, reactivation fees may apply at the discretion of Ecom Automations Hub."
        />
        <BulletPoints
          title="Project Cost:"
          points={["Total Service Cost: $4,000 USD for tikTok shop (DS) "]}
        />
        <Footer />
      </div>
      <div
        id="pdf-content8"
        className="max-w-5xl w-full flex flex-col gap-4 px-8 py-8 bg-white min-h-[11in]"
      >
        <div className="relative bg-gradient-to-bl from-charcoal to-gold w-full px-5 py-7 overflow-hidden">
          <div className="w-52 h-52 bg-[rgba(255,255,255,0.3)] rounded-full absolute -left-10 -top-8" />
          <img
            src="/logo.png"
            alt="Logo"
            className="w-32 object-contain z-10 relative"
          />
        </div>
        <Header />
        <Heading
          heading="Ecom Automations Hub and Client Responsibilities"
          desc="This agreement is entered into between Ecom Automations Hub (Service Provider) and Joseph (Client) to define the terms of tikTok shop (DS) , including the profit-sharing structure."
        />
        <BulletPoints title="" points={bulletPoints5} />
        <BulletPoints title="Partnership and Profit Split" points={[]} />
        <BulletPoints
          title="First 5 Months"
          points={["100% of the profits go to the Client"]}
        />
        <BulletPoints
          title="After 5 Months"
          points={[
            "20% of the profits go to Ecom Automations Hub",
            "In exchange for continued professional services & store management",
          ]}
        />
        <p className="text-[#000000] text-base">
          This arrangement remains in effect as long as Ecom Automations Hub
          continues managing the Client’s tikTok shop (DS) . Profit calculation
          will be based on total revenue minus all associated expenses,
          including but not limited to product costs, shipping fees, tikTok shop
          (DS) charges, and operational expenses.
        </p>
        <Footer />
      </div>
      <div
        id="pdf-content9"
        className="max-w-5xl w-full flex flex-col gap-4 px-8 py-8 bg-white min-h-[11in]"
      >
        <div className="relative bg-gradient-to-bl from-charcoal to-gold w-full px-5 py-7 overflow-hidden">
          <div className="w-52 h-52 bg-[rgba(255,255,255,0.3)] rounded-full absolute -left-10 -top-8" />
          <img
            src="/logo.png"
            alt="Logo"
            className="w-32 object-contain z-10 relative"
          />
        </div>
        <Header />
        <Heading
          heading="Termination"
          desc="This agreement will be effective from the date of signing and will remain valid until either party provides a 30-day written notice for termination. Immediate termination can be initiated under the following conditions:"
        />
        <BulletPoints title="" points={bulletPoints6} />
        <Heading
          heading="Severability"
          desc="If any part of this agreement is found to be illegal or unenforceable under applicable laws, that section will be considered null and void, while the remaining provisions will continue to be fully effective."
        />
        <Point heading="Signature Form" desc="" point={1} isPoint={false} />
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
          disabled={isDownloading}
          onClick={handleSignature}
          className="bg-gradient-to-b disabled:opacity-90 disabled:cursor-not-allowed from-charcoal to-gold px-6 py-3 text-lg font-medium text-white w-fit mt-3 cursor-pointer"
        >
          {isDownloading ? "Generating..." : "Generate Signature"}
        </button>
        <Footer />
      </div>
      <div className="hidden">
        <div
          id="pdf-content10"
          className="max-w-5xl w-full flex flex-col gap-4 px-8 py-8 bg-white min-h-[11in]"
        >
          <div className="relative bg-gradient-to-bl from-charcoal to-gold w-full px-5 py-7 overflow-hidden">
            <div className="w-52 h-52 bg-[rgba(255,255,255,0.3)] rounded-full absolute -left-10 -top-8" />
            <img
              src="/logo.png"
              alt="Logo"
              className="w-32 object-contain z-10 relative"
            />
          </div>
          <Header />
          <Heading heading="Client Information" desc="" />
          <label className="flex items-center">
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
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default AmazonAutomationContract;
