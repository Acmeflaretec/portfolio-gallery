import { content } from "../Content";

const Hireme = () => {
  const { Hireme } = content;

  return (
    <section className="bg-bg_light_primary" id="about">
      <div className="md:container px-5 pt-14">
        <h2 className="title" data-aos="fade-down">
          {Hireme.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Hireme.subtitle}
        </h4>
        <br />
        <div className="flex items-center md:flex-row flex-col-reverse ">
          

          <div
            data-aos="fade-left"
            className="border-2 border-dark_primary 
           p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem]"
          >
            <p className="leading-7">{Hireme.para}</p>
            <br />
            <h6>Education</h6>
            
            <ul>
              <li>KGTE Diploma in Painting</li>
              <li>KGCE Certificate in Painting</li>
              <li>Bachelor of Fine Arts (BFA) in Painting</li>

              <li>Master of Fine Arts (MFA) in Painting from Karnataka State Open University</li>
            </ul>
            <h6>Current Occupation</h6>
            <p className="leading-7">Presently, I serve as a Teacher Educator at the Government Institute of Teacher Education (Men), Kannur, Kerala.</p>


          </div>
          <img
            src={Hireme.image1}
            alt="..."
            data-aos="fade-right"
            className="max-w-sm md:block hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default Hireme;
