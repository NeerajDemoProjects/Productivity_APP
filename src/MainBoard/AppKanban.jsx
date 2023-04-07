import { useState } from "react";



function AppKanban(props) {
  
  const kanban_style = {width:'100px'
          ,margin:"8%",height:"150x",
          backgroundColor:"transparent",
        borderWidth:"0px",
        Align:"center"}
  const [kanban,setKanbanStyle] =useState({width:'100px'
                                            ,margin:"8%",height:"150x",
                                            backgroundColor:"transparent",
                                           borderWidth:"0px"
                                  })


  const MouseEntered = (e)=>{
    var change = kanban_style
    kanban_style['width'] ="120px"
    kanban_style['boxShadow'] = " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    setKanbanStyle(kanban_style)


  }


  const MouseOut = (e)=>{
    setKanbanStyle(kanban_style)


  }


    return ( <>
<div class="list-group" onMouseEnter={(e)=>MouseEntered(e)}

onMouseLeave={(e)=>MouseOut()}

>
  <div className="list-group-item list-group-item-action "  style={kanban}>
<img src={props.image} style={{width:"100%",height:'75%'}}></img>


{props.name}

  </div>

  </div>
      </> );
}

export default AppKanban;