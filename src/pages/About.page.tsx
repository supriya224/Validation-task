import { MainLayout } from "../layouts";
// import /

/* eslint-disable prettier/prettier */
function AboutPage() {
  return (
    <MainLayout>
      {" "}
      <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 text-center mx-6 sm:mx-48 gap-x-5 gap-y-5 my-10">
        <div className=" border-2 shadow-lg rounded-lg py-20">Workspace 1</div>
        <div className=" border-2 shadow-lg rounded-lg py-20">Workspace 2</div>
        <div className="border-2 shadow-lg rounded-lg py-20">Workspace 3</div>
        <div className="border-2 shadow-lg rounded-lg py-20">Workspace 3</div>
        <div className=" border-2 shadow-lg rounded-lg py-20">Workspace 5</div>
        <div className=" border-2 shadow-lg rounded-lg py-20">Workspace 6</div>
      </div>
    </MainLayout>
  );
}

export default AboutPage;
