// import { Toaster } from "react-hot-toast";
import { MainLayout } from "../layouts";
/* eslint-disable prettier/prettier */
function HomePage() {
  return (
    <MainLayout>
      <section>
        <div className="bg-gray-900 text-white justify-center py-10 ">
          <div className="container mx-auto flex flex-col border p-9 gap-28 md:flex-row items-center shadow-inner shadow-slate-100 rounded-md  md:my-32">
            <div className="container mx-auto flex flex-col w-full lg:w-2/3 justify-center items-start p-8">
              <h1 className="text-3xl md:text-5xl p-2 text-pink-500 tracking-loose">
                Validation Task
              </h1>
              <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
                Using Firebase store to the data
              </h2>
              <p className="text-sm md:text-base text-gray-50 mb-4">
                I have explore my skills like react with typescript and
                tailwindcss
              </p>
              <a
                href="/"
                className="bg-transparent hover:text-pink-200 text-pink-500  rounded shadow hover:shadow-xl py-2 px-4 border-2 border-pink-400 hover:border-transparent">
                Explore Now
              </a>
            </div>
            <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
              <div className="h-48 flex flex-wrap content-center">
                <div>
                  <img
                    width={100}
                    height={200}
                    loading="lazy"
                    className="container mx-auto ml-20 rounded-md inline-block mt-24 md:mt-0 p-9 md:p-0"
                    src="https://img.freepik.com/free-vector/task-concept-illustration_114360-22522.jpg?size=338&ext=jpg&ga=GA1.1.1448711260.1707091200&semt=ais"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default HomePage;
