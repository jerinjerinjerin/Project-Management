import React from 'react'
import ReusablePriorityPage from '../reusablePriorityPage'
import { Priority } from '@/state/api'


const Urgend = () => {
  return (
    <ReusablePriorityPage priority={Priority.Backlog}/>
  )
}

export default Urgend