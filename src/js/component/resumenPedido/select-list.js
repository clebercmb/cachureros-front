import React from "react";

class SelectList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          title: "Tarapacá",
        },{
          id: 2,
          title: "Antofagasta",
        },{
          id: 3,
          title: "Atacama",
        },{
          id: 4,
          title: "Arica y Parinacota",
        },{
          id: 5,
          title: "Bío-Bío",
        },{
          id: 6,
          title: "Coquimbo",
        },{
          id: 7,
          title: "La Araucanía",
        },{
          id: 8,
          title: "Los Lagos",
        },{
          id: 9,
          title: "Los Ríos",
        },{
          id: 10,
          title: "Magallanes",
        },{
          id: 11,
          title: "Maule",
        },{
          id: 12,
          title: "Metropolitana de Santiago",
        },{
          id: 13,
          title: "Ñuble",
        },{
          id: 14,
          title: "O’Higgins",
        },{
          id: 15,
          title: "Valparaíso",
        }
      ],
    };
  }

  render(){
      return(
          <div>
              {this.state.data.map((region)=>{
                  return(
                    <select className="input-contact-2" name="regiones">
                    <option value="Tarapaca">{region.title}</option>
                    </select>
                  )
              })}
              
          </div>
      )
  }
}

export default SelectList;
