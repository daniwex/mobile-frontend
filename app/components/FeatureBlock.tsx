import React from 'react'

type feature = {
    item: String
}

export default function FeatureBlock({
    item
}: feature) {
  return (
    <div>
      {item}
    </div>
  )
}
