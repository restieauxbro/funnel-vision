
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


