import React from 'react'

export default async function Comments({params}) {
    const paramsObj = await params;
    const {blogID} = paramsObj;
    console.log(paramsObj);
    
    return (
        <div>All comments on <b>{blogID}</b> page</div>
    );
}


