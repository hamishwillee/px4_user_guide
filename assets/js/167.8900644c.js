(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{1301:function(e,t,o){"use strict";o.r(t);var r=o(19),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("div",{staticStyle:{float:"right",padding:"10px","margin-right":"20px"}},[r("a",{attrs:{href:"http://px4.io/"}},[r("img",{attrs:{src:o(409),title:"PX4 Logo",width:"180px"}})])]),e._v(" "),r("h1",{attrs:{id:"px4-autopilot-user-guide-themeconfig-px4-version"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#px4-autopilot-user-guide-themeconfig-px4-version"}},[e._v("#")]),e._v(" PX4 Autopilot User Guide ("+e._s(e.$themeConfig.px4_version)+")")]),e._v(" "),r("p",[e._v("PX4 is the "),r("em",[e._v("Professional Autopilot")]),e._v(".\nDeveloped by world-class developers from industry and academia, and supported by an active world wide community, it powers all kinds of vehicles from racing and cargo drones through to ground vehicles and submersibles.")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Tip")]),e._v(" This guide contains everything you need to assemble, configure, and safely fly a PX4-based vehicle.")])]),e._v(" "),r("p",[r("span")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Note")]),e._v(" This guide is still a work in progress! It does not yet cover all of PX4.")])]),e._v(" "),r("h2",{attrs:{id:"how-do-i-get-started"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-get-started"}},[e._v("#")]),e._v(" How Do I Get Started?")]),e._v(" "),r("p",[r("RouterLink",{attrs:{to:"/en/getting_started/"}},[e._v("Getting Started")]),e._v(" should be read by all users!\nIt provides an overview of PX4, including features provided by the flight stack (flight modes and safety features) and the supported hardware (flight controller, vehicles, airframes, telemetry systems, RC control systems).")],1),e._v(" "),r("p",[e._v("Depending on what you want to achieve, the following tips will help you navigate through this guide:")]),e._v(" "),r("p",[r("strong",[e._v("I already have a drone and I just want to fly:")])]),e._v(" "),r("p",[e._v("If you have a Ready To Fly (RTF) vehicle that supports PX4:")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/en/config/"}},[e._v("Basic Configuration")]),e._v(" explains how to update your firmware to the latest version, calibrate the main sensors (compass, gyro/IMU, airspeed etc.), and setup your remote control and safety features.")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/flying/"}},[e._v("Flying")]),e._v(" teaches flight essentials, including where and how to fly safely, and how to debug arming and flight issues. It also provides detailed information about flight modes.")],1)]),e._v(" "),r("p",[r("strong",[e._v("I want to build a drone with PX4 from scratch:")])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Tip")]),e._v(' The "supported" vehicles are listed in the '),r("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html"}},[e._v("Airframes Reference")]),e._v(".\nThese are vehicles that have tested and tuned configurations that you can download using "),r("em",[e._v("QGroundControl")]),e._v(".")],1)]),e._v(" "),r("p",[e._v("If you want to build a vehicle from scratch:")]),e._v(" "),r("ul",[r("li",[e._v("Choose a frame - "),r("RouterLink",{attrs:{to:"/en/airframes/"}},[e._v("Airframe Builds")]),e._v(" lists the supported frames and provides detailed instructions for how to construct a subset of vehicles.")],1),e._v(" "),r("li",[e._v("Choose a flight controller - see "),r("RouterLink",{attrs:{to:"/en/getting_started/flight_controller_selection.html"}},[e._v("Getting Started > Flight Controllers")]),e._v(" and "),r("RouterLink",{attrs:{to:"/en/flight_controller/"}},[e._v("Autopilot Hardware")]),e._v(".")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/assembly/"}},[e._v("Assembly")]),e._v(" explains how to wire up the important peripherals to your autopilot.")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/config/"}},[e._v("Basic Configuration")]),e._v(" shows how to update your firmware and configure it with settings appropriate for your airframe.\nThis section also explains how to calibrate the main sensors (compass, gyro/IMU, airspeed etc.), and setup your remote control and safety features.")],1)]),e._v(" "),r("p",[e._v("Once you are ready to fly your vehicle, visit the "),r("RouterLink",{attrs:{to:"/en/flying/"}},[e._v("Flying")]),e._v(" section.")],1),e._v(" "),r("p",[r("strong",[e._v("I am modifying a supported vehicle:")])]),e._v(" "),r("p",[e._v("Modifications of the flight controller and basic sensors are covered above.\nIn order to use new sensors, or if you have made changes that significantly affect flight characteristics:")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/en/peripherals/"}},[e._v("Peripheral Hardware")]),e._v(" provides additional information about using external sensors.")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/config/"}},[e._v("Basic Configuration")]),e._v(" explains how to calibrate the main sensors.")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/advanced_config/"}},[e._v("Advanced Configuration")]),e._v(" should be used to re/fine-tune the airframe.")],1)]),e._v(" "),r("p",[r("strong",[e._v("I want to run PX4 on new hardware and extend the platform:")])]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://dev.px4.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4 Developer Guide"),r("OutboundLink")],1),e._v(" explains how to modify flight algorithms, add new modes, integrate new hardware, communicate with PX4 from outside the flight controller, and contribute to PX4.")])]),e._v(" "),r("p",[r("span",{attrs:{id:"support"}})]),e._v(" "),r("h2",{attrs:{id:"forums-and-chat"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#forums-and-chat"}},[e._v("#")]),e._v(" Forums and Chat")]),e._v(" "),r("p",[e._v("The core development team and community are active on the following forums and chat channels:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://discuss.px4.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4 Discuss"),r("OutboundLink")],1),e._v(" ("),r("em",[e._v("recommended")]),e._v(")")]),e._v(" "),r("li",[r("a",{attrs:{href:"http://slack.px4.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Slack"),r("OutboundLink")],1),e._v(" (sign up)")])]),e._v(" "),r("h2",{attrs:{id:"reporting-bugs-issues"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#reporting-bugs-issues"}},[e._v("#")]),e._v(" Reporting Bugs & Issues")]),e._v(" "),r("p",[e._v("If you have any problems using PX4 first post them on the "),r("a",{attrs:{href:"#support"}},[e._v("support channels above")]),e._v(" (as they may be caused by vehicle configuration).")]),e._v(" "),r("p",[e._v("If directed by the development team, code issues may be raised on "),r("a",{attrs:{href:"https://github.com/PX4/Firmware/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github here"),r("OutboundLink")],1),e._v(".\nWhere possible provide "),r("RouterLink",{attrs:{to:"/en/getting_started/flight_reporting.html"}},[e._v("flight logs")]),e._v(" and other information requested in the issue template.")],1),e._v(" "),r("h2",{attrs:{id:"contributing"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#contributing"}},[e._v("#")]),e._v(" Contributing")]),e._v(" "),r("p",[e._v("Information on how to contribute to code and documentation can be found in the Developer Guide:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://dev.px4.io/master/en/contribute/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Code"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://dev.px4.io/master/en/contribute/docs.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Documentation"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://dev.px4.io/master/en/contribute/docs.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Translation"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"license"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[e._v("#")]),e._v(" License")]),e._v(" "),r("p",[e._v("PX4 code is free to use and modify under the terms of the permissive\n"),r("a",{attrs:{href:"https://opensource.org/licenses/BSD-3-Clause",target:"_blank",rel:"noopener noreferrer"}},[e._v("BSD 3-clause license"),r("OutboundLink")],1),e._v(".\nThis documentation is licensed under "),r("a",{attrs:{href:"https://creativecommons.org/licenses/by/4.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC BY 4.0"),r("OutboundLink")],1),e._v(".\nFor more information see: "),r("a",{attrs:{href:"https://dev.px4.io/master/en/contribute/licenses.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4 Development Guide > Licences"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h3",{attrs:{id:"icons"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#icons"}},[e._v("#")]),e._v(" Icons")]),e._v(" "),r("p",[e._v("The following icons used in this library are licensed separately (as shown below):")]),e._v(" "),r("p",[r("img",{attrs:{src:o(315),title:"Position fix required (e.g. GPS)",width:"30px"}}),e._v(" "),r("em",[e._v("placeholder")]),e._v(" icon made by "),r("a",{attrs:{href:"https://www.flaticon.com/authors/smashicons",title:"Smashicons"}},[e._v("Smashicons")]),e._v(" from "),r("a",{attrs:{href:"https://www.flaticon.com/",title:"Flaticon"}},[e._v("www.flaticon.com")]),e._v(" is licensed by "),r("a",{attrs:{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0",target:"_blank"}},[e._v("CC 3.0 BY")]),e._v(".")]),e._v(" "),r("p",[r("img",{attrs:{src:o(319),title:"Automatic mode",width:"30px"}}),e._v(" "),r("em",[e._v("camera-automatic-mode")]),e._v(" icon made by "),r("a",{attrs:{href:"http://www.freepik.com",title:"Freepik"}},[e._v("Freepik")]),e._v(" from "),r("a",{attrs:{href:"https://www.flaticon.com/",title:"Flaticon"}},[e._v("www.flaticon.com")]),e._v(" is licensed by "),r("a",{attrs:{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0",target:"_blank"}},[e._v("CC 3.0 BY")]),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"governance"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#governance"}},[e._v("#")]),e._v(" Governance")]),e._v(" "),r("p",[e._v("The PX4 flight stack is hosted under the governance of the "),r("a",{attrs:{href:"https://www.dronecode.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dronecode Project"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[r("a",{staticStyle:{padding:"20px"},attrs:{href:"https://www.dronecode.org/"}},[r("img",{attrs:{src:"https://mavlink.io/assets/site/logo_dronecode.png",alt:"Dronecode Logo",width:"110px"}})]),e._v(" "),r("a",{staticStyle:{padding:"20px"},attrs:{href:"https://www.linuxfoundation.org/projects"}},[r("img",{attrs:{src:"https://mavlink.io/assets/site/logo_linux_foundation.png",alt:"Linux Foundation Logo",width:"80px"}})])]),r("div",{staticStyle:{padding:"10px"}}),r("p")])}),[],!1,null,null,null);t.default=a.exports},315:function(e,t,o){e.exports=o.p+"assets/img/position_fixed.c1403cf0.svg"},319:function(e,t,o){e.exports=o.p+"assets/img/automatic_mode.ee3ebc1d.svg"},409:function(e,t,o){e.exports=o.p+"assets/img/logo_pro_small.e0fa34bd.png"}}]);