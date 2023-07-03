import StoreFilterBar from '@/components/StoreFilterBar'
import StorePagination from '@/components/StorePagination'
import StoreProductsList from '@/components/StoreProductsList'
import StoreTitle from '@/components/StoreTitle'
import React from 'react'

const page = () => {
  return (
    <>
    <StoreTitle />
    <StoreFilterBar />
    <StoreProductsList />
    <StorePagination />
    </>
  )
}

export default page