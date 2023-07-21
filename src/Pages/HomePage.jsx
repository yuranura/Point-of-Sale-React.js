import React from 'react'
import {Link} from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

function HomePage() {
  return (
    <MainLayout>
        <div className='bg-light p-5 mt-4 rounded-3'>
            <h1>Welcome to the simple POS for Alan Creative</h1>
            <p>Find all your digital to technology content needs for business and government only at Alan Creative!</p>
            <p>If you have an issue, call 0812-3456-XXXX anytimes</p>
            <Link to='/pos' className='btn btn-primary'>Click here to see the assessment</Link>
        </div>
    </MainLayout>
  )
}

export default HomePage