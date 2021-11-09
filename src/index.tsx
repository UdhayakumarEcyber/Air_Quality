import * as React from "react";
import { registerWidget, registerLink, registerUI, IContextProvider, } from './uxp';
import { DataList, Button, WidgetWrapper, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";
import './styles.scss';

import {IHeatmapConfiguration} from 'uxp/components';

interface IWidgetProps {
    uxpContext?: IContextProvider,
    instanceId?: string
}


const Air_QualityWidget: React.FunctionComponent<IWidgetProps> = (props) => {

 
    let [selected, setSelected] = React.useState<string | null>("op-1");

    let [regions, setRegions] = React.useState<any[]>([])
    let [isAddingRegion, setIsAddingRegion] = React.useState<boolean>(false)

    let regionCoords = React.useRef<any[]>([])


   const addRegion = () => {
       setIsAddingRegion(true);
   }

  
  //  const list = [
  //   {
  //       id: 'a',
  //       name: 'Pending', 
  //       icon : "https://static.iviva.com/images/uxp-generic-widgets/list-view.png",
  //       count : '09',
  //       sub_para :"Work Orders Pending"
  //   },
  //   {
  //       id: 'b',
  //       name: 'Orders', 
  //       icon : "https://static.iviva.com/images/uxp-generic-widgets/list-save.png",
  //       count : '12',
  //       sub_para :"Planned Work Orders"
  //   },
  //   {
  //       id: 'c',
  //       name: 'issues', 
  //       icon : "https://static.iviva.com/images/uxp-generic-widgets/list-reload.png",
  //       count : '4',
  //       sub_para :"repeat issues"
  //   },
  //   {
  //       id: 'd',
  //       name: 'hotspots',
  //       icon : "https://static.iviva.com/images/uxp-generic-widgets/chart-icon.png",
  //       count : '2',
  //       sub_para :"Incident hotspots"
  //   },
  // ];


const list = [
    {
        id: 'a',
        name: 'Pending', 
        icon : "https://static.iviva.com/images/uxp-generic-widgets/list-view.png",
        count : 'Moderate',
        sub_para :"Air pollution level"
    },
    {
        id: 'b',
        name: 'Orders', 
        icon : "https://static.iviva.com/images/uxp-generic-widgets/list-save.png",
        count : '54',
        sub_para :"Air quality index"
    },
    {
        id: 'c',
        name: 'issues', 
        icon : "https://static.iviva.com/images/uxp-generic-widgets/list-reload.png",
        count : 'PM10',
        sub_para :"Main Pollutant"
    },
    {
        id: 'd',
        name: 'hotspots',
        icon : "https://static.iviva.com/images/uxp-generic-widgets/chart-icon.png",
        count : '13 µg/m³',
        sub_para :"Concentration"
    },
  ];
  

    return (
        <WidgetWrapper className="air-quality">
            <TitleBar title='AIR QUALITY'>
            
                               <div className="rht-title-section">
                                    <Select
                                        selected={selected}
                                        options={[
                                            { label: "SAUDI ARABIA", value: "op-1" },
                                            { label: "UNITED ARAB EMIRATES", value: "op-2" },
                                        ]}
                                        onChange={(value) => { setSelected(value) }}
                                        placeholder=" -- select --"
                                        isValid={selected ? selected?.length > 0 : null}
                                    />
                                
                                <Select
                                        selected={selected}
                                        options={[
                                            { label: "MADINAH", value: "op-1" },
                                            { label: "MAKKAH", value: "op-2" },
                                        ]}
                                        onChange={(value) => { setSelected(value) }}
                                        placeholder=" -- select --"
                                        isValid={selected ? selected?.length > 0 : null}
                                    />
                              </div>
                                
                            
            </TitleBar> 



            <div className="transport_map">

                <div className="transport_map-sec" style={{ width: "100%", height: "100%" }}>  



                <MapComponent
                     mapUrl="" 

                    staticImage={{url:'https://static.iviva.com/images/uxp-generic-widgets/map.png', width:2880,height:1724}}

                    onMarkerClick={(el, data) => {  
                        console.log(el)
                        console.log(data)
                    }}

                    onClick ={(e)=> {
                        console.log("Hi", e)
                    }} 

                    center={{ position: { latitude: 862, longitude: 1020 }, renderMarker: false }}
                    zoom={-1}
                    maxZoom={10}
                    minZoom ={-10}
                    regions={regions}  
                    zoomOnScroll ={true}

                  
                    heatmap={{
                        values: [
                            {
                                latitude: 45.2654,
                                longitude: 28.4607,
                                intensity: 20
                            },
                            {
                                latitude: 24.5247,
                                longitude: 39.5692,
                                intensity: 20
                            },
                        ]
                    }}

                    markers={[   
                        {
                            latitude: 1053.9685736380504,
                            longitude:  620,
                            data: {
                                name: "Medina"
                            },
                             customHTMLIcon : {
                                className : "map_spot chart",
                                html : "<div class='chart-count'>4</div>",
                                iconSize : [30, 30]
                            }, 
                            renderPopup :{
                                content : () => 
                                
                                <div className="spot_content green-energy_content">  
                                    <div className="section-content">
                                         <h5>4 PM</h5>
                                        <p>Average</p>  
                                    </div>  
                                </div> 
                            } 
                        },  

                        {
                            latitude: 526.570973377823,
                            longitude:  702,
                            data: {
                                name: "Medina"
                            },
                             customHTMLIcon : {
                                className : "map_spot chart",
                                html : "<div class='chart-count'>2</div>",
                                iconSize : [30, 30]
                            }, 
                            renderPopup :{
                                content : () => 
                                
                                <div className="spot_content green-energy_content">  
                                    <div className="section-content">
                                       <h5>2 PM</h5>
                                        <p>Average</p>    
                                    </div>  
                                </div> 
                            } 
                        }, 

                        {
                            latitude: 748.3167286207326,
                            longitude:  1202,
                            data: {
                                name: "Medina"
                            },
                             customHTMLIcon : {
                                className : "map_spot chart",
                                html : "<div class='chart-count'>8</div>",
                                iconSize : [30, 30]
                            }, 
                            renderPopup :{
                                content : () => 
                                
                                <div className="spot_content green-energy_content">   
                                    <div className="section-content">
                                        <h5>8 PM</h5>
                                        <p>Average</p>  
                                    </div>  
                                </div> 
                            } 
                        },

                         {
                            latitude: 884.1609750758486,
                            longitude: 750,
                            data: {
                                name: "Medina"
                            },
                            customHTMLIcon : {
                                className : "map_spot chart",
                                html : "<div class='chart-count'>1</div>",
                                iconSize : [30, 30]
                            }, 
                            renderPopup :{
                                content : () => 
                                
                                <div className="spot_content green-energy_content">   
                                    <div className="section-content">
                                        <h5>1 PM</h5>
                                        <p>Average</p>  
                                    </div>  
                                </div> 
                            } 
                        },
                        
                        {
                            latitude: 1085.9296352518295,
                            longitude:  1112,
                            data: {
                                name: "Medina"
                            },
                            customHTMLIcon : {
                                className : "map_spot chart",
                                html : "<div class='chart-count'>6</div>",
                                iconSize : [30, 30]
                            }, 
                            renderPopup :{
                                content : () => 
                                
                                <div className="spot_content green-energy_content">   
                                    <div className="section-content">
                                        <h5>6 PM</h5>
                                        <p>Average</p>  
                                    </div>  
                                </div> 
                            } 
                        }, 
                         
                        
                    ]}
                /> 
                    
        </div>   
             

            </div> 

           



            <div className="map-widget-box"> 
                 

                       <ul>
                        {list.map((item) => (
                            <li key={item.id}> 
                                <div className={`${item.name} box-widget`}>
                                    <div className="icon"><img src={item.icon}></img></div>
                                    <h5>{item.count}</h5>
                                    <p>{item.sub_para}</p>  
                                </div>  
                            </li>
                        ))}
                        </ul>  
                


                </div>




        </WidgetWrapper>
    )
};

/**
 * Register as a Widget
 */
registerWidget({
    id: "Air_Quality",
    widget: Air_QualityWidget,
    configs: {
        layout: {
            // w: 12,
            // h: 12,
            // minH: 12,
            // minW: 12
        }
    }
});

/**
 * Register as a Sidebar Link
 */
/*
registerLink({
    id: "Air_Quality",
    label: "Air_Quality",
    // click: () => alert("Hello"),
    component: Air_QualityWidget
});
*/

/**
 * Register as a UI
 */

 /*
registerUI({
    id:"Air_Quality",
    component: Air_QualityWidget
});
*/