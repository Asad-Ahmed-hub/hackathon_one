"use client"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import Link from "next/link";


import React from 'react'

const NavLinks = () => {
  return (
    <NavigationMenu className="font-medium font-[.875rem] text-xl">
      <NavigationMenuList className="gap-4 cursor-pointer ">
        <NavigationMenuItem>
          Home
        </NavigationMenuItem>
        <NavigationMenuItem>
          About Us
        </NavigationMenuItem>
        <NavigationMenuItem>
          Shop
        </NavigationMenuItem>
        <NavigationMenuItem>
          Contact Us
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>

  )
}

export default NavLinks