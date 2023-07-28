import CustomButton from "../hooks/Button";

function HomePageBanner() {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="hero mx-16">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img
                src="https://www.pngkey.com/png/full/221-2217324_boost-your-fps-best-gaming-motherboard-2018.png"
                className="rounded-lg lg:w-1/2 "
                alt="motherboard"
              />
              <div>
                <h1 className="text-5xl font-bold">MSI GODLIKE GAMING </h1>
                <p className="py-6">
                  Prioritize your Dental hygiene. Get Free consultation upon
                  treatment.
                </p>
                <CustomButton>Getting Started </CustomButton>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="hero mx-16">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div>
                <h1 className="text-5xl font-bold">VENGEANCE RGB PRO</h1>
                <p className="py-6">
                  Prioritize your Dental hygiene. Get Free consultation upon
                  treatment.
                </p>
                <CustomButton>Getting Started </CustomButton>
              </div>
              <img
                src="https://www.pngall.com/wp-content/uploads/5/Gaming-RAM-PNG-Image.png"
                className="rounded-lg lg:w-1/2 "
                alt="motherboard"
              />
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className="hero mx-16">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img
                src="https://www.pngkey.com/png/full/250-2505279_monitor-msi-optix-mpg27c-27-curved-gaming-monitor.png"
                className="rounded-lg lg:w-1/2 "
                alt="motherboard"
              />
              <div>
                <h1 className="text-5xl font-bold">
                  MSI OPTIX CURVED GAMING MONITOR
                </h1>
                <p className="py-6">
                  Prioritize your Dental hygiene. Get Free consultation upon
                  treatment.
                </p>
                <CustomButton>Getting Started </CustomButton>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <div className="hero mx-16">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div>
                <h1 className="text-5xl font-bold">
                  GIGABYTE GAMING POWER SUPPLY
                </h1>
                <p className="py-6">
                  Prioritize your Dental hygiene. Get Free consultation upon
                  treatment.
                </p>
                <CustomButton>Getting Started </CustomButton>
              </div>
              <img
                src="https://www.gigabyte.com/FileUpload/global/News/1826/o202009012042092741.png"
                className="rounded-lg lg:w-1/2 "
                alt="motherboard"
              />
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageBanner;
