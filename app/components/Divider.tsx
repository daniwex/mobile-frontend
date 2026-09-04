import React from 'react'

type Divider = {
    modifier: String, 
}

export default function Divider({
    modifier
}: Divider) {
  return (
    <hr className={`${modifier}`}></hr>
  )
}
