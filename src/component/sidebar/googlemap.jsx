const contactList = [
  {
    imgUrl: "assets/images/icon/01.png",
    imgAlt: "contact icon",
    title: "Office Address",
    desc: "First Floor, Sheth Plaza, 103, opp. Market Yard Road, Nishant Colony, Sangli, Maharashtra 416416",
  },
  {
    imgUrl: "assets/images/icon/02.png",
    imgAlt: "contact icon",
    title: "Phone number",
    desc: "+22698 745 632, 02 982 745",
  },
  {
    imgUrl: "assets/images/icon/03.png",
    imgAlt: "contact icon",
    title: "Send email",
    desc: "adminedukon@gmail.com",
  },
  {
    imgUrl: "assets/images/icon/04.png",
    imgAlt: "contact icon",
    title: "Our website",
    desc: "www.edukon.com",
  },
];

const GoogleMap = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-auto md:h-[450px] bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Left Side: Google Map */}
      <div className="w-full md:w-2/3 h-[300px] md:h-[450px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.496309535975!2d74.58196007367525!3d16.851325818029636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc12327c1ce031f%3A0x610b3bb7dc978480!2sMYCrave%20Consultancy%20And%20Services%20MH!5e0!3m2!1sen!2sin!4v1755694886610!5m2!1sen!2sin"
          width="100%"
          height="600"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lakshya Location Map"
        ></iframe>
      </div>

      {/* Right Side: Contact Info */}
      <div className="w-full md:w-1/3 p-6 flex flex-col justify-center bg-gray-50">
        {/* <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Info</h2> */}
        <div className="space-y-6">
          {contactList.map((val, i) => (
            <div
              key={i}
              className="flex items-start space-x-4 bg-white p-4 rounded-xl shadow hover:shadow-md transition"
            >
              <div className="flex-shrink-0">
                <img src={val.imgUrl} alt={val.imgAlt} className="w-10 h-10" />
              </div>
              <div>
                <h6 className="text-lg font-semibold text-gray-800">
                  {val.title}
                </h6>
                <p className="text-gray-600">{val.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;
