import { PiLinkSimpleBold } from "react-icons/pi";

export default function LinkDetails () {
  return (
    <div className="px-4 md:px-6 lg:px-8 pt-4 md:pt-6 lg:pt-8 pb-5 md:pb-7 lg:pb-9 bg-white rounded-md shadow-card">
      <h3 className="text-xl sm:text-2xl lg:text-[28px] mb-3.5 lg:mb-5">Link details</h3>

      <form action="" className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-secondary text-sm">Destination URL</label>
          <div className="flex relative h-fit">
            <span className="absolute left-0 bg-input h-full w-10 md:w-12 rounded-sm flex top-0 justify-center items-center text-2xl text-button-primary">
              <PiLinkSimpleBold />
            </span>
            <input type="text" placeholder="https://example.com/my-long-url" className="w-full rounded-sm border-[3px] pl-14 md:border-4 border-input bg-white px-3 py-1.5 md:py-2 text-[#161618] placeholder:text-[#9B9CA1] focus:outline-none focus:ring-2 focus:ring-[#4270E3] focus:border-transparent transition" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-secondary text-sm">Short link</label>
          <input type="text" placeholder="main-link" className="w-full rounded-sm border-[3px] md:border-4 border-input bg-white px-3 py-1.5 md:py-2 text-[#161618] placeholder:text-[#9B9CA1] focus:outline-none focus:ring-2 focus:ring-[#4270E3] focus:border-transparent transition" />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-secondary text-sm">Title (optional)</label>
          <input type="text" placeholder="Main link" className="w-full rounded-sm border-[3px] md:border-4 border-input bg-white px-3 py-1.5 md:py-2 text-[#161618] placeholder:text-[#9B9CA1] focus:outline-none focus:ring-2 focus:ring-[#4270E3] focus:border-transparent transition" />
        </div>
      </form>
    </div>
  )
}