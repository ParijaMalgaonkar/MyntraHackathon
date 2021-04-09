import React,{useEffect, useState} from 'react'
import base from './base'
import storePage from '../Feature/storePage'


function Branches() {

  const [brand, setBrand] = useState([])
  let branches = []

  useEffect(() => {
    base('NIKE')
      .select({ view:'Grid View' })
      .eachPage((records, fetchNextPage) => {
        console.log(records)
        records.map((record) => {
          branches.push(record.fields.Branch);
        })
        setBrand([
          ...brand, {
            name: 'NIKE',
            branches:[
              ...branches
            ]
          }
        ])
        fetchNextPage();
      })
      base('Adidas')
      .select({ view:'Grid View' })
      .eachPage((records, fetchNextPage) => {
        console.log(records)
        records.map((record) => {
            branches.push(record.fields.Branch);
        })
        setBrand([
          ...brand, {
            name: 'Adidas',
            branches:[
              ...branches
            ]
          }
        ])
        fetchNextPage();
      })
      base('VERO MODA')
      .select({ view:'Grid View' })
      .eachPage((records, fetchNextPage) => {
        records.map((record) => {
            branches.push(record.fields.Branch);
        })
        setBrand([
          ...brand, {
            name: 'VERO MODA',
            branches:[
              ...branches
            ]
          }
        ])
        fetchNextPage();
      })
      base('MARKSandSPENCER')
      .select({ view:'Grid View' })
      .eachPage((records, fetchNextPage) => {
        records.map((record) => {
          branches.push(record.fields.Branch);
        })
        setBrand([
          ...brand, {
            name: 'MARKSandSPENCER',
            branches:[
              ...branches
            ]
          }
        ])
        fetchNextPage();
      })

  }, [])

  console.log("branchessss: ", branches);

  return (
    <>
      <storePage brandName={branches} />
    </>
  )
}

export default Branches