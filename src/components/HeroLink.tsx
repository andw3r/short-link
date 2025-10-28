export default function HeroLink() {
  return (
    <div className="col-span-6 col-start-2 bg-white px-5 sm:px-8 md:px-12 lg:px-[70px] py-3 sm:py-5 md:py-7 lg:py-9 rounded-large mt-6 sm:mt-8 md:mt-12 lg:mt-[72px] shadow-card">
      <h3 className="text-[18px] sm:text-xl md:text-2xl lg:text-[28px]">You searched for url-shortener - com</h3>

      <div className="flex my-2 sm:my-2.5 gap-2 md:gap-2.5 items-center">
        {/* <Image width={80} height={80} src="logo.png" alt="logo" /> */}
        <span className="min-w-12 sm:min-w-14 lg:min-w-[70px] min-h-12 sm:min-h-14 lg:min-h-[70px] bg-[#F5F6FB] border border-header rounded-full"></span>
        <div className="flex flex-col gap-1 sm:gap-1.5">
          <a className="underline text-button-primary " target="_blank" href="https://bit.ly/4oorRZc">bit.ly/4oorRZc</a>
          <span className="text-secondary text-sm md:text-base">https://templatesjungle.com/?s=url-</span>
        </div>
      </div>

      <button className="text-sm sm:text-base bg-button-primary text-white w-full py-1 sm:py-1.5 lg:py-3 rounded-large cursor-pointer">Copy</button>
    </div>
  );
}
