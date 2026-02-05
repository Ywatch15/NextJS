export default async function Comments(){
    await new Promise((resolve)=> setTimeout(resolve, 6000));
    return <div>100k Comments</div> 
}