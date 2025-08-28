
import React from "react";
import { Home, Info, FileText, HelpCircle } from "lucide-react"; // icons
import { Link } from "react-router-dom";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import Footer from "../component/layout/footer";
import "../assets/css/Copyright.css";




const title = "Copyright";

const Trademark = () => {
  return (
    <>
      <Header />
      <PageHeader title={title} curPage={"Copyright"} />

      <div className="min-h-screen flex flex-col md:flex-row bg-white bg-opacity-10">

        {/* Sidebar */}
        {/* <aside className="hidden md:flex md:flex-col w-64 bg-gray-100/10 backdrop-blur-md border-r border-gray-300/20 shadow-xl p-6 space-y-6">
        <h2 className="text-2xl font-bold text-black text-center mb-6">Menu</h2>
        <nav className="flex flex-col gap-4">
          <a href="/" className="flex items-center gap-3 text-black hover:text-gray-700 transition">
            <Home size={20} /> Home
          </a>
          <a href="#" className="flex items-center gap-3 text-black hover:text-gray-700 transition">
            <Info size={20} /> About Trademark
          </a>
          <a href="#" className="flex items-center gap-3 text-black hover:text-gray-700 transition">
            <FileText size={20} /> Registration Process
          </a>
          <a href="#" className="flex items-center gap-3 text-black hover:text-gray-700 transition">
            <HelpCircle size={20} /> FAQs
          </a>
        </nav>
      </aside> */}

        {/* Main Content */}
        <main className=" font-sans flex-1 p-4 sm:p-6 md:p-10 flex justify-center">
          <div className="w-full max-w-md sm:max-w-lg md:max-w-4xl lg:max-w-6xl">

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 text-black text-center">
              Copyright
            </h1>

            {/* Description */}
            <div className="bg-white text-black p-8 leading-relaxed">
              <h1 className="text-3xl font-bold mb-6">Introduction – Why Copyright Matters</h1>

              <p className="mb-4">
                We live in an age where ideas and creativity drive business growth. From books, music, films, and software to digital marketing content, photographs, and packaging—creative works surround us in every industry. But creativity has one major risk: it can be easily copied. A song can be pirated, a book can be reproduced without permission, a software code can be stolen, or a brand’s original design can be duplicated. Such acts not only hurt the creator financially but also damage their brand reputation.
              </p>

              <p className="mb-4 font-semibold">This is why copyright protection is vital.</p>

              <p className="mb-4">
                Copyright is a form of intellectual property (IP) that gives creators exclusive legal rights over their original works. These rights allow the creator to decide how their work is used, distributed, reproduced, performed, or adapted. Simply put, copyright ensures that the economic and moral benefits of creativity stay with the rightful owner.
              </p>

              <h2 className="text-xl font-bold mt-6 mb-2">For example:</h2>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>An author can stop others from copying or selling their book without permission.</li>
                <li>A software company can stop competitors from illegally using their code.</li>
                <li>A photographer can license their pictures to clients while preventing misuse.</li>
                <li>A film producer can earn revenue through broadcasting and streaming rights.</li>
              </ul>

              <h2 className="text-xl font-bold mt-6 mb-3">For small businesses and startups, copyright matters more than most realize. Many companies invest heavily in websites, advertisements, logos, videos, product catalogs, and software tools—all of which are protectable under copyright. By registering and enforcing these rights, businesses can:</h2>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Build a unique brand identity.</li>
                <li>Prevent competitors from stealing marketing content.</li>
                <li>Monetize their creative assets through licensing and royalties.</li>
                <li>Enhance company valuation since copyright is an intangible asset.</li>
              </ul>

              <p className="mb-4">
                At the global level, copyright protection also fuels innovation and cultural development. Artists feel motivated to create new music, writers to publish books, and developers to design software when they know their rights are protected by law.              </p>

              <p className="font-bold mt-6">
                In short, copyright is not just a legal tool—it is an economic enabler. It protects the creativity of individuals, supports the growth of businesses, and strengthens a country’s creative economy.              </p>
            </div>
            <div className="copyright-article">
              <h1>Copyright – Questions & Answers</h1>

              {/* Q1 */}
              <div className="qa-block">
                <h3 className="question">Q1: What is Copyright?</h3>
                <p className="answer">
                  Copyright is a legal right that protects the original expression of ideas
                  in a tangible form such as writing, art, music, films, photography, or software.
                  It does not protect the idea itself, but the way it is expressed.
                </p>
                <div className="example">
                  👉 Example: If two people write books on “time management,” copyright
                  protects the exact words, sentences, and structure used by each author,
                  but not the idea itself.
                </div>
                <ul className="answer">
                  <li>The exclusive right to reproduce, distribute, perform, translate, adapt, or display the work.</li>
                  <li>The power to permit or prohibit others from using it.</li>
                  <li>The ability to earn royalties or transfer rights.</li>
                </ul>
              </div>

              {/* Q2 */}
              <div className="qa-block">
                <h3 className="question">Q2: What Can Be Protected Under Copyright?</h3>
                <p className="answer">
                  Copyright protects a wide range of creative works in literary, artistic, and digital fields.
                </p>
                <ul className="answer">
                  <li>Literary works – Books, articles, poems, software, research papers.</li>
                  <li>Artistic works – Paintings, drawings, sculptures, photographs, architecture.</li>
                  <li>Musical works – Songs, compositions, lyrics.</li>
                  <li>Cinematographic works – Films, videos, documentaries, web series.</li>
                  <li>Dramatic works – Scripts, plays, choreography.</li>
                  <li>Sound recordings – Podcasts, speeches, albums.</li>
                  <li>Digital content – Websites, blogs, social media content, ads.</li>
                </ul>
                <div className="example">
                  👉 In business use: Company brochures, catalogs, websites, logos, jingles, and software.
                </div>
              </div>

              {/* Q3 */}
              <div className="qa-block">
                <h3 className="question">Q3: What Cannot Be Protected by Copyright?</h3>
                <ul className="answer">
                  <li>Ideas, methods, systems.</li>
                  <li>Facts and data.</li>
                  <li>Official government works (laws, judgments).</li>
                  <li>Names, titles, slogans, short phrases (→ Trademark).</li>
                  <li>Common symbols or designs.</li>
                  <li>Unwritten/unrecorded works.</li>
                </ul>
                <div className="example">
                  👉 Example: You can’t copyright the idea of “a love story,” but you can
                  copyright your specific script and dialogues.
                </div>
              </div>

              {/* Q4 */}
              <div className="qa-block">
                <h3 className="question">Q4: Who Owns Copyright?</h3>
                <p className="answer">Ownership depends on who creates the work and the circumstances.</p>
                <ul className="answer">
                  <li>Author/creator is usually the first owner.</li>
                  <li>Employee works → employer owns copyright (if created during job).</li>
                  <li>Commissioned work → depends on contract (e.g., wedding photographer).</li>
                  <li>Joint authorship → shared rights unless agreed otherwise.</li>
                  <li>Government/corporate works → organization owns copyright.</li>
                </ul>
                <div className="example">
                  👉 Example: A designer hired by a company → copyright belongs to the company.
                </div>
              </div>

              {/* Q5 */}
              <div className="qa-block">
                <h3 className="question">Q5: Duration of Copyright</h3>
                <p className="answer">
                  In India: Life of the author + 60 years.
                  In US/EU: Life + 70 years, corporate works 95–120 years.
                </p>
                <div className="example">
                  👉 Example: If an author dies in 2025, copyright continues until 2085 (India).
                </div>
              </div>

              {/* Q6 */}
              <div className="qa-block">
                <h3 className="question">Q6: How to Register Copyright?</h3>
                <ul className="answer">
                  <li>Application Filing (online portal).</li>
                  <li>Diary Number Allotment.</li>
                  <li>30-day Waiting Period.</li>
                  <li>Examination & hearings (if objections).</li>
                  <li>Registration Certificate issued.</li>
                </ul>
                <div className="example">👉 Average timeline: 3–8 months.</div>
              </div>

              {/* Q7 */}
              <div className="qa-block">
                <h3 className="question">Q7: What Documents Are Required?</h3>
                <ul className="answer">
                  <li>Application Form & Statement of Particulars.</li>
                  <li>Copies of the work.</li>
                  <li>No Objection Certificate (if multiple contributors).</li>
                  <li>ID proof of applicant/author.</li>
                  <li>Power of Attorney (if agent involved).</li>
                </ul>
              </div>

              {/* Q8 */}
              <div className="qa-block">
                <h3 className="question">Q8: Costs Involved</h3>
                <ul className="answer">
                  <li>Literary works – ₹500 (individual), ₹2000 (company).</li>
                  <li>Cinematographic films – ₹5000.</li>
                  <li>Sound recordings – ₹2000.</li>
                  <li>Software – ₹500.</li>
                </ul>
              </div>

              {/* Q9 */}
              <div className="qa-block">
                <h3 className="question">Q9: Do You Need Registration?</h3>
                <p className="answer">
                  NO. Copyright exists automatically when work is created.
                  But registration = legal proof, easier enforcement, public record.
                </p>
                <div className="example">
                  👉 Example: A poem in your notebook is already copyrighted.
                </div>
              </div>

              {/* Q10 */}
              <div className="qa-block">
                <h3 className="question">Q10: How Does Copyright Apply in Different Works?</h3>
                <ul className="answer">
                  <li>📚 Books – protects words, not ideas.</li>
                  <li>🎵 Music – lyrics, composition, sound recording.</li>
                  <li>💻 Software – source code, docs (not algorithms).</li>
                  <li>🎬 Films – script, dialogues, cinematography.</li>
                  <li>📸 Photography – original photos/artworks.</li>
                </ul>
              </div>

              {/* Q11 */}
              <div className="qa-block">
                <h3 className="question">Q11: What Is International Protection?</h3>
                <p className="answer">
                  Through Berne Convention (178+ countries). Principles:
                </p>
                <ul className="answer">
                  <li>Automatic protection (no formalities).</li>
                  <li>National treatment (same rights abroad).</li>
                  <li>Minimum standards (life + 50 years).</li>
                </ul>
              </div>

              {/* Q12 */}
              <div className="qa-block">
                <h3 className="question">Q12: What Is Copyright Infringement?</h3>
                <ul className="answer">
                  <li>Copying books, music, movies illegally.</li>
                  <li>Using images without permission.</li>
                  <li>Software piracy.</li>
                  <li>Uploading films/songs without license.</li>
                </ul>
                <p className="answer">
                  Penalties in India: Jail (6 months–3 years) + Fine ₹50,000–₹2,00,000.
                </p>
              </div>

              {/* Q13 */}
              <div className="qa-block">
                <h3 className="question">Q13: How to Avoid Infringement?</h3>
                <ul className="answer">
                  <li>✅ Use original or licensed content.</li>
                  <li>✅ Buy stock photos/videos/music.</li>
                  <li>❌ Don’t copy Google images.</li>
                  <li>❌ Don’t use pirated software/movies.</li>
                </ul>
              </div>

              {/* Q14 */}
              <div className="qa-block">
                <h3 className="question">Q14: What Are Licensing, Assignment & Royalties?</h3>
                <p className="answer">
                  Copyright is also a business asset.
                </p>
                <ul className="answer">
                  <li>📜 Licensing – Owner allows usage (exclusive / non-exclusive).</li>
                  <li>📜 Assignment – Full ownership transferred.</li>
                  <li>💰 Royalties – Payments for usage (music, books, software).</li>
                  <li>💼 Commercialization – revenue via streaming, merchandising, etc.</li>
                </ul>
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

