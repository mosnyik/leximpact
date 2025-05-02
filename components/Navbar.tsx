"use client";
import Link from "next/link";
import Image from "next/image";
import NavbarButton from "./NavbarButton";
import { DropdownMenu, Button } from "@radix-ui/themes";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const signUp = () => console.log("User sign up");
  const logIn = () => console.log("User log in");
  return (
    <nav className="flex justify-between items-center bg-white border-b-2 h-20 px-6 py-6 ">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Logo"
          width={237}
          height={80}
          className="pl-[24px] pr-[24px]"
        />
      </Link>
      {/* Desktop Menu */}
      <div>
        {
          <div className="hidden space-x-3 md:flex justify-center items-center">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <Button
                  variant="solid"
                  className="flex justify-center items-center focus:outline-none focus:ring-0 hover:text-primary md:text-sm "
                >
                  Catalog
                  <DropdownMenu.TriggerIcon className="ml-2" />
                </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content
                variant="solid"
                className="bg-primary/50 text-white border border-gray-300 shadow-md rounded-md w-auto p-2"
                align="center"
              >
                <DropdownMenu.Item className="focus:outline-none focus:ring-0 hover:bg-gray-200  hover:text-gray-600 rounded-md px-2  ">
                  Data Center
                </DropdownMenu.Item>
                <DropdownMenu.Item className="focus:outline-none focus:ring-0 hover:bg-gray-200  hover:text-gray-600 rounded-md px-2">
                  Cloud Computing
                </DropdownMenu.Item>
                <DropdownMenu.Item className="focus:outline-none focus:ring-0 hover:bg-gray-200  hover:text-gray-600 rounded-md px-2">
                  AI Academy
                </DropdownMenu.Item>
                <DropdownMenu.Item className="focus:outline-none focus:ring-0 hover:bg-gray-200  hover:text-gray-600 rounded-md px-2">
                  Profile
                </DropdownMenu.Item>
                <DropdownMenu.Item className="focus:outline-none focus:ring-0 hover:bg-gray-200  hover:text-gray-600 rounded-md px-2">
                  Support
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>

            <Link href="/" className="hover:text-primary md:text-sm ">
              Resources
            </Link>
            <Link href="/" className="hover:text-primary md:text-sm ">
              Community
            </Link>
            <Link href="/" className="hover:text-primary md:text-sm ">
              FAQs
            </Link>
          </div>
        }
      </div>
      {/* Desktop Buttons */}
      <div className="hidden space-x-3 md:flex">
        <NavbarButton
          bgColor="bg-white"
          icon={
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H12.5"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.33337 14.1666L12.5 9.99992L8.33337 5.83325"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.5 10H2.5"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          onClick={logIn}
        >
          Log In
        </NavbarButton>
        <NavbarButton
          bgColor=""
          textColor="text-white"
          icon={
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 8V14"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 11H16"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          onClick={signUp}
        >
          Sign Up
        </NavbarButton>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden p-2 focus:outline-none"
      >
        {menuOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
      </button>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center py-6 space-y-4 md:hidden z-50">
          <div className=" space-x-3 md:flex justify-center items-center">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <Button
                  variant="solid"
                  className="flex justify-center items-center focus:outline-none focus:ring-0 hover:text-primary md:text-sm "
                >
                  Catalog
                  <DropdownMenu.TriggerIcon className="ml-2" />
                </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content
                variant="solid"
                className="bg-primary/50 text-white border border-gray-300 shadow-md rounded-md w-auto p-2"
                align="center"
              >
                <DropdownMenu.Item className="focus:outline-none focus:ring-0 hover:bg-gray-200  hover:text-gray-600 rounded-md px-2 ">
                  Data Center
                </DropdownMenu.Item>
                <DropdownMenu.Item className="focus:outline-none focus:ring-0 hover:bg-gray-200  hover:text-gray-600 rounded-md px-2">
                  Cloud Computing
                </DropdownMenu.Item>
                <DropdownMenu.Item className="focus:outline-none focus:ring-0 hover:bg-gray-200  hover:text-gray-600 rounded-md px-2">
                  AI Academy
                </DropdownMenu.Item>
                <DropdownMenu.Item className="focus:outline-none focus:ring-0 hover:bg-gray-200  hover:text-gray-600 rounded-md px-2">
                  Profile
                </DropdownMenu.Item>
                <DropdownMenu.Item className="focus:outline-none focus:ring-0 hover:bg-gray-200  hover:text-gray-600 rounded-md px-2">
                  Support
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </div>
          <Link href="/" className="hover:text-primary text-lg">
            Resources
          </Link>
          <Link href="/" className="hover:text-primary text-lg">
            Community
          </Link>
          <Link href="/" className="hover:text-primary text-lg">
            FAQs
          </Link>
          <div className="space-x-3 flex flex-col justify-center items-center">
            <NavbarButton bgColor="" textColor="text-white" onClick={signUp}>
              Sign Up
            </NavbarButton>
            <NavbarButton bgColor="bg-gray" onClick={logIn}>
              Log In
            </NavbarButton>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
