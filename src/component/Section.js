import '../appCss/Section.css'




export default function Section({Icon , title , color,selected }) {
    return(
        <div className= {`Section ${selected && "Section_selected"}`}
        style = {{
            borderBottom : `3px solid ${color}`,
            color : `${selected && color}`
        }}>
           <Icon /> 
           <h4>
               {title}
           </h4>
        </div>
    )
};
