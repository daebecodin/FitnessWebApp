'use client'
import React from 'react'
import {  Navbar,
          NavbarBrand,
          NavbarContent,
          NavbarItem,
          NavbarMenuToggle,
          NavbarMenu,
          NavbarMenuItem,
          Button,
            ButtonGroup,
} from "@nextui-org/react";
import Link from "next/link";
import {NextUIProvider} from "@nextui-org/react";


export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "My Settings",
        "Help & Feedback",
        "Log Out",
    ];

    return (
      <NextUIProvider>
          <main className={"text-slate-400"}>
              <Navbar className={"bg-gray-900 text-slate-400"} onMenuOpenChange={setIsMenuOpen} isBordered>
                  <NavbarContent>
                      <NavbarMenuToggle
                          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                          className="sm:hidden"
                      />
                      <NavbarBrand>
                          <p className="font-bold text-inherit">FitAssist</p>
                      </NavbarBrand>
                  </NavbarContent>

                  <NavbarContent className="hidden sm:flex gap-4" justify="center">
                      <NavbarItem>
                          <Link color="foreground" href="#">
                              Home
                          </Link>
                      </NavbarItem>
                      <NavbarItem>
                          <Link href="#" aria-current="page">
                              Service
                          </Link>
                      </NavbarItem>
                      <NavbarItem>
                          <Link color="foreground" href="#">
                              Contact
                          </Link>
                      </NavbarItem>
                  </NavbarContent>
                  <NavbarContent justify="end">
                      <NavbarItem className="hidden lg:flex">
                          <Link href="#">Login</Link>
                      </NavbarItem>
                      <NavbarItem>
                          <Button as={Link} color="primary" href="#" variant="flat">
                              Sign Up
                          </Button>
                      </NavbarItem>
                  </NavbarContent>
                  <NavbarMenu>
                      {menuItems.map((item, index) => (
                          <NavbarMenuItem key={`${item}-${index}`}>
                              <Link
                                  color={
                                      index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                                  }
                                  className="w-full"
                                  href="#"
                              >
                                  {item}
                              </Link>
                          </NavbarMenuItem>
                      ))}
                  </NavbarMenu>
              </Navbar>
              <div className={"w-full h-screen bg-gray-800 grid grid-cols-2 "}>
                  <div className={"  w-full h-full grid grid-rows-2 items-center p-48 flex-wrap"}>
                      <div className={""}>Dummy text</div>
                      <Link href={"/dashboard"}>
                          <Button  className={"bg-red-500 w-1/2"}>
                              Log In
                          </Button>
                      </Link>

                  </div>
                  <div className={" w-full h-full bg-gray-800 place-content-center place-items-center"}>
                      <p>Picture Here</p>
                  </div>
              </div>
          </main>
      </NextUIProvider>
  );
}

