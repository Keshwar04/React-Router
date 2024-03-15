import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
const Contactus = () => {
    const num = [1, 2, 3, 4, 5]
    return (
        <div>
            <div>contactus page</div>
            <div>
                {
                    num.map(e => (
                        <NavLink key={e} to={`/contactUs/${e}`}>
                            <p>DynamicPath:{e}</p>
                        </NavLink>
                    ))
                }
            </div>
            <Outlet />
        </div>
    )
}

export default Contactus