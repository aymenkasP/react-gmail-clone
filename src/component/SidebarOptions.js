
import '../appCss/SidebarOptions.css'


export default function SidebarOptions({Icon , title , number , selected }) {

    
    return(
        <div className= {`SidebarOptions ${selected && "sidebarOption--action"}` } >
        <Icon />
        <h3>{title} </h3>
        <p>{number} </p>
        </div>
    )
};
