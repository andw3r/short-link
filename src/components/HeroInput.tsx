import { LuLink } from "react-icons/lu";

export default function HeroInput () {
  return(
    <div className="col-span-6 col-start-2 mt-3 md:mt-5">
      <div className="flex w-full items-center h-11 sm:h-12 md:h-[52px] bg-white border-4 md:border-[6px] border-navbar rounded-large p-0.5">
        <span className="text-button-primary flex items-center justify-center bg-background p-1.5 h-full rounded-full">
          <LuLink  className="text-xl sm:text-[22px]" />
        </span>

        <input type="text" className="outline-0 text-sm md:text-base w-full mx-2 md:mx-4" placeholder="enter link here" />

        <button className="text-secondary flex items-center cursor-pointer bg-background h-full rounded-large text-[13px] sm:text-sm md:text-base px-4 sm:px-6 md:px-10 hover:bg-white-hover">Shorten</button>
      </div>
    </div>
  )
}