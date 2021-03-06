import React from "react"

function FormComponent(props){
    return (
        <main style = {{textAlign:"center"}}>
             <form>
                 <input 
                    name="firstName" 
                    value = {props.data.firstName} 
                    placeholder = "First Name" 
                    onChange = {props.handleChange} 
                 />
                 <br />
                 <input 
                    name="lastName" 
                    value = {props.data.lastName} 
                    placeholder = "Last Name" 
                    onChange = {props.handleChange} 
                 />
                 <br />
                 <input 
                    name="age" 
                    value = {props.data.age} 
                    placeholder = "Age"
                    onChange = {props.handleChange} 
                 />
                 <br />
                 <label>
                 <input 
                     type = "radio"
                     name = "gender"
                     value = "male"
                     checked = {props.data.gender === "male"}
                     onChange = {props.handleChange}
                 /> Male
                 </label>
                 <br/>
                 <label>
                 <input 
                     type = "radio"
                     name = "gender"
                     value = "female"
                     checked = {props.data.gender === "female"}
                     onChange = {props.handleChange}
                 /> Female
                 </label>
                 <br/>
                 <select value={props.data.destination} name="destination"
                   onChange = {props.handleChange}>
                   <option value="y">--select destination--</option>
                   <option value="Bareilly">Bareilly</option>
                   <option value="Rewari">Rewari</option>
                   <option value="Patna">Patna</option>
                   <option value="Agra">Agra</option>
                 </select>
                 <br/>
                 <label>
                    <input 
                      type = "checkbox"
                      name = "isVegan"
                      onChange = {props.handleChange}
                      checked = {props.data.isVegan}
                     /> Vegan?
                 </label>
                 <br/>
                 <label>
                    <input 
                      type = "checkbox"
                      name = "isKosher"
                      onChange = {props.handleChange}
                      checked = {props.data.isKosher}
                     /> Kosher?
                 </label>
                 <br/>
                 <label>
                    <input 
                      type = "checkbox"
                      name = "isLactoseFree"
                      onChange = {props.handleChange}
                      checked = {props.data.isLactoseFree}
                     /> Lactose Free?
                 </label>
                 <br/>
                 <button>Submit</button>
             </form>
             <hr/>
             <h2>Entered Information</h2>
             <p>Your name: {props.data.firstName} {props.data.lastName}</p>
             <p>Your age: {props.data.age}</p>
             <p>Your gender: {props.data.gender}</p>
             <p>Your destination:{props.data.destination}</p>
             <p>Your restriction: </p>
             <p>Vegan: {props.data.isVegan === true ? "Yes" :"No"}</p>
             <p>Kosher: {props.data.isKosher === true ? "Yes" :"No"}</p>
             <p>Lactose Free: {props.data.isLactoseFree === true ? "Yes" :"No"}</p>

        </main>
    )
}

export default FormComponent