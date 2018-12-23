import React from "react"
import "../../ComponentStyles/WriteArticle.css"

const WriteArticle = () => {
    return(
       <div>
           <form>
               <input type="text" placeholder="Title" name ="" value = {} onChange = {} required/>
               <input type="text" placeholder="First Text" name ="" value = {} onChange = {} required/>
               <input type="text" placeholder="First Image (optional)" name ="" value = {} onChange = {} />
               <input type="text" placeholder="Second Text" name ="" value = {} onChange = {} required/>
               <input type="text" placeholder="Second Image (optional)" name ="" value = {} onChange = {}/>
               <input type="text" placeholder="Feature Image" name ="" value = {} onChange = {} required/>
           </form>
       </div>
    )
}

export default WriteArticle;