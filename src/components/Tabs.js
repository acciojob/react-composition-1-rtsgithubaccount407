import React,{useState} from 'react'

const Tabs = ({ tabProp }) => {
    const [content,setContent] = useState(tabProp[0].content)
   return (
    <div>
      <ul>
               {tabProp.map((tab) => {
              return(
                   <li onClick={()=>setContent(tab.content)}>{tab.title}</li>
              )
               })}

           </ul>
           <p>{ content}</p>
    </div>
  )
}

export default Tabs
