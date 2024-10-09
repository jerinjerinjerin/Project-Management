import React from 'react'
import Header from '../(components)/Header'


const Settings = () => {

    const userSettings = {
        userName : "johndoe",
        email: "johndoe@gmail.com",
        teamName : "Development Team",
        roleName: "Developer"
    }

    const labelStyles = "block text-sm font-medium dark:text-white"
    const textStyles = "mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 dark:text-white"

  return (
    <div className='p-8'>
       <Header name='Settings'/>

       <div className="space-y-4">
        <div className="">
         <label className={labelStyles}>Username</label>
         <div className={textStyles}>{userSettings.userName}</div>
        </div>
        <div className="">
         <label className={labelStyles}>Email</label>
         <div className={textStyles}>{userSettings.email}</div>
        </div>
        <div className="">
         <label className={labelStyles}>Team</label>
         <div className={textStyles}>{userSettings.teamName}</div>
        </div>
        <div className="">
         <label className={labelStyles}>Username</label>
         <div className={textStyles}>{userSettings.userName}</div>
        </div>
        <div className="">
         <label className={labelStyles}>Role</label>
         <div className={textStyles}>{userSettings.roleName}</div>
        </div>
       </div>
    </div>
  )
}

export default Settings