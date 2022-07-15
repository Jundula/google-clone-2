import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import React, { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function HeaderSearch() {
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const search = (
    e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;
    router.push(`/search?term=${term}`);
  };

  return (
    <div className=" sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Link href="/">
          <Image
            src="https://logos-download.com/wp-content/uploads/2016/02/Google_Logo_2015.png"
            height={40}
            width={120}
            className=" cursor-pointer"
          />
        </Link>

        <form className="flex flex-grow border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5 ">
          <input
            className="flex-grow w-full focus:outline-none"
            ref={searchInputRef}
            type="text"
          />
          <XIcon
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <SearchIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 " />
          <button onClick={search} hidden type="submit">
            Search
          </button>
        </form>
        <Avatar className=" ml-auto"  url='https://links.papareact.com/gll'/>

      </div>
      <HeaderOptions/>
      
    </div>
  );
}

export default HeaderSearch;
