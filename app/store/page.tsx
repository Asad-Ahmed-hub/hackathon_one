"use client"
import StoreFilterBar from '@/components/StoreFilterBar'
import StorePagination from '@/components/StorePagination'
import StoreProductsList from '@/components/StoreProductsList'
import StoreTitle from '@/components/StoreTitle'
import React, { useState } from 'react'

const Page = () => {

  const [viewgrid, setViewGrid] = useState<number>(4);
  const handleGrid = (cols:number) => setViewGrid(cols);

  return (
    <>
    <StoreTitle />
    <StoreFilterBar handleGrid={handleGrid}/>
    <StoreProductsList grid={viewgrid} />
    <StorePagination />
    </>
  )
}

export default Page