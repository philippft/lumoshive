import TestimonialImg from "../assets/testimonial.jpg";
// import TestimonialPerson from "../assets/testimonial-person.jpg";

export default function TestimonialPage ({ data, onChange }) {
  if(!data) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    )
  }
  
  const page = data.page;
  const limit = 1;
  const totalPage = data.totalPage;
  
    return (
      <div className="mx-auto px-8 md:px-16 lg:px-24 py-20 flex flex-col md:flex-row items-center gap-8">
        <div className="ml-15 w-1/3 md:w-1/2 flex flex-col gap-8">
          <h2 className="text-[32px] md:text-[44px] font-bold text-[#23262F] leading-tight font-saira">
            What People Are Saying About Us
          </h2>

          <div className="flex items-center gap-4">
            <img
              src={data?.testimonials[0].image}
              alt="Josh Smith"
              className="w-16 h-16 rounded-full object-cover shadow-sm"
            />
            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-[#23262F] font-saira">
                {data?.testimonials[0].name}
              </h3>
              <span className="text-sm text-gray-400 font-saira">
                {data?.testimonials[0].title}
              </span>
            </div>
          </div>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-saira italic">
            {data?.testimonials[0].message}
          </p>

          <div className="flex gap-4">
            <button
              disabled={page === 1}
              onClick={() => onChange(page - 1, limit)}
              className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-[#246363] hover:text-white transition-all text-gray-400 shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </button>
            <button
              disabled={page === totalPage}
              onClick={() => onChange(page + 1, limit)}
              className="w-12 h-12 flex items-center justify-center text-gray-400 hover:bg-[#246363] hover:text-white rounded-full transition-all shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="w-2/3 md:w-1/2 flex justify-start lg:justify-end">
          <div className="relative w-full max-w-180 max-h-100 aspect-4/3 rounded-2xl overflow-hidden shadow-2xl mr-10">
            <img
              src={TestimonialImg}
              alt="Interior Home"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    );
}