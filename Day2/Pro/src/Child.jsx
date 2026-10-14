// import React from 'react'

// const Child = ({msg1,arr,Info}) => {
//     let res=Object.entries(Info);
//   return (
//     <div>
//         <p>{msg1}</p>
//         {
//             arr.map((data)=>{
//                 return <p>{data}</p>
//             })
//         }
//         {
//             res.map((val)=>{
//                 return <p>{val}</p>
//             })
//         }
//     </div>
//   )
// }

// export default Child

import React from 'react'

const Child = ({a,b,data}) => {
    let res=Object.entries(data);
  return (
    <div>
        <p>{a}</p>
        {
            b.map((val)=>{
                return<p>{val}</p>
            })
        }
       {/* <h1>{b}</h1> */}
        {
            res.map((val1)=>{
                return <p>{val1}</p>
            })
        }
    </div>
  )
}

export default Child;