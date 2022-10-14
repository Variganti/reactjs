import React, { Suspense } from "react";


const ProfileComponent= React.lazy(()=> import('../profile/Profile'))

const Dynamic=()=>{

    return (
        <div>
            <h2> I am lazy loaded component</h2>

            <Suspense fallback={<div> Loading profile please wait..</div>}>
            <ProfileComponent/>
            </Suspense>
        </div>
    )
}

export default Dynamic