"use client"
import { Menu } from "@/app/data";
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
        {Menu.map((item) => (
        <NavigationMenuItem key={item.id}>
          <Link href={item.link}>
          {item.name}
          </Link>
        </NavigationMenuItem>))}

      </NavigationMenuList>
    </NavigationMenu>

  )
}

export default NavLinks