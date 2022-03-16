import React from 'react'
import { useLanguage } from '../providers/Language'

function MyComponent() {
  const { language } = useLanguage();
  return (
    <div>Valt språk: { language }</div>
  )
}

export default MyComponent