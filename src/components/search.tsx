import Image from "next/image";
import logo from "@/assets/logo_final.png";

export default function Search() {
  return(
    <div className="h-screen w-auto bg-[url('../assets/background_image.png')] bg-no-repeat bg-cover">
      <div className="p-10">
        <div className="flex flex-col md:flex-row place-items-center justify-center bg-white bg-opacity-70 p-10 rounded gap-10">
          <div className="w-20 h-auto md:w-60">
            <Image
              src={logo}
              alt="Nutrivize Logo"
            />
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-black text-2xl md:text-6xl">
              Nutrivize Database
            </p>
            <p className="text-black md:text-2xl">
              Search foods in nutrivize database:
            </p>
            <form>
              <label htmlFor="default-search"
                     className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                       stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
                <input type="search" id="default-search"
                       className="block w-full p-4 pl-10 text-xs md:text-sm text-gray-900 border-2 border-pink-300 rounded-lg bg-pink-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-pink-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="Search apples, potatoes..." required />
                <button type="submit"
                        className="text-white absolute right-2.5 bottom-2.5 bg-pink-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}