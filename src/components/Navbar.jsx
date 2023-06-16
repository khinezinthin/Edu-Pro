import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Modal, Group, Button, useMantineTheme } from "@mantine/core";
import { GrClose } from "react-icons/gr";
import { AiOutlinePlus } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { Link,NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {BiSearch} from "react-icons/bi";

const Navbar = ({ value, absolute }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const stick = useSelector((state) => state.navSlice.value);
  const [openedSideBar, { open: openSidebar, close: closeSideBar }] =
    useDisclosure(false);
  const theme = useMantineTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event) => {
    if (isOpen && !event.target.closest(".sidebar")) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav
        onClick={handleOutsideClick}
        className={` lg:px-16 max-lg:px-8 max-sm:px-5 animationNavbar py-8 z-50 top-0 left-0 right-0 fixed ${
          absolute && stick < value ? "absolute bg-transparent " : "bg-white shadow-md "
        }`}>
        <div className="max-w-[1650px] sticky  items-center m-auto top-0 left-0  flex justify-between  ">
          <div className=" flex justify-start items-center  w-[150px] max-[350px]:w-[100px]">
            <a className="navbar-brand " href="#">
              <img
                src={
                  "https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/01/logo-2.png"
                }
                alt=""
                className=" w-[150px]"
              />
            </a>
          </div>

          <div className="hidden lg:flex  justify-between  items-center  w-2/5 ">
            <ul className="w-[100%] navbar-nav me-auto mb-lg-0 flex justify-between ">
              <li className="nav-item flex justify-center underline-on-hover hover:text-[--color-primary] ">
                <NavLink to="/" className="nav-link NavComponents ">
                  Home
                </NavLink>
              </li>
              <li className="nav-item underline-on-hover hover:text-[--color-primary]">
                <NavLink to="/aboutUs" className="nav-link NavComponents ">
                  About
                </NavLink>
              </li>
              <li className="nav-item underline-on-hover hover:text-[--color-primary]">
                <NavLink to="/courses" className="nav-link NavComponents ">
                  Courses
                </NavLink>
              </li>
              <li className="nav-item underline-on-hover hover:text-[--color-primary]">
                <NavLink to="/blog" className="nav-link NavComponents ">
                  Blogs
                </NavLink>
              </li>
              <li className="nav-item underline-on-hover hover:text-[--color-primary]">
                <NavLink
                  to="/contactUS"
                  className="nav-link NavComponents ">
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item underline-on-hover hover:text-[--color-primary]">
                <NavLink to="/pricing" className="nav-link NavComponents ">
                  Pricing
                </NavLink>
              </li>
              <li className="nav-item underline-on-hover hover:text-[--color-primary]">
                <NavLink to="/FAQ" className="nav-link NavComponents ">
                  FAQ
                </NavLink>
              </li>
            </ul>
          </div>
          <div className=" flex items-center justify-end w-3/5 lg:w-1/5 lg:gap-2 md:gap-2 gap-3 ">
            <div
              onClick={open}
              className="text-[--color-primary] lg:w-[48px] lg:h-[45.4px] md:px-4 md:py-4 px-3  py-2 cursor-pointer   rounded bg-white hover:bg-[--color-heading] searchHover shadow flex justify-center items-center flex-col duration-300"
              type="button">
              <BiSearch className="search text-black" />
            </div>
            <div className=" hidden md:block lg:block">
              <Link to="/register">
                <button
                  className="px-3 py-3 rounded  bg-white text-[--color-black] shadow"
                  type="button">
                  <BiUser className=" text-[--color-primary]" />
                </button>
              </Link>
            </div>
            <button
              onClick={openSidebar}
              className="lg:hidden  md:px-4 md:py-4 px-3  py-2 rounded  bg-white text-[--color-black] shadow"
              type="button">
              <GiHamburgerMenu className=" text-[--color-primary]" />
            </button>
            <button
              className="lg:hidden  md:hidden px-3  py-2 rounded  bg-white text-[--color-black] shadow"
              type="button">
              <BiUser className=" text-[--color-primary]" />
            </button>
          </div>
        </div>
      </nav>

      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        size="60%"
        transitionProps={{
          transition: "fade",
          duration: 600,
          timingFunction: "linear",
        }}
        overlayProps={{
          color: "#231F41",
          opacity: 0.55,
        }}
        centered>
        <div
          onClick={close}
          className=" bg-slate-50 p-3 rounded-[50%] absolute top-[31px] right-[31px]">
          <GrClose />
        </div>
        <form className="    flex justify-around  items-center bg-transparent">
          <input
            type="text "
            className=" w-[90%] py-2 outline-none text-lg"
            placeholder=" Search Here..."
          />
          <CiSearch />
        </form>
      </Modal>

      <Drawer
        opened={openedSideBar}
        onClose={closeSideBar}
        withCloseButton={false}>
        <ul className=" me-auto flex flex-col gap-10  mb-lg-0  ">
          <li className=" justify-between flex items-center">
            <a className="navbar-brand " href="#">
              <img
                src={
                  "https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/01/logo-2.png"
                }
                alt=""
                className=" w-[150px]"
              />
            </a>
            <div
              onClick={closeSideBar}
              className=" bg-slate-50 p-3 rounded-[50%] shadow">
              <GrClose />
            </div>
          </li>
          <li className=" underline-on-hover hover:text-[--color-primary] flex justify-between items-center">
            <NavLink to="/" className="nav-link NavComponents ">
              Home
            </NavLink>
            <AiOutlinePlus />
          </li>
          <li className=" underline-on-hover hover:text-[--color-primary] flex justify-between items-center">
            <NavLink to="/aboutUs" className="nav-link NavComponents ">
              About
            </NavLink>
            <AiOutlinePlus />
          </li>
          <li className=" underline-on-hover hover:text-[--color-primary] flex justify-between items-center">
            <NavLink to="/courses" className="nav-link NavComponents ">
              Courses
            </NavLink>
            <AiOutlinePlus />
          </li>
          <li className=" underline-on-hover hover:text-[--color-primary] flex justify-between items-center">
            <NavLink to="/blog" className="nav-link NavComponents ">
              Blogs
            </NavLink>
            <AiOutlinePlus />
          </li>
          <li className=" underline-on-hover hover:text-[--color-primary] flex justify-between items-center">
            <NavLink to="/contactUS" className="nav-link NavComponents ">
              Contact Us
            </NavLink>
            <AiOutlinePlus />
          </li>
          <li className=" underline-on-hover hover:text-[--color-primary] flex justify-between items-center">
            <NavLink to="/pricing" className="nav-link NavComponents ">
              Pricing
            </NavLink>
            <AiOutlinePlus />
          </li>
          <li className=" underline-on-hover hover:text-[--color-primary] flex justify-between items-center">
            <NavLink to="/FAQ" className="nav-link NavComponents ">
              FAQ
            </NavLink>
            <AiOutlinePlus />
          </li>
        </ul>
      </Drawer>
    </>
  );
};

export default Navbar;
