export const metadata={
    title:{
        absolute: 'My Files',
    }
}


export default async function File({ params }) {
    // console.log(await params);
    const {filePath}  = await params;
    return(
        <h1>
            File <i>{filePath?.join("/")}</i>
        </h1>
        );
}



// so what does this code do?
/* 
This code defines a catch-all route in a Next.js application. 
The file is named [ ...filePath ] which indicates that it can 
capture all segments of a URL path that follow the base route.
So whenever a user navigates to a URL that doesn't match any specific route,
this catch-all route will be triggered.
And then open this specific page and params would be listed on
the console.
For example, if a user visits /some/random/path, the params object 
will contain { filePath: ['some','random', 'path']}


The best practice is not to put te optional catch-all route at the root level
*/