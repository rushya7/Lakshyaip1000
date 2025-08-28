
import React from "react";
import { Home, Info, FileText, HelpCircle } from "lucide-react"; // icons
import { Link } from "react-router-dom";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import Footer from "../component/layout/footer";
import "../assets/css/Copyright.css";




const title = "TREADMARK";

const Trademark = () => {
  return (
    <>
      <Header />
      <PageHeader title={title} curPage={"TREADMARK"} />

      <div className="min-h-screen flex flex-col md:flex-row bg-white bg-opacity-10">

        {/* Main Content */}
        <main className=" font-sans flex-1 p-4 sm:p-6 md:p-10 flex justify-center">
          <div className="w-full max-w-md sm:max-w-lg md:max-w-4xl lg:max-w-6xl">

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 text-black text-center">
              TREADMARK
            </h1>

            {/* Description */}
            <div className="bg-white text-black p-8 leading-relaxed">
              <h1 className="text-3xl font-bold mb-6">Introduction – Why Trademarks Matter </h1>

              <p className="mb-4">
                In today’s competitive business world, brand identity is everything. A trademark is one of the most powerful tools to safeguard that identity. Whether it is a logo, brand name, tagline, packaging style, or even a unique sound, trademarks help businesses stand out and connect with customers.              </p>

              <p className="mb-4"> Consumers usually buy products not just for the quality, but also for the trust and reputation associated with the brand. Think of names like Nike, Coca-Cola, or Apple. These names and logos immediately create recognition, loyalty, and credibility. Without trademark protection, anyone could misuse these names and confuse customers, leading to financial and reputational damage.</p>

              <p className="mb-4">For small enterprises and startups, registering a trademark provides legal ownership of their brand identity, making it easier to attract investment, expand into new markets, and build long-term goodwill. Trademarks are also business assets that can be licensed, franchised, or even sold, generating additional revenue streams.</p>

              <p className="mb-4 font-semibold">In short, a trademark is not just a legal formality but a strategic business investment.</p>
            </div>
            <div className="copyright-article">
              <h1>TREADMARK – Questions & Answers</h1>

              {/* Q1 */}
              <div className="qa-block">
                <h3 className="question">Q1: What is a Trademark?</h3>
                <p className="answer">A trademark is a unique sign, symbol, word, phrase, design, or combination thereof that distinguishes one company’s goods or services from those of others.</p>
              </div>

              {/* Q2 */}
              <div className="qa-block">
                <h3 className="question">Q2: Who Can Apply for a Trademark?</h3>
                <p className="answer">
                  <li> Any individual, business, or organization using a mark to identify goods/services.</li>
                  <li> Startups can apply even before launching products (“proposed to be used” trademarks).</li>
                </p>
              </div>

              {/* Q3 */}
              <div className="qa-block">
                <h3 className="question">Q3: What Cannot Be Protected by Copyright?What Can Be Trademarked?</h3>
                <ul className="answer">
                  <li>Names & brand names (Pepsi, Tata, Infosys).</li>
                  <li>Logos & symbols (Nike swoosh, McDonald’s arches).</li>
                  <li>Taglines & slogans (“Just Do It”, “Because You’re Worth It”).</li>
                  <li>Shapes & packaging (Coca-Cola bottle shape).</li>
                  <li>Sounds & jingles (Nokia tune, MGM lion’s roar)..</li>
                  <li>Colors & combinations (Cadbury purple)..</li>
                </ul>
              </div>

              {/* Q4 */}
              <div className="qa-block">
                <h3 className="question">Q4: What Cannot Be Trademarked?</h3>
                <ul className="answer">
                  <li>Generic terms (e.g., “milk” for dairy products).</li>
                  <li>Descriptive words (e.g., “sweet” for sugar).</li>
                  <li>Offensive/immoral words or symbols.</li>
                  <li>National symbols, flags, or government insignia.</li>
                  <li>Identical or confusingly similar marks to existing ones.</li>
                </ul>
              </div>

              {/* Q5 */}
              <div className="qa-block">
                <h3 className="question">Q5:Duration of Trademark Protection</h3>
                <ul className="answer">
                  <li>In most countries, trademarks last for 10 years from registration and can be renewed indefinitely as long as they are in use.</li>
                  <li>Example: Coca-Cola’s trademark has been renewed for over 100 years.</li>
                </ul>
              </div>

              {/* Q6 */}
              <div className="qa-block">
                <h3 className="question">Q6: Difference Between Trademark, Patent, and Copyright?</h3>
                <ul className="answer">
                  <li>Trademark → Protects brand identity (logos, names, symbols).</li>
                  <li>Patent → Protects inventions and technical innovations..</li>
                  <li>Copyright → Protects creative expressions (books, music, films, software).</li>
                </ul>
              </div>

              {/* Q7 */}
              <div className="qa-block">
                <h3 className="question">Q7:How to Apply for a Trademark?</h3>
                <ul className="answer">
                  <li>Search & Clearance – Before filing, conduct a trademark search to ensure no similar mark exists.</li>
                  <li>Application Filing – File online/offline with details of applicant, mark, and class of goods/services.</li>
                  <li>Examination – Trademark office examines for distinctiveness and conflicts.</li>
                  <li>Publication – Accepted marks are published in the Trademark Journal for objections.</li>
                  <li>Opposition Period – If no objection within 4 months, the mark proceeds.</li>
                  <li>Registration – Certificate issued, and ® symbol can be used.</li>
                </ul>
              </div>

              {/* Q8 */}
              <div className="qa-block">
                <h3 className="question">Q8:What Documents Are Required?</h3>
                <ul className="answer">
                  <li>Application form.</li>
                  <li>Logo (if any).</li>
                  <li>Proof of business (partnership deed, incorporation certificate, GST).</li>
                  <li>Identity proof of applicant.</li>
                  <li>Power of Attorney if filed through agent/lawyer.</li>
                </ul>
              </div>

              {/* Q9 */}
              <div className="qa-block">
                <h3 className="question">Q9: Costs Involved?</h3>
                <ul className="answer">
                  <li>In India: ₹4,500 (individual/startup/SME) or ₹9,000 (companies) per class.</li>
                  <li>In the U.S.: $250–$350 per class.</li>
                  <li>In EU: €850 for one class, €50 each additional class.</li>
                </ul>
              </div>

              {/* Q10 */}
              <div className="qa-block">
                <h3 className="question">Q10:Steps & Timeline?</h3>
                <ul className="answer">
                  <li>Filing → 1 day.</li>
                  <li>Examination → 3–6 months.</li>
                  <li>Publication → 4 months.</li>
                  <li>Opposition → If none, registration within 6–12 months.</li>
                  <li>Entire process may take 12–18 months.</li>
                </ul>
              </div>

              {/* Q11 */}
              <div className="qa-block">
                <h3 className="question">Q11: Do You Need to Register to Get Protection?</h3>
                <p className="answer">
                  •	Common law rights exist just by using the trademark (™ symbol).<br />
                  •	But registration (® symbol) provides:

                </p>
                <ul className="answer">
                  <li>o	Nationwide legal protection.</li>
                  <li>o	Stronger enforcement in courts.</li>
                  <li>o	Public record of ownership.</li>
                </ul>
              </div>

              {/* Q12 */}
              <div className="qa-block">
                <h3 className="question">Q12: Iternational Protection of Trademarks?</h3>
                <p className="answer">
                  •	Trademarks are territorial (valid only in the country of registration). <br />
                  •	For global protection:
                </p>
                <ul className="answer">
                  <li>o	Madrid Protocol – Single application valid in 130+ member countries.</li>
                  <li>o	Separate filings in countries not part of Madrid.</li>
                </ul>
              </div>

              {/* Q13 */}
              <div className="qa-block">
                <h3 className="question">Q13: Trademark Infringement & Penalties?</h3>
                <ul className="answer">
                  <li>Infringement occurs when another person uses an identical or deceptively similar mark for similar goods/services.</li>
                  <li>Penalties include injunction, damages, destruction of counterfeit goods, and sometimes criminal liability.</li>
                  <li>Example: Selling fake Adidas shoes with a similar logo = infringement.</li>
                </ul>
              </div>

              {/* Q14 */}
              <div className="qa-block">
                <h3 className="question">Q14: How to Avoid Infringing Others’ Trademarks?</h3>

                <ul className="answer">
                  <li>	Always do a trademark search before launching a brand.</li>
                  <li>Avoid copying names/logos similar to famous brands.</li>
                  <li>Consult an IP lawyer for clearance.</li>
                </ul>
              </div>

              {/* Q15*/}
              <div className="qa-block">
                <h3 className="question">Q15: Licensing & Assignment</h3>

                <ul className="answer">
                  <li>Licensing → The owner permits another to use the trademark under defined conditions.</li>
                  <li>Assignment → Permanent transfer of ownership rights.</li>
                </ul>
              </div>

              {/* Q16*/}
              <div className="qa-block">
                <h3 className="question">Q16: Commercialization of Trademarks?</h3>

                <ul className="answer">
                  <li>Franchising (e.g., McDonald’s, Subway).</li>
                  <li>Merchandising (Disney characters on products).</li>
                  <li>Co-branding & collaborations.</li>
                  <li>Brand valuation for investment.</li>
                </ul>
              </div>

              {/* Q17*/}
              <div className="qa-block">
                <h3 className="question">Q17: Types of Trademarks & Scope of Protection</h3>

                <ul className="answer">
                  <li>1.	Word Marks – Business name (Google, Infosys).</li>
                  <li>2.	Logo/Device Marks – Visual design (Apple logo).</li>
                  <li>3.	Taglines – “Connecting People” (Nokia).</li>
                  <li>4.	Shape Marks – Coca-Cola bottle.</li>
                  <li>5.	Sound Marks – Intel chime.</li>
                  <li>6.	Color Marks – Tiffany blue.</li>
                  <li>7.	Collective Marks – Used by association members (CA Institute logo).</li>
                  <li>8.	Certification Marks – Quality standards (ISI, AGMARK).</li>
                </ul>
                <div className="example">
                  👉 Scope: Trademarks protect against unauthorized commercial use, but not against fair use (comparisons, academic references).
                </div>


                <div className="qa-block">
                  <h3 className="question">Q18: Myths & Misconceptions About Trademarks</h3>

                  <ul className="answer">
                    <li>•  Myth 1: “Trademark registration is only for big companies.”</li>
                    <li>•	✅ Reality: SMEs and startups benefit most, as it protects their brand early.</li>
                    <li>•  Myth 2: “Registration is valid worldwide.”</li>
                    <li>•	✅ Reality: Trademarks are territorial; separate applications are needed abroad.</li>
                    <li>•  Myth 3: “Once registered, you’re protected forever.”</li>
                    <li>•	✅ Reality: You must renew every 10 years and keep using the mark.</li>
                    <li>•  Myth 4: “Changing font or color avoids infringement.”</li>
                    <li>•	✅ Reality: Even minor similarity can still be infringement.</li>
                  </ul>
                  <div className="bg-white text-black p-8 leading-relaxed">
                    <h1 className="text-3xl font-bold mb-6">Conclusion </h1>

                    <p className="mb-4">
                      Trademarks are not just legal rights—they are business growth tools. A strong brand, backed by registered trademark protection, enhances credibility, customer trust, and market value. For entrepreneurs, securing a trademark early prevents disputes, saves costs, and adds long-term stability.
                         </p>



                  </div>



                </div>
              </div>
            </div>





          </div>
        </main>
      </div>
      <Footer />
    </>
  );

};

export default Trademark;

