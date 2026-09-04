import React from 'react'

type Bubble = {
    onClick: () => void
}

export default function Bubble({
    onClick
}: Bubble) {
  return (
    <div onClick={onClick} className='absolute bottom-20 right-0 rounded-full w-50 h-50'>
      hello
    </div>
  )
}
