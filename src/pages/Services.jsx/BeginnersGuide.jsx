import axios from 'axios'
import React, { useEffect, useState } from 'react'
import apis from '../../utils/apis'

function BeginnersGuide() {
  const [data, setData] = useState("")
  const handler = async () => {
    try {
      const res = await axios.get(`${apis.about_us}3`)
      if (res?.data?.status === 200) {
        setData(res?.data?.data)
      }
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    handler()
  }, [])
  return (
    <div className='text-blackLight p-2 pb-20 text-xsm'>
      <h1 className='font-extrabold text-black text-sm text-center py-10'>{data[0]?.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: data[0]?.description }} /></div>
  )
}

export default BeginnersGuide