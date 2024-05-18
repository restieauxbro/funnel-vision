import * as React from "react";

function Header() {
  return (
    <div className="flex justify-center items-center px-16 py-2.5 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between pt-1 pb-2.5 w-full max-w-[1420px] max-md:flex-wrap max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a91b1937de2745ea5549386ab122a61b2f8cc4511c4bddf4b5d09176f4d142c9?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a91b1937de2745ea5549386ab122a61b2f8cc4511c4bddf4b5d09176f4d142c9?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a91b1937de2745ea5549386ab122a61b2f8cc4511c4bddf4b5d09176f4d142c9?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a91b1937de2745ea5549386ab122a61b2f8cc4511c4bddf4b5d09176f4d142c9?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a91b1937de2745ea5549386ab122a61b2f8cc4511c4bddf4b5d09176f4d142c9?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a91b1937de2745ea5549386ab122a61b2f8cc4511c4bddf4b5d09176f4d142c9?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a91b1937de2745ea5549386ab122a61b2f8cc4511c4bddf4b5d09176f4d142c9?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a91b1937de2745ea5549386ab122a61b2f8cc4511c4bddf4b5d09176f4d142c9?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&"
          className="shrink-0 self-start mt-1.5 max-w-full aspect-[2.33] w-[100px]"
        />
        <div className="flex flex-col max-md:max-w-full">
          <div className="self-end text-sm leading-5 text-black">AU</div>
          <div className="flex gap-5 justify-center items-center px-4 text-base leading-6 text-center text-neutral-600 max-md:flex-wrap">
            <div className="self-stretch my-auto">Get started</div>
            <div className="flex gap-1.5 justify-center self-stretch px-4 py-2 whitespace-nowrap leading-[143%]">
              <div>Shop</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa60535721b3be77796f018ee419d112ab1d3bd48b8c5e39481fc1ddac584888?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&"
                className="shrink-0 my-auto w-2.5 aspect-square"
              />
            </div>
            <div className="self-stretch my-auto leading-[143%]">Reviews</div>
            <div className="self-stretch my-auto">Our ingredients</div>
            <div className="flex gap-1.5 justify-center self-stretch px-4 py-2">
              <div>Learn more</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/df2ed9da581f8b683e7f4d5afc9d581585a9a77d35f94d0819f1455d34ae1a8b?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&"
                className="shrink-0 my-auto w-2.5 aspect-square"
              />
            </div>
            <div className="self-stretch my-auto">Contact Us</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Page = () => {
  return (
    <div className="bg-white">
      <Header />
      <div className="flex flex-col justify-center self-stretch bg-white">
        <div className="w-full bg-black min-h-[750px] max-md:max-w-full" />
      </div>
      <SecondSection />
      <HealthBenefits />
      <PeopleCarousel />
      <ProductShow />
    </div>
  );
};

export default Page;

function SecondSection() {
  return (
    <div className="flex flex-col items-center px-16 pt-12 pb-12 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1500px] max-md:max-w-full">
        <div className="mx-10 text-5xl text-green-600 leading-[59.64px] max-md:mr-2.5 max-md:max-w-full">
          Our superfood powders
        </div>
        <div className="flex flex-col justify-center px-5 mt-12 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex-wrap justify-center pb-8 max-md:pl-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow self-stretch max-md:mt-6">
                  <div className="flex flex-col justify-center items-center text-sm leading-4 text-center text-white whitespace-nowrap bg-white aspect-square">
                    <div className="flex overflow-hidden relative flex-col items-end px-16 pt-2.5 pb-20 w-full aspect-square max-md:pl-5">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ba5d38bb5beee85e9e862a1423f513be34d796436840de57a99abb75e6786f35?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba5d38bb5beee85e9e862a1423f513be34d796436840de57a99abb75e6786f35?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba5d38bb5beee85e9e862a1423f513be34d796436840de57a99abb75e6786f35?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba5d38bb5beee85e9e862a1423f513be34d796436840de57a99abb75e6786f35?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba5d38bb5beee85e9e862a1423f513be34d796436840de57a99abb75e6786f35?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba5d38bb5beee85e9e862a1423f513be34d796436840de57a99abb75e6786f35?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba5d38bb5beee85e9e862a1423f513be34d796436840de57a99abb75e6786f35?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba5d38bb5beee85e9e862a1423f513be34d796436840de57a99abb75e6786f35?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&"
                        className="object-cover absolute inset-0 size-full"
                      />
                      <div className="relative justify-center items-center px-5 mb-32 bg-pink-700 h-[70px] rounded-[70px] w-[70px] max-md:mb-10">
                        Intro
                        <br />
                        offer
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between px-5 pt-5 pb-1.5">
                    <div className="flex flex-wrap gap-4 justify-between content-center">
                      <div className="my-auto text-2xl leading-7 text-green-600">
                        Get Started Pack
                      </div>
                      <div className="flex flex-col justify-center text-sm leading-4 text-center text-neutral-600">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b59363c7ee3dda85423d2ec2a4aaa1099a5e26409114074a778d2ba6bff2c417?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&"
                          className="self-center aspect-[5.56] w-[73px]"
                        />
                        <div>12 Reviews</div>
                      </div>
                    </div>
                    <div className="mt-2.5 text-base leading-5 text-neutral-600">
                      Special introductory offer for our first-
                      <br />
                      time Shotsters! Get everything you
                      <br />
                      need to get started: A 30 days supply of
                      <br />
                      Double Shot & an Essentials kit.
                    </div>
                    <div className="flex gap-5 justify-between mt-1.5 w-full font-bold">
                      <div className="flex gap-1.5 my-auto text-pink-700 capitalize">
                        <div className="text-base leading-6">$99.47</div>
                        <div className="text-base leading-6"> $69.00</div>
                      </div>
                      <div className="justify-center px-6 py-3 text-base leading-6 text-center text-white bg-pink-700 rounded-[30px] max-md:px-5">
                        Read more
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow self-stretch max-md:mt-6">
                  <div className="flex flex-col justify-center items-center bg-white aspect-square">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a31e55baa1705ee0996c0f8ffa91b1d17dac9f4bec1c63ef312238c88e755a94?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a31e55baa1705ee0996c0f8ffa91b1d17dac9f4bec1c63ef312238c88e755a94?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a31e55baa1705ee0996c0f8ffa91b1d17dac9f4bec1c63ef312238c88e755a94?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a31e55baa1705ee0996c0f8ffa91b1d17dac9f4bec1c63ef312238c88e755a94?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a31e55baa1705ee0996c0f8ffa91b1d17dac9f4bec1c63ef312238c88e755a94?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a31e55baa1705ee0996c0f8ffa91b1d17dac9f4bec1c63ef312238c88e755a94?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a31e55baa1705ee0996c0f8ffa91b1d17dac9f4bec1c63ef312238c88e755a94?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a31e55baa1705ee0996c0f8ffa91b1d17dac9f4bec1c63ef312238c88e755a94?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&"
                      className="w-full aspect-square"
                    />
                  </div>
                  <div className="flex flex-col justify-between px-5 pt-5 pb-1.5">
                    <div className="flex flex-wrap gap-5 justify-between content-center">
                      <div className="my-auto text-2xl leading-7 text-green-600">
                        Double Shot™
                      </div>
                      <div className="flex flex-col justify-center text-sm leading-4 text-center text-neutral-600">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/247dd089a386d458c144e15125b997c853947b4aa90f3dee6864a58b8ecbd570?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&"
                          className="self-center aspect-[5.56] w-[72px]"
                        />
                        <div>10 Reviews</div>
                      </div>
                    </div>
                    <div className="mt-2.5 text-base leading-5 text-neutral-600">
                      A blend of New Zealand grown organic
                      <br />
                      green and red superfoods for you to
                      <br />
                      unlock your most vibrant potential self.
                    </div>
                    <div className="flex gap-5 justify-between mt-6 font-bold">
                      <div className="flex flex-col text-base">
                        <div className="flex gap-0 justify-between text-pink-700">
                          <div className="leading-[154%]">$69.00</div>
                          <div className="leading-[139%]">Auto-renew</div>
                        </div>
                      </div>
                      <div className="justify-center px-6 py-3 my-auto text-base leading-6 text-center text-white bg-pink-700 rounded-[30px] max-md:px-5">
                        Read more
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow self-stretch max-md:mt-6">
                  <div className="flex flex-col justify-center items-center bg-white aspect-square">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5089c2188beb8412942efecf2af5f4df14afa2aa36da4dad3a39e612082e5bc5?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5089c2188beb8412942efecf2af5f4df14afa2aa36da4dad3a39e612082e5bc5?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5089c2188beb8412942efecf2af5f4df14afa2aa36da4dad3a39e612082e5bc5?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5089c2188beb8412942efecf2af5f4df14afa2aa36da4dad3a39e612082e5bc5?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5089c2188beb8412942efecf2af5f4df14afa2aa36da4dad3a39e612082e5bc5?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5089c2188beb8412942efecf2af5f4df14afa2aa36da4dad3a39e612082e5bc5?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5089c2188beb8412942efecf2af5f4df14afa2aa36da4dad3a39e612082e5bc5?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5089c2188beb8412942efecf2af5f4df14afa2aa36da4dad3a39e612082e5bc5?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&"
                      className="w-full aspect-square"
                    />
                  </div>
                  <div className="flex flex-col justify-between px-5 pt-5 pb-1.5">
                    <div className="flex flex-wrap gap-5 justify-between content-center">
                      <div className="my-auto text-2xl leading-7 text-green-600">
                        Green Shot
                      </div>
                      <div className="flex flex-col justify-center text-sm leading-4 text-center text-neutral-600">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d16b458cd08f48d08e1e60b0ce68371cb4cc259a669fe11d93eebbdac10e74d?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&"
                          className="self-center aspect-[5] w-[65px]"
                        />
                        <div>4 Reviews</div>
                      </div>
                    </div>
                    <div className="mt-2.5 text-base leading-5 text-neutral-600">
                      Our modern-day version of Popeye’s
                      <br />
                      spinach! Specially formulated with a<br />
                      unique combination of six specially
                      <br />
                      selected organic green superfoods.
                    </div>
                    <div className="flex gap-5 justify-between font-bold">
                      <div className="flex flex-col">
                        <div className="flex gap-0 justify-between text-pink-700">
                          <div className="text-base leading-6">$36.00</div>
                          <div className="text-base leading-5"> Auto-renew</div>
                        </div>
                      </div>
                      <div className="justify-center px-6 py-3 my-auto text-base leading-6 text-center text-white bg-pink-700 rounded-[30px] max-md:px-5">
                        Read more
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-start self-stretch max-md:mt-6">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e7b516371419d2b0098bafc9f0ece1f339cb458e700a03395d35b6b1348af0bb?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7b516371419d2b0098bafc9f0ece1f339cb458e700a03395d35b6b1348af0bb?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7b516371419d2b0098bafc9f0ece1f339cb458e700a03395d35b6b1348af0bb?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7b516371419d2b0098bafc9f0ece1f339cb458e700a03395d35b6b1348af0bb?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7b516371419d2b0098bafc9f0ece1f339cb458e700a03395d35b6b1348af0bb?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7b516371419d2b0098bafc9f0ece1f339cb458e700a03395d35b6b1348af0bb?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7b516371419d2b0098bafc9f0ece1f339cb458e700a03395d35b6b1348af0bb?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7b516371419d2b0098bafc9f0ece1f339cb458e700a03395d35b6b1348af0bb?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&"
                    className="w-full aspect-[1.11]"
                  />
                  <div className="flex flex-col justify-between px-5 pt-5 pb-1.5 w-full">
                    <div className="flex flex-wrap gap-5 justify-between content-center pr-9 max-md:pr-5">
                      <div className="my-auto text-2xl leading-7 text-green-600">
                        Red Shot
                      </div>
                      <div className="flex flex-col justify-center text-sm leading-4 text-center text-neutral-600">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6bd7c7432377f679ad9a436423a88fef1e975da88f5e875f5382411e16710d5?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&"
                          className="self-center aspect-[5] w-[65px]"
                        />
                        <div>4 Reviews</div>
                      </div>
                    </div>
                    <div className="mt-2.5 text-base leading-5 text-neutral-600">
                      Made from organic blackcurrants and
                      <br />
                      boysenberries which are especially high
                      <br />
                      in red pigments and anthocyanins
                      <br />
                      known to nourish both body and mind.
                    </div>
                    <div className="flex gap-5 justify-between font-bold">
                      <div className="flex flex-col">
                        <div className="flex gap-0 justify-between text-pink-700">
                          <div className="text-base leading-6">$40.00</div>
                          <div className="text-base leading-5"> Auto-renew</div>
                        </div>
                      </div>
                      <div className="justify-center px-6 py-3 my-auto text-base leading-6 text-center text-white bg-pink-700 rounded-[30px] max-md:px-5">
                        Read more
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HealthBenefits() {
  return (
    <>
      <svg
        width="1920"
        height="66"
        viewBox="0 0 1920 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
      >
        <path
          d="M0.0792236 36.5614C0.0792236 36.5614 130.886 7.34286 329.071 3.01419C526.034 -1.31449 655.899 -1.31449 926.451 19.2467C1265.56 45.0132 1563.87 48.4653 1744.6 39.8079C1829.09 35.7606 1919.92 24.6576 1919.92 24.6576V64.6978L0.0792236 65.78V36.5614Z"
          fill="#F0F4DC"
        />
      </svg>
      <div className="flex z-10 flex-col items-center px-16 pt-12 pb-14 w-full text-center bg-[#F0F4DC] max-md:px-5 max-md:max-w-full -mt-1">
        <div className="flex flex-col px-10 w-full max-w-[1500px] max-md:px-5 max-md:max-w-full">
          <div className="self-center text-5xl text-lime-500 leading-[58.8px] max-md:max-w-full">
            Health benefits of daily use
          </div>
          <div className="self-center text-xl leading-7 text-neutral-600 max-md:max-w-full">
            Experience transformation in as little as 1 month
          </div>
          <div className="flex flex-wrap gap-0 justify-center items-start px-20 pt-20 pb-5 text-base leading-6 text-neutral-600 max-md:px-5">
            <div className="flex flex-col px-2.5 pb-3.5 leading-[143%]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d163c1f3262881e5461c13dad3543ccaf014a847b34bd4e245d707cd887a14c8?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&"
                className="self-center aspect-[1.54] w-[124px]"
              />
              <div className="mt-4">Supports Energy</div>
            </div>
            <div className="flex flex-col px-2.5 pb-3.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/703b5f137d52b8f6caa746dd32d75a5b5cef94723500b0128695073da8bf8262?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&"
                className="self-center aspect-[1.69] w-[136px]"
              />
              <div className="mt-4">Support Immunity</div>
            </div>
            <div className="flex flex-col px-2.5 pb-3.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/92147385ea357e46f12f4846d3cdbfcc25ad11285717fc712032439b67a6e1fa?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&"
                className="self-center aspect-[1.43] w-[115px]"
              />
              <div className="mt-4">General Health</div>
            </div>
            <div className="flex flex-col px-2.5 pb-3.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f1aeffa7b8967227062b9d455116e5c6967ddae21126a50cd0a6f1eb171e9b8?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&"
                className="self-center aspect-[1.23] w-[99px]"
              />
              <div className="mt-4">Heart Health</div>
            </div>
            <div className="flex flex-col px-2.5 pb-3.5 text-base leading-6">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a38dfef004b7477e94f6e87ae82d26b2af956b0236bdd5f2e8a12979f510ba95?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&"
                className="self-center aspect-[1.22] w-[97px]"
              />
              <div className="mt-4">Boosts Focus</div>
            </div>
            <div className="flex flex-col px-2.5 pb-3.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/62425ab0235491936bc2ed456c29301d523bc1bd603ad51bc3cee2b72e34028e?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&"
                className="self-center aspect-[1.04] w-[83px]"
              />
              <div className="mt-4">Gut Health</div>
            </div>
            <div className="flex flex-col px-2.5 pb-3.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/027bdce6c6e3e5a486fb36678c17665422e71ea7321ab86f9e08c17d96068d87?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&"
                className="self-center aspect-[2] w-[159px]"
              />
              <div className="mt-4">Hair and Nail Growth</div>
            </div>
            <div className="flex flex-col px-2.5 pb-3.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c7ac6245367448c30eaa3677fe8cd0e68005e10d7fee9d4d58ce777b3d63d08?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&"
                className="self-center aspect-[1.47] w-[118px]"
              />
              <div className="mt-4">Heathly Ageing</div>
            </div>
            <div className="flex flex-col px-2.5 pb-3.5 leading-[141%]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/74190bc062ac5e8ff113b8bcb29b68c761e7a38b1a874339868301cc84552ab3?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&"
                className="self-center aspect-[1.69] w-[135px]"
              />
              <div className="mt-4">Support Recovery</div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center px-16 pt-8 font-bold max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col max-w-full w-[244px]">
              <div className="justify-center px-11 py-3 text-base leading-5 text-pink-700 bg-white border-2 border-pink-700 border-solid rounded-[30px] max-md:px-5">
                Find out why it works
              </div>
              <div className="justify-center px-14 py-3 mx-5 text-base leading-6 text-white bg-pink-700 rounded-[30px] max-md:px-5 max-md:mx-2.5">
                Get started
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function PeopleCarousel() {
  return (
    <div className="flex flex-col justify-center w-full bg-white max-md:max-w-full">
      <div className="justify-center w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col justify-center text-center text-white max-md:max-w-full">
              <div className="flex flex-col justify-center bg-white max-md:max-w-full">
                <div className="flex overflow-hidden relative flex-col justify-center w-full min-h-[640px] max-md:max-w-full">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7187b99cd53efa93c38e84f5893e889e7cd992fc25dfdda79151bf80e7cf9789?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7187b99cd53efa93c38e84f5893e889e7cd992fc25dfdda79151bf80e7cf9789?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7187b99cd53efa93c38e84f5893e889e7cd992fc25dfdda79151bf80e7cf9789?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7187b99cd53efa93c38e84f5893e889e7cd992fc25dfdda79151bf80e7cf9789?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7187b99cd53efa93c38e84f5893e889e7cd992fc25dfdda79151bf80e7cf9789?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7187b99cd53efa93c38e84f5893e889e7cd992fc25dfdda79151bf80e7cf9789?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7187b99cd53efa93c38e84f5893e889e7cd992fc25dfdda79151bf80e7cf9789?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7187b99cd53efa93c38e84f5893e889e7cd992fc25dfdda79151bf80e7cf9789?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="flex relative flex-col justify-center items-start px-2.5 py-20 max-md:pr-5 max-md:max-w-full">
                    <div className="flex gap-5 justify-between mt-40 mb-28 max-w-full w-[448px] max-md:flex-wrap max-md:my-10">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/56ff0b7fd79b01655aebf8659510802745a9845e67c479e87baa32b513520dbc?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&"
                        className="shrink-0 my-auto w-10 shadow-sm aspect-square"
                      />
                      <div className="flex flex-col items-center">
                        <div className="text-sm leading-8 uppercase tracking-[3.2px]">
                          watch
                        </div>
                        <div className="self-stretch mt-4 text-4xl leading-10">
                          {" Samsara's story"}
                        </div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/43bc2e26883d694fbc7bc5474fd1da63cfe4686c2e64c138b3b399926b147d33?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&"
                          className="mt-8 w-11 aspect-square"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col justify-center text-center text-white max-md:max-w-full">
              <div className="flex flex-col justify-center bg-white max-md:max-w-full">
                <div className="flex overflow-hidden relative flex-col justify-center w-full min-h-[640px] max-md:max-w-full">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/da28c2bc92055924c02e0ba2ce891ac9068c82fd932eca1242cf288bb2cd1e07?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/da28c2bc92055924c02e0ba2ce891ac9068c82fd932eca1242cf288bb2cd1e07?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/da28c2bc92055924c02e0ba2ce891ac9068c82fd932eca1242cf288bb2cd1e07?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/da28c2bc92055924c02e0ba2ce891ac9068c82fd932eca1242cf288bb2cd1e07?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/da28c2bc92055924c02e0ba2ce891ac9068c82fd932eca1242cf288bb2cd1e07?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/da28c2bc92055924c02e0ba2ce891ac9068c82fd932eca1242cf288bb2cd1e07?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/da28c2bc92055924c02e0ba2ce891ac9068c82fd932eca1242cf288bb2cd1e07?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/da28c2bc92055924c02e0ba2ce891ac9068c82fd932eca1242cf288bb2cd1e07?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="flex relative justify-center items-center px-16 py-20 max-md:px-5 max-md:max-w-full">
                    <div className="flex flex-col items-center mt-40 mb-28 max-w-full w-[272px] max-md:my-10">
                      <div className="text-sm leading-8 uppercase tracking-[3.2px]">
                        watch
                      </div>
                      <div className="self-stretch mt-4 text-4xl leading-10">
                        {" Stefanie's story"}
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/30fb36c7757866b337fa4fe80ccc1d32155cf85123dfad62fe211bef9b3e1fdc?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&"
                        className="mt-8 w-11 aspect-square"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col justify-center text-center text-white max-md:max-w-full">
              <div className="flex flex-col justify-center bg-white max-md:max-w-full">
                <div className="flex overflow-hidden relative flex-col justify-center w-full min-h-[640px] max-md:max-w-full">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f9d626355693ee0efe788968349b852feb42fbddcb3c346972193577455e763b?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9d626355693ee0efe788968349b852feb42fbddcb3c346972193577455e763b?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9d626355693ee0efe788968349b852feb42fbddcb3c346972193577455e763b?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9d626355693ee0efe788968349b852feb42fbddcb3c346972193577455e763b?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9d626355693ee0efe788968349b852feb42fbddcb3c346972193577455e763b?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9d626355693ee0efe788968349b852feb42fbddcb3c346972193577455e763b?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9d626355693ee0efe788968349b852feb42fbddcb3c346972193577455e763b?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9d626355693ee0efe788968349b852feb42fbddcb3c346972193577455e763b?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="flex relative flex-col justify-center items-end px-16 py-20 max-md:pl-5 max-md:max-w-full">
                    <div className="flex gap-5 justify-between mt-40 mb-28 max-w-full w-[447px] max-md:flex-wrap max-md:my-10">
                      <div className="flex flex-col items-center">
                        <div className="text-sm leading-8 uppercase tracking-[3.2px]">
                          watch
                        </div>
                        <div className="self-stretch mt-4 text-4xl leading-10">
                          {" Ashleigh's story"}
                        </div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/27f6c57aa2951bc0cad62b49768eebc02888aa956cb0f3e52b4a83e3d2345a2d?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&"
                          className="mt-8 w-11 aspect-square"
                        />
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba02f1eae5a13eee66ee14e4c6bdf9684f45dcd338ab4304affac95ec0d0915b?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&"
                        className="shrink-0 my-auto w-10 shadow-sm aspect-square"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductShow() {
  return (
    <div className="justify-center self-center pb-6 mt-5 max-w-full w-[1442px] max-md:pl-5 mx-auto">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch max-md:mt-6 max-md:max-w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/87c3dc69751aedd1ec0e83b8fd096c6916ead0bffa18cbf15b7666863c94839e?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/87c3dc69751aedd1ec0e83b8fd096c6916ead0bffa18cbf15b7666863c94839e?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/87c3dc69751aedd1ec0e83b8fd096c6916ead0bffa18cbf15b7666863c94839e?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/87c3dc69751aedd1ec0e83b8fd096c6916ead0bffa18cbf15b7666863c94839e?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/87c3dc69751aedd1ec0e83b8fd096c6916ead0bffa18cbf15b7666863c94839e?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/87c3dc69751aedd1ec0e83b8fd096c6916ead0bffa18cbf15b7666863c94839e?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/87c3dc69751aedd1ec0e83b8fd096c6916ead0bffa18cbf15b7666863c94839e?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/87c3dc69751aedd1ec0e83b8fd096c6916ead0bffa18cbf15b7666863c94839e?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&"
              className="w-full aspect-square max-md:max-w-full"
            />
            <div className="flex overflow-x-auto justify-center items-center px-16 py-0.5 mt-4 max-md:px-5 max-md:max-w-full">
              <div className="flex gap-4 max-md:flex-wrap">
                <div className="flex justify-center items-center bg-white h-[46px] w-[46px]">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fa70d8d9105a9551a02b57191e83531b25784310a043e1936d7d289b72c109fb?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa70d8d9105a9551a02b57191e83531b25784310a043e1936d7d289b72c109fb?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa70d8d9105a9551a02b57191e83531b25784310a043e1936d7d289b72c109fb?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa70d8d9105a9551a02b57191e83531b25784310a043e1936d7d289b72c109fb?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa70d8d9105a9551a02b57191e83531b25784310a043e1936d7d289b72c109fb?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa70d8d9105a9551a02b57191e83531b25784310a043e1936d7d289b72c109fb?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa70d8d9105a9551a02b57191e83531b25784310a043e1936d7d289b72c109fb?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fa70d8d9105a9551a02b57191e83531b25784310a043e1936d7d289b72c109fb?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&"
                    className="aspect-square w-[46px]"
                  />
                </div>
                <div className="flex justify-center items-center bg-white h-[46px] w-[46px]">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/641bc97f7a55d18bbeb7d1129042d38bd783bddb061c02f8067dd52bd19c1760?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/641bc97f7a55d18bbeb7d1129042d38bd783bddb061c02f8067dd52bd19c1760?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/641bc97f7a55d18bbeb7d1129042d38bd783bddb061c02f8067dd52bd19c1760?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/641bc97f7a55d18bbeb7d1129042d38bd783bddb061c02f8067dd52bd19c1760?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/641bc97f7a55d18bbeb7d1129042d38bd783bddb061c02f8067dd52bd19c1760?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/641bc97f7a55d18bbeb7d1129042d38bd783bddb061c02f8067dd52bd19c1760?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/641bc97f7a55d18bbeb7d1129042d38bd783bddb061c02f8067dd52bd19c1760?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/641bc97f7a55d18bbeb7d1129042d38bd783bddb061c02f8067dd52bd19c1760?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&"
                    className="aspect-square w-[46px]"
                  />
                </div>
                <div className="flex justify-center items-center bg-white h-[46px] w-[46px]">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3ed547eb8f10d06a7874dd5fc90562a2c44e33a0fd763bcb74dae64522a0c972?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ed547eb8f10d06a7874dd5fc90562a2c44e33a0fd763bcb74dae64522a0c972?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ed547eb8f10d06a7874dd5fc90562a2c44e33a0fd763bcb74dae64522a0c972?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ed547eb8f10d06a7874dd5fc90562a2c44e33a0fd763bcb74dae64522a0c972?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ed547eb8f10d06a7874dd5fc90562a2c44e33a0fd763bcb74dae64522a0c972?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ed547eb8f10d06a7874dd5fc90562a2c44e33a0fd763bcb74dae64522a0c972?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ed547eb8f10d06a7874dd5fc90562a2c44e33a0fd763bcb74dae64522a0c972?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ed547eb8f10d06a7874dd5fc90562a2c44e33a0fd763bcb74dae64522a0c972?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&"
                    className="aspect-square w-[46px]"
                  />
                </div>
                <div className="flex justify-center items-center bg-white h-[46px] w-[46px]">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6db4dec20c2d730de18f786764a4dc7977fdfbc0d40a8f8e1f560eae981c8593?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6db4dec20c2d730de18f786764a4dc7977fdfbc0d40a8f8e1f560eae981c8593?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6db4dec20c2d730de18f786764a4dc7977fdfbc0d40a8f8e1f560eae981c8593?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6db4dec20c2d730de18f786764a4dc7977fdfbc0d40a8f8e1f560eae981c8593?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6db4dec20c2d730de18f786764a4dc7977fdfbc0d40a8f8e1f560eae981c8593?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6db4dec20c2d730de18f786764a4dc7977fdfbc0d40a8f8e1f560eae981c8593?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6db4dec20c2d730de18f786764a4dc7977fdfbc0d40a8f8e1f560eae981c8593?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6db4dec20c2d730de18f786764a4dc7977fdfbc0d40a8f8e1f560eae981c8593?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&"
                    className="aspect-square w-[46px]"
                  />
                </div>
                <div className="flex justify-center items-center bg-white h-[46px] w-[46px]">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/abe201aba5f02e6a6e977c6757209ada087aa0f511f6e7a42f3069ed0bf559d4?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/abe201aba5f02e6a6e977c6757209ada087aa0f511f6e7a42f3069ed0bf559d4?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/abe201aba5f02e6a6e977c6757209ada087aa0f511f6e7a42f3069ed0bf559d4?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/abe201aba5f02e6a6e977c6757209ada087aa0f511f6e7a42f3069ed0bf559d4?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/abe201aba5f02e6a6e977c6757209ada087aa0f511f6e7a42f3069ed0bf559d4?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/abe201aba5f02e6a6e977c6757209ada087aa0f511f6e7a42f3069ed0bf559d4?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/abe201aba5f02e6a6e977c6757209ada087aa0f511f6e7a42f3069ed0bf559d4?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/abe201aba5f02e6a6e977c6757209ada087aa0f511f6e7a42f3069ed0bf559d4?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&"
                    className="aspect-square w-[46px]"
                  />
                </div>
                <div className="flex justify-center items-center bg-white h-[46px] w-[46px]">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/406a9521bee5dc968ecc549662e8dcbd662f65c08f3ab186daa7b4dd50c1eea7?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/406a9521bee5dc968ecc549662e8dcbd662f65c08f3ab186daa7b4dd50c1eea7?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/406a9521bee5dc968ecc549662e8dcbd662f65c08f3ab186daa7b4dd50c1eea7?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/406a9521bee5dc968ecc549662e8dcbd662f65c08f3ab186daa7b4dd50c1eea7?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/406a9521bee5dc968ecc549662e8dcbd662f65c08f3ab186daa7b4dd50c1eea7?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/406a9521bee5dc968ecc549662e8dcbd662f65c08f3ab186daa7b4dd50c1eea7?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/406a9521bee5dc968ecc549662e8dcbd662f65c08f3ab186daa7b4dd50c1eea7?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/406a9521bee5dc968ecc549662e8dcbd662f65c08f3ab186daa7b4dd50c1eea7?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&"
                    className="aspect-square w-[46px]"
                  />
                </div>
                <div className="flex justify-center items-center bg-white h-[46px] w-[46px]">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b3d6769a1469bf38b4f91d0a0826c413c2e2dbf7264ca9bad722543b8331c3ed?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3d6769a1469bf38b4f91d0a0826c413c2e2dbf7264ca9bad722543b8331c3ed?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3d6769a1469bf38b4f91d0a0826c413c2e2dbf7264ca9bad722543b8331c3ed?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3d6769a1469bf38b4f91d0a0826c413c2e2dbf7264ca9bad722543b8331c3ed?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3d6769a1469bf38b4f91d0a0826c413c2e2dbf7264ca9bad722543b8331c3ed?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3d6769a1469bf38b4f91d0a0826c413c2e2dbf7264ca9bad722543b8331c3ed?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3d6769a1469bf38b4f91d0a0826c413c2e2dbf7264ca9bad722543b8331c3ed?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3d6769a1469bf38b4f91d0a0826c413c2e2dbf7264ca9bad722543b8331c3ed?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&"
                    className="aspect-square w-[46px]"
                  />
                </div>
                <div className="flex justify-center items-center bg-white h-[46px] w-[46px]">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/689d5d2c3dea49ea980ab4f9e6206dd8ff3a744cf2aab1dbf52c8e021cb34030?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/689d5d2c3dea49ea980ab4f9e6206dd8ff3a744cf2aab1dbf52c8e021cb34030?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/689d5d2c3dea49ea980ab4f9e6206dd8ff3a744cf2aab1dbf52c8e021cb34030?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/689d5d2c3dea49ea980ab4f9e6206dd8ff3a744cf2aab1dbf52c8e021cb34030?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/689d5d2c3dea49ea980ab4f9e6206dd8ff3a744cf2aab1dbf52c8e021cb34030?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/689d5d2c3dea49ea980ab4f9e6206dd8ff3a744cf2aab1dbf52c8e021cb34030?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/689d5d2c3dea49ea980ab4f9e6206dd8ff3a744cf2aab1dbf52c8e021cb34030?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/689d5d2c3dea49ea980ab4f9e6206dd8ff3a744cf2aab1dbf52c8e021cb34030?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&"
                    className="aspect-square w-[46px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow pl-11 max-md:mt-6 max-md:max-w-full">
            <div className="text-5xl text-green-600 leading-[58.8px] max-md:max-w-full">
              Get Started Pack
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3aea670d1911094af9e9c35498291eb6fd40e68688dd298b5f28e9886a8778b7?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&"
              className="max-w-full aspect-[11.11] w-[140px]"
            />
            <div className="self-start text-sm leading-4 text-center text-neutral-600">
              12 Reviews
            </div>
            <div className="mt-4 text-base font-bold leading-7 text-neutral-600 max-md:max-w-full">
              Valued at $99.47, get over 30% off with this introductory offer
              for first-time Shotsters
              <br />
              only.
            </div>
            <div className="mt-8 mr-6 text-base leading-7 text-neutral-600 max-md:mr-2.5 max-md:max-w-full">
              The Double Shot is the ultimate combination of New Zealand-grown
              antioxidant-rich
              <br />
              red berries and organic leafy greens. Join the 83% of daily
              Shotsters who{" "}
            </div>
            <div className="mt-3.5 mr-6 text-base leading-7 text-neutral-600 max-md:mr-2.5 max-md:max-w-full">
              improved health and wellbeing from taking their daily shots.
            </div>
            <div className="mt-7 text-base font-bold leading-7 text-neutral-600 max-md:max-w-full">
              The Get Started Pack includes:
            </div>
            <div className="mt-6 text-base leading-7 text-neutral-600 max-md:max-w-full">
              30 days supply of Double Shot.
            </div>
            <div className="text-base leading-7 text-neutral-600 max-md:max-w-full">
              A FREE Essentials Kit worth $22.50 – including a shaker, shaker
              ball, shot glass,
              <br />
              Double Shot scoop, and a fridge magnet.
            </div>
            <div className="text-base leading-7 text-neutral-600 max-md:max-w-full">
              {
                "Your Wellness Guarantee - we promise a full refund if you don't feel better after 30"
              }
              <br />
              days of taking the shots daily.
            </div>
            <div className="flex gap-1.5 self-start mt-6 text-base text-neutral-600 max-md:flex-wrap">
              <div className="grow my-auto leading-[175%]">
                Specially formulated with{" "}
              </div>
              <div className="flex flex-auto gap-0">
                <div className="justify-center py-px leading-7 whitespace-nowrap border-b border-solid border-neutral-600 border-opacity-10">
                  ingredients
                </div>
                <div className="flex-auto my-auto leading-[176%]">
                  {" "}
                  that have been shown to be a natural energy
                </div>
              </div>
            </div>
            <div className="mt-2 mr-10 text-base leading-7 text-neutral-600 max-md:mr-2.5 max-md:max-w-full">
              booster, support natural immunity, assist with reducing
              inflammation, and foster
              <br />
              healthy hair, skin and nails. 100% New Zealand grown and made.
            </div>
            <div className="flex gap-3 pr-20 mt-7 text-base leading-7 text-neutral-600 max-md:flex-wrap max-md:pr-5">
              <div className="justify-center py-px border-b border-solid border-neutral-600 border-opacity-10">
                Benefits &gt;
              </div>
              <div className="justify-center py-px border-b border-solid border-neutral-600 border-opacity-10">
                Ingredients &gt;
              </div>
              <div className="justify-center py-px text-base border-b border-solid border-neutral-600 border-opacity-10">
                Nutritional information &gt;
              </div>
            </div>
            <div className="justify-between pt-4 pb-4 mt-6 border-t border-b border-solid border-stone-200 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow self-stretch py-1 pr-4 text-base text-neutral-600 max-md:mt-7">
                    <div className="flex gap-2.5 font-bold whitespace-nowrap leading-[140%]">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2a9790b45d9bcb9292942f4d2f341128d674f498b9213f6498bee7834e05f62?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&"
                        className="shrink-0 w-5 aspect-square"
                      />
                      <div className="flex-auto my-auto">4</div>
                    </div>
                    <div className="leading-6">
                      Handfuls of fruit & veg in 1<br />
                      scoop
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow self-stretch pt-1.5 pb-5 text-neutral-600 max-md:mt-7">
                    <div className="flex gap-2.5 text-sm font-bold leading-5 whitespace-nowrap">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/98c9484123ba6c75413016969e8f5e9f13877f65dc7996ba8360a9bc7d7fbd4d?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&"
                        className="shrink-0 w-5 aspect-square"
                      />
                      <div className="flex-auto my-auto">$2.16</div>
                    </div>
                    <div className="text-base leading-6">cost per serving</div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow self-stretch pt-1.5 pr-3 pb-6 text-neutral-600 max-md:mt-7">
                    <div className="flex gap-2.5 text-base font-bold leading-6 whitespace-nowrap">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9604eed5b7714abc91dfc6e4fd59c210c47724fddae1f1b8d54dbedce24ac6bc?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&"
                        className="shrink-0 w-5 aspect-[1.05]"
                      />
                      <div className="flex-auto my-auto">Zero</div>
                    </div>
                    <div className="text-base leading-6">
                      added sugars and flavours
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-3.5 justify-between mt-6 whitespace-nowrap text-neutral-500 max-md:flex-wrap">
              <div className="text-2xl leading-10">$99.47</div>
              <div className="text-2xl leading-10 max-md:max-w-full">
                $69.00
              </div>
            </div>
            <div className="flex gap-0 mt-1 text-base leading-7 text-neutral-600 max-md:flex-wrap">
              <div className="justify-center py-px whitespace-nowrap border-b border-solid border-neutral-600 border-opacity-10">
                Shipping
              </div>
              <div className="max-md:max-w-full"> calculated at checkout.</div>
            </div>
            <div className="flex flex-col justify-center mt-6 max-w-full text-base leading-6 text-center whitespace-nowrap bg-white text-neutral-600 w-[321px]">
              <div className="flex flex-col justify-center p-5 rounded border border-solid border-neutral-500 max-w-[260px] max-md:px-5">
                <div className="flex gap-5 justify-center py-1.5 pr-12 max-md:pr-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7dc60eee640a6c9e939429d57999dfaabf469822ac572b8888d502585ff5855b?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&"
                    className="shrink-0 w-3 aspect-square"
                  />
                  <div>1</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a9c4e547435632e154f6e170fa438bdd2e1895324670fa46ef15198dc354d8d?apiKey=3e926e0a744b44fb8d3b7d73789a5a2e&"
                    className="shrink-0 w-3 aspect-square"
                  />
                </div>
              </div>
            </div>
            <div className="justify-center self-start px-11 py-3 mt-2 text-base font-bold leading-6 text-center text-white bg-pink-700 rounded-[30px] max-md:px-5">
              Add to cart
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
