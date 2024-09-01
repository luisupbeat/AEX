"use client"
import { useRouter } from 'next/navigation'
import React from 'react'


export default function Users({users}) {
    const router = useRouter()
    return (
        <ul className='list-group'>
            {
                users.map((user) => (
                    <li  key={user.id}
                    className='list-group-item d-flex justify-content-between align-item-center list-group-item-action'
                    onClick={()=>{
                        router.push(`/users/${user.id}`)
                    }}
                    >
                        <div >
                            <h5>
                                {user.id} {user.first_name} {user.last_name}
                            </h5>
                            <p>{user.email}</p>
                        </div>
                        <img className='rounded-circle' src={user.avatar} alt={user.email} />
                    </li>
                ))
            }
        </ul>
    )
}
