// src/page/DesignPatent.jsx
import React from "react";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import Footer from "../component/layout/footer";
import "../assets/css/Copyright.css"; // reuse the same B/W styles

const title = "Design Patent (Industrial Design)";

export default function DesignPatent() {
  return (
    <>
      <Header />
      <PageHeader title={title} curPage={"Design Patent"} />

      <div className="min-h-screen flex flex-col md:flex-row bg-white bg-opacity-10">

        {/* Main Content */}
        <main className=" font-sans flex-1 p-4 sm:p-6 md:p-10 flex justify-center">
          <div className="w-full max-w-md sm:max-w-lg md:max-w-4xl lg:max-w-6xl">

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 text-black text-center">
              Design Patent
            </h1>


            <div className="copyright-article">
              <h1>DESIGN PATENT – Questions & Answers</h1>

              {/* Q1 */}
              <div className="qa-block">
                <h3 className="question">1. What is a Design Patent (Industrial Design)?</h3>
                <p className="answer">A Design Patent protects the unique appearance, shape, pattern, or ornamentation of a product, not its function. <br />
                  👉 In India, these are protected under the Designs Act, 2000 and are called Industrial Designs.
                </p>
                <div className="example">
                  👉 Example: <br /> •	The curved Coca-Cola bottle shape – protected as a design patent. <br />
                  •	The style of a chair, lamp, or jewelry design – can be protected.
                </div>
              </div>

              {/* Q2 */}
              <div className="qa-block">
                <h3 className="question">Q2: How is a Design Patent different from a Utility Patent?</h3>
                <p className="answer">
                  <li> • 	Utility Patent → Protects how something works (function).</li>
                  <li> •	Design Patent → Protects how something looks (appearance).</li>
                </p>
                <div className="example">
                  👉 Example: <br /> •	A new smartphone touchscreen technology → Utility Patent <br />
                  •	The smartphone’s curved edges and unique look → Design Patent
                </div>
              </div>

              {/* Q3 */}
              <div className="qa-block">
                <h3 className="question">Q3: What cannot be protected under a Design Patent?</h3>
                <h2 className="question">The following are not eligible:</h2>

                <ul className="answer">
                  <li>Functional features (those should go under utility patents)</li>
                  <li>	Modes of construction or principles of operation</li>
                  <li>Works of art or literary creations (they fall under copyright)</li>
                  <li>Designs that are offensive, immoral, or against public order</li>
                  <li>Designs not visible to the eye (like internal machine parts)</li>
                </ul>
              </div>

              {/* Q4 */}
              <div className="qa-block">
                <h3 className="question">Q4:Who can apply for a Design Patent?</h3>
                <ul className="answer">
                  <li>Individual designers</li>
                  <li>Companies developing new product styles</li>
                  <li>Joint designers/teams</li>
                  <li>Legal heirs or representatives of a deceased designer</li>
                </ul>
              </div>

              {/* Q5 */}
              <div className="qa-block">
                <h3 className="question">Q5:How long does a Design Patent last?</h3>
                <ul className="answer">
                  <li>In India: 10 years from the filing date, extendable by 5 years (total 15 years).</li>
                  <li>In the US: 15 years from the date of grant (for applications filed after May 13, 2015).</li>
                </ul>
                <h2>After expiry, the design enters the public domain.</h2>
              </div>

              {/* Q6 */}
              <div className="qa-block">
                <h3 className="question">Q6:What is the process of filing a Design Patent in India?</h3>
                <ul className="answer">
                  <li>1.	Prepare drawings/sketches showing the unique design.</li>
                  <li>2.	File application with the Indian Patent Office (Controller of Designs).</li>
                  <li>3.	Examination – The office checks novelty and distinctiveness.</li>
                  <li>4.	Registration – If accepted, the design is registered and published.</li>
                  <li>5.	Certificate issued – The applicant gets official proof of protection.</li>
                </ul>
              </div>

              {/* Q7 */}
              <div className="qa-block">
                <h3 className="question">Q7:What are the costs for a Design Patent in India?</h3>
                <ul className="answer">
                  <li>Filing fee: ₹1,000 (individual/startup) | ₹4,000 (large entity)</li>
                  <li>Renewal for additional 5 years: ₹2,000 (individual/startup) | ₹8,000 (large entity)</li>
                </ul>
                <h2>💡 Professional drafting fees (for sketches and applications) may add extra cost.</h2>
              </div>

              {/* Q8 */}
              <div className="qa-block">
                <h3 className="question">Q8:What are the benefits of a Design Patent?</h3>
                <ul className="answer">
                  <li>Exclusive rights → Only you can use the design.</li>
                  <li>Brand identity → Helps create a unique market presence.</li>
                  <li>Competitive advantage → Prevents copycats from using your product’s look.</li>
                  <li>Business value → Registered designs can be licensed or sold.</li>
                </ul>
              </div>

              {/* Q9 */}
              <div className="qa-block">
                <h3 className="question">Q9: Legal protection → You can sue for damages if your design is copied. Why are Design Patents Important?</h3>
                <h2>For many products, aesthetic appeal is as important as function. Think of smartphones, cars, clothing, or even household appliances—customers choose based not only on performance but also on how the product looks and feels</h2> <br />
                <h2>Design patents matter because they:</h2>
                <ul className="answer">
                  <li>Prevent copycats from stealing your product’s look.</li>
                  <li>Strengthen brand identity (customers associate a unique design with your company).</li>
                  <li>Increase market value of your product portfolio.</li>
                  <li>Provide legal protection to take action against imitators.</li>
                  <li>Support marketing and differentiation in crowded markets.</li>
                </ul>
                <div className="example">
                  👉 Example: Apple Inc. holds numerous design patents for the iPhone’s shape, screen layout, and even icons—helping maintain its premium brand image.
                </div>
              </div>

              {/* Q10 */}
              <div className="qa-block">
                <h3 className="question">Q10:Can a product have both Utility and Design Patents?Steps & Timeline?</h3>
                <h2>Yes ✅. Many products have dual protection:</h2>
                <ul className="answer">
                  <li>Utility Patent → Covers functional aspects.</li>
                  <li>Utility Patent → Covers functional aspects.</li>
                </ul>
                <div className="example">
                  👉 Example: <br /> Apple’s iPhone has utility patents for touchscreen technology and design patents for its look.
                </div>
              </div>

              {/* Q11 */}
              <div className="qa-block">
                <h3 className="question">Q11: Why are Design Patents Important?</h3>
                <h2>For many products, aesthetic appeal is as important as function. Think of smartphones, cars, clothing, or even household appliances—customers choose based not only on performance but also on how the product looks and feels.</h2> <br />
                <h2>Design patents matter because they :</h2>
                <p className="answer">
                  •	Prevent copycats from stealing your product’s look. <br />
                  •	Strengthen brand identity (customers associate a unique design with your company). <br />
                  •	Increase market value of your product portfolio. <br />
                  •	Provide legal protection to take action against imitators. <br />
                  •	Support marketing and differentiation in crowded markets. <br />
                </p>
                <div className="example">
                  👉 Example: <br /> Apple Inc. holds numerous design patents for the iPhone’s shape, screen layout, and even icons—helping maintain its premium brand image.
                </div>

              </div>

              {/* Q12 */}
              <div className="qa-block">
                <h3 className="question">Q12: What Can Be Protected by a Design Patent?</h3>
                <h2>Design patents cover the ornamental or aesthetic features of a product, including:</h2>
                <p className="answer">
                  •	Shape & configuration → the 3D form of a chair, bottle, or gadget. <br />
                  •	Surface patterns → textile prints, wallpaper designs. <br />
                  •	Decoration & ornamentation → engravings, carvings, unique finishes. <br />
                  •	Combination of features → a blend of shape + pattern + surface features <br />
                </p>
                <h2>In short: If the design catches the eye and is new, it may qualify.</h2>

              </div>

              {/* Q13 */}
              <div className="qa-block">
                <h3 className="question">Q13:What Cannot Be Protected by a Design Patent?</h3>
                <h2>Some designs are not eligible for protection, such as:</h2>
                <p>•	Purely functional features (those belong under utility patents). <br />
                  •	Internal features not visible during normal use (like machine parts). <br />
                  •	Works of art, literature, or music (covered under copyright). <br />
                  •	Obscene or offensive designs. <br />
                  •	Designs that are not original or already published. <br />
                </p>
                <h3>Duration of Protection</h3>
                <p>•	In India: 10 years from the date of filing, extendable by 5 years (total 15 years). <br />
                  •	In the United States: 15 years from the date of grant (for newer applications). <br />
                  •	In the European Union: Up to 25 years (renewable every 5 years). <br />
                </p>
                <h2>After expiry, the design becomes public property and anyone can use it.</h2> <br />
                <h3>The Process of Filing a Design Patent in India</h3> <br />
                <h2>                Filing for design protection is simpler and faster compared to utility patents.
                </h2> <br />
                <h3>Step 1: Prepare the Design</h3> <br />
                <p>•	Create clear drawings, sketches, or photographs showing different views (front, back, side, top). <br />
                  •	Ensure the design is new and original. </p> <br />

                <h3>Step 2: File Application</h3> <br />
                <p>•	Submit an application with the Indian Patent Office (Controller of Designs). <br />
                  •	Fees: ₹1,000 (individual/startup) or ₹4,000 (large company). <br />
                </p>
                <h3>Step 3: Examination</h3> <br />
                <p>•	The design office examines the application for novelty and distinctiveness. </p> <br />
                <h3>Step 4: Registration & Publication</h3> <br />
                <p>•	If accepted, the design is registered and published in the Design Journal. <br />
                  •	You receive a Certificate of Registration as proof. <br />
                </p>
                <h3>Step 5: Renewal</h3> <br />
                <p>•	At the end of 10 years, you can renew for an additional 5 years.</p>
                <h3>Cost of Filing a Design Patent in India</h3>
                <p>•	Filing fee: ₹1,000 (individual/startup) | ₹4,000 (large entity)
                  •	Renewal fee (for 5-year extension): ₹2,000 (individual/startup) | ₹8,000 (large entity) <br />
                  💡 Additional costs may include professional fees for preparing sketches and applications. <br />
                </p>
                <h3>Compared to utility patents, design patents are cheaper, quicker, and simpler to obtain.</h3> <br />
                <h3>Benefits of a Design Patent</h3>
                <p>1.	Exclusive rights – Only you can use the design during the protection period. <br />
                  2.	Legal protection – Helps stop counterfeit or lookalike products. <br />
                  3.	Brand value – Creates a unique identity in the market. <br />
                  4.	Marketing advantage – Customers often buy products because of attractive looks. <br />
                  5.	Business growth – Registered designs can be licensed or sold for income. <br />
                  6.	Competitive edge – Prevents competitors from copying your product’s visual appeal. <br />
                </p>

                <div className="example">
                  👉 Example: <br /> Fashion brands register patterns and designs to stop others from copying their clothing lines.
                </div>
                <h2>International Protection for Design Patents</h2><br />
                <h3>If you want protection outside India, you can:</h3><br />
                <p>•	File separately in each country, or <br />
                  •	Use the Hague Agreement (WIPO), which allows international filing for designs in multiple countries with one application. <br />
                </p>
                <h3>This is useful for businesses planning to export or sell globally.</h3>
                <h2>Limitations of Design Patents</h2>
                <p>•	They protect appearance only, not the function.
                  •	Time-limited (10–15 years in India). <br />
                  •	Geographical limit – A design patent in India won’t protect you abroad.  <br />
                  •	Weak against small variations – If competitors make slight changes, they may avoid infringement. <br />
                </p>
                <h3>Examples of Design Patents in Action</h3> <br />
                <p>•	Coca-Cola Bottle – One of the earliest and most famous design patents. <br />
                  •	Nike Shoe Designs – Protects unique shoe shapes and surface features. <br />
                  •	Apple iPhone – Protected by multiple design patents worldwide. <br />
                  •	Furniture companies – Protect unique chair, table, or sofa designs.
                </p>

                <h2>Why Should Small Businesses Care About Design Patents?</h2> <br />
                <h3>For small industries and startups, design patents can be a cost-effective way to stand out in competitive markets. They:</h3> <br />
                <p>
                  •	Build trust and credibility with customers.
                  •	Prevent cheap imitation products.
                  •	Add intangible assets to business value.
                  •	Help secure investments or partnerships.
                </p>
                <h3>Key Takeaways</h3> <br />
                <p>
                  •	Design patents protect the look of a product, not its working. <br />
                  •	They last 10 years (extendable to 15) in India. <br />
                  •	Cost-effective and easier to obtain compared to utility patents. <br />
                  •	Ideal for industries where appearance and style drive sales (fashion, furniture, consumer goods, electronics). <br />
                  •	Businesses can combine utility + design patents for stronger protection. <br />
                </p>
                <h3>👉 In short: If you’ve created a product that “catches the eye” and is visually unique, filing a design patent ensures that only you can benefit from its appearance.</h3>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}
