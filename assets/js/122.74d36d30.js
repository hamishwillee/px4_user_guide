(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{1047:function(e,t,r){e.exports=r.p+"assets/img/frsky_telemetry_overview.421144e2.jpg"},1048:function(e,t,r){e.exports=r.p+"assets/img/taranis_telemetry.062d2a3f.jpg"},1049:function(e,t,r){e.exports=r.p+"assets/img/craft_and_theory_frsky_telemetry_cables.033a9fee.jpg"},1283:function(e,t,r){"use strict";r.r(t);var a=r(19),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"睿思凯-frsky-数传功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#睿思凯-frsky-数传功能"}},[e._v("#")]),e._v(" 睿思凯（FrSky）数传功能")]),e._v(" "),a("p",[e._v("睿思凯遥测功能允许你在兼容的遥控器发射机上访问载具的 "),a("a",{attrs:{href:"#messages"}},[e._v("遥测或状态信息")]),e._v("。")]),e._v(" "),a("p",[e._v("有效的 "),a("a",{attrs:{href:"#messages"}},[e._v("遥测信息如下所示")]),e._v("，包括：飞行模式、电池信息、遥控信号强度、速度、高度等。 某些型号的发射机还可以提供声音和震动的反馈，这对于低电量和其他故障安全警告特别有用。")]),e._v(" "),a("p",[e._v("PX4平台支持睿思凯的 "),a("a",{attrs:{href:"#s_port"}},[e._v("S.port")]),e._v("（新）和D.port（旧）两种类型的遥测数据接口。")]),e._v(" "),a("h2",{attrs:{id:"硬件安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#硬件安装"}},[e._v("#")]),e._v(" 硬件安装")]),e._v(" "),a("p",[e._v("FrSky telemetry requires:")]),e._v(" "),a("ul",[a("li",[e._v("一个"),a("a",{attrs:{href:"#transmitters"}},[e._v("睿思凯兼容遥控发射机")]),e._v("，比如睿思凯 Taranis X9D Plus；")]),e._v(" "),a("li",[e._v("一个"),a("a",{attrs:{href:"#receivers"}},[e._v("睿思凯遥测接收机")]),e._v("，比如XSR和X8R；")]),e._v(" "),a("li",[e._v("A cable to connect the FrSky receiver Smart Port (SPort) to a flight controller UART.")])]),e._v(" "),a("p",[e._v("First "),a("RouterLink",{attrs:{to:"/zh/getting_started/rc_transmitter_receiver.html#connecting-receivers"}},[e._v("connect the receiver for RC channels")]),e._v(", e.g. connect the S.Bus ports on the reciever and the flight controller.")],1),e._v(" "),a("p",[e._v("Then set up FrSky telemetry by separately connecting the SPort on the receiver to any free UART on the flight controller, and then "),a("a",{attrs:{href:"#configure"}},[e._v("configure PX4 to run FrSky telemetry on that UART")]),e._v(".")]),e._v(" "),a("p",[e._v("This is done slightly differently, depending on whether the SPort receiver has a pin for an uninverted output, and/or the Pixhawk version.")]),e._v(" "),a("h3",{attrs:{id:"pixhawk-fmuv4-and-prior"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-fmuv4-and-prior"}},[e._v("#")]),e._v(" Pixhawk FMUv4 (and prior)")]),e._v(" "),a("p",[e._v("For Pixhawk FMUv4 and earlier, UART ports and receiver telemetry ports are typically incompatible (with the exception of "),a("RouterLink",{attrs:{to:"/zh/flight_controller/pixracer.html"}},[e._v("Pixracer")]),e._v(").")],1),e._v(" "),a("p",[e._v("Generally SPort receivers have an "),a("em",[e._v("inverted")]),e._v(" S.Port signal and you have to use a converter cable to split the S.Port into uninverted TX and RX for connecting to the Pixhawk UART. An example is shown below.")]),e._v(" "),a("p",[a("img",{attrs:{src:r(1047),alt:"FrSky-Taranis-Telemetry"}})]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Tip")]),e._v(" When connecting to an inverted S.Port it is usually cheaper and easier to buy a "),a("a",{attrs:{href:"#ready_made_cable"}},[e._v("ready made cable")]),e._v(" that contains this adapter and has the appropriate connectors for the autopilot and receiver. Creating a "),a("a",{attrs:{href:"#diy_cables"}},[e._v("DIY cable")]),e._v(" requires electronics assembly expertise.")])]),e._v(" "),a("p",[e._v("If using an S.Port receiver with a pin for "),a("em",[e._v("uninverted output")]),e._v(" you can simply attach one of the UART's TX pins. ")]),e._v(" "),a("p",[e._v("Then "),a("a",{attrs:{href:"#configure"}},[e._v("configure PX4")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"pixhawk-fmuv5-stm32f7-and-later"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-fmuv5-stm32f7-and-later"}},[e._v("#")]),e._v(" Pixhawk FMUv5/STM32F7 and later")]),e._v(" "),a("p",[e._v("For Pixhawk FMUv5 and later PX4 can read either inverted (or uninverted) S.Port signals directly - no special cable is required.")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note")]),e._v(" More generally this is true on autopilots with STM32F7 or later (e.g. "),a("a",{attrs:{href:"http://docs.px4.io/master/en/flight_controller/durandal.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Durandal"),a("OutboundLink")],1),e._v(" has a STM32H7 and can read inverted or uninverted S.Port signals directly).")])]),e._v(" "),a("p",[e._v("Simply attach one of the UART's TX pins to the SPort inverted or uninverted pin (PX4 will auto-detect and handle either type). Then "),a("a",{attrs:{href:"#configure"}},[e._v("configure PX4")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"px4-configuration-configure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#px4-configuration-configure"}},[e._v("#")]),e._v(" PX4 Configuration {#configure}")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/zh/peripherals/serial_configuration.html"}},[e._v("Configure the serial port")]),e._v(" on which FrSky will run using "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#TEL_FRSKY_CONFIG"}},[e._v("TEL_FRSKY_CONFIG")]),e._v(". There is no need to set the baud rate for the port, as this is configured by the driver.")],1),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note")]),e._v(" You can use any free UART, but typically "),a("code",[e._v("TELEM 2")]),e._v(" is used for FrSky telemetry (except for "),a("RouterLink",{attrs:{to:"/zh/flight_controller/pixracer.html"}},[e._v("Pixracer")]),e._v(", which is pre-configured to use the "),a("em",[e._v("FrSky")]),e._v(" port by default).")],1)]),e._v(" "),a("p",[a("span")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Tip")]),e._v(" If the configuration parameter is not available in "),a("em",[e._v("QGroundControl")]),e._v(" then you may need to "),a("RouterLink",{attrs:{to:"/zh/peripherals/serial_configuration.html#parameter_not_in_firmware"}},[e._v("add the driver to the firmware")]),e._v(": "),a("code",[e._v("drivers/telemetry/frsky_telemetry")])],1)]),e._v(" "),a("p",[e._v("No further configuration is required; FrSky telemetry auto-starts when connected and detects D or S mode.")]),e._v(" "),a("h2",{attrs:{id:"兼容遥控发射机-transmitters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#兼容遥控发射机-transmitters"}},[e._v("#")]),e._v(" 兼容遥控发射机 {#transmitters}")]),e._v(" "),a("p",[e._v("You will need an RC transmitter that can receive the telemetry stream (and that is bound to the FrSky receiver).")]),e._v(" "),a("p",[e._v("Popular alternatives include:")]),e._v(" "),a("ul",[a("li",[e._v("FrSky Taranis X9D Plus (recommended)")]),e._v(" "),a("li",[e._v("FrSky Taranis X9D")]),e._v(" "),a("li",[e._v("FrSky Taranis X9E")]),e._v(" "),a("li",[e._v("FrSky Taranis Q X7")]),e._v(" "),a("li",[e._v("Turnigy 9XR Pro")])]),e._v(" "),a("p",[e._v("The above transmitters can display telemetry data without any further configuration. The following section(s) explain how you can customise telemetry display (for example, to create a better UI/UX).")]),e._v(" "),a("h3",{attrs:{id:"taranis-luapilot-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#taranis-luapilot-setup"}},[e._v("#")]),e._v(" Taranis - LuaPilot Setup")]),e._v(" "),a("p",[e._v("Compatible Taranis receivers (e.g. X9D Plus) running OpenTX 2.1.6 or newer can use the LuaPilot script to modify the displayed telemetry (as shown in the screenshot below).")]),e._v(" "),a("p",[a("img",{attrs:{src:r(1048),alt:"Telemetry Screen on the Taranis"}})]),e._v(" "),a("p",[e._v("Instructions for installing the script can be found here: "),a("a",{attrs:{href:"http://ilihack.github.io/LuaPilot_Taranis_Telemetry/",target:"_blank",rel:"noopener noreferrer"}},[e._v("LuaPilot Taranis Telemetry script > Taranis Setup OpenTX 2.1.6 or newer"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("If you open the "),a("code",[e._v("LuaPil.lua")]),e._v(" script with a text editor, you can edit the configuration. Suggested modifications include:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("local BattLevelmAh = -1")]),e._v(" - Use the battery level calculation from the vehicle")]),e._v(" "),a("li",[a("code",[e._v("local SayFlightMode = 0")]),e._v(" - There are no WAV files for the PX4 flight modes")])]),e._v(" "),a("h2",{attrs:{id:"遥测信息-messages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#遥测信息-messages"}},[e._v("#")]),e._v(" 遥测信息 {#messages}")]),e._v(" "),a("p",[e._v("FrySky Telemetry can transmit most of the more useful status information from PX4. S-Port and D-Port receivers transmit different sets of messages, as listed in the following sections.")]),e._v(" "),a("h3",{attrs:{id:"s-port-s-port"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#s-port-s-port"}},[e._v("#")]),e._v(" S-Port {#s_port}")]),e._v(" "),a("p",[e._v("S-Port receivers transmit the following messages from PX4 (from "),a("a",{attrs:{href:"https://github.com/iNavFlight/inav/blob/master/docs/Telemetry.md#available-smartport-sport-sensors",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v("):")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("AccX, AccY, AccZ:")]),e._v(" Accelerometer values.")]),e._v(" "),a("li",[a("strong",[e._v("Alt:")]),e._v(" Barometer based altitude, relative to home location.")]),e._v(" "),a("li",[a("strong",[e._v("Curr:")]),e._v(" Actual current consumption (Amps).")]),e._v(" "),a("li",[a("strong",[e._v("Fuel:")]),e._v(" Remaining battery percentage if "),a("code",[e._v("battery_capacity")]),e._v(" variable set and variable "),a("code",[e._v("smartport_fuel_percent = ON")]),e._v(", mAh drawn otherwise.")]),e._v(" "),a("li",[a("strong",[e._v("GAlt:")]),e._v(" GPS altitude, sea level is zero.")]),e._v(" "),a("li",[a("strong",[e._v("GPS:")]),e._v(" GPS coordinates.")]),e._v(" "),a("li",[a("strong",[e._v("GSpd:")]),e._v(" Current horizontal ground speed, calculated by GPS.")]),e._v(" "),a("li",[a("strong",[e._v("Hdg:")]),e._v(" Heading (degrees - North is 0°).")]),e._v(" "),a("li",[a("strong",[e._v("VFAS:")]),e._v(" Actual battery voltage value (Voltage FrSky Ampere Sensor).")]),e._v(" "),a("li",[a("strong",[e._v("VSpd:")]),e._v(" Vertical speed (cm/s).")]),e._v(" "),a("li",[a("strong",[e._v("Tmp1:")]),e._v(" "),a("RouterLink",{attrs:{to:"/zh/getting_started/flight_modes.html"}},[e._v("Flight mode")]),e._v(", sent as an integer: 18 - Manual, 23 - Altitude, 22 - Position, 27 - Mission, 26 - Hold, 28 - Return, 19 - Acro, 24 0 Offboard, 20 - Stabilized, 21 - Rattitude, 25 - Takeoff, 29 - Land, 30 - Follow Me.")],1),e._v(" "),a("li",[a("strong",[e._v("Tmp2:")]),e._v(" GPS information. Right-most digit is GPS fix type (0 = none, 2 = 2D, 3 = 3D). Other digits are number of satellites.")])]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note")]),e._v(' The following "standard" S-Port messages are not supported by PX4: '),a("strong",[e._v("ASpd")]),e._v(", "),a("strong",[e._v("A4")]),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"d-port"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#d-port"}},[e._v("#")]),e._v(" D-port")]),e._v(" "),a("p",[e._v("D-Port receivers transmit the following messages (from "),a("a",{attrs:{href:"https://github.com/cleanflight/cleanflight/blob/master/docs/Telemetry.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v("):")]),e._v(" "),a("ul",[a("li",[e._v("**AccX, accy, accz:**加速度计数值。")]),e._v(" "),a("li",[a("strong",[e._v("Alt:")]),e._v(" Barometer based altitude, init level is zero.")]),e._v(" "),a("li",[a("strong",[e._v("Cels:")]),e._v(" Average cell voltage value (battery voltage divided by cell number).")]),e._v(" "),a("li",[a("strong",[e._v("Curr:")]),e._v(" Actual current consumption (Amps).")]),e._v(" "),a("li",[a("strong",[e._v("Fuel:")]),e._v(" Remaining battery percentage if capacity is set, mAh drawn otherwise.")]),e._v(" "),a("li",[a("strong",[e._v("Date:")]),e._v(" Time since powered.")]),e._v(" "),a("li",[a("strong",[e._v("GAlt:")]),e._v(" GPS altitude, sea level is zero.")]),e._v(" "),a("li",[a("strong",[e._v("GPS:")]),e._v(" GPS coordinates.")]),e._v(" "),a("li",[a("strong",[e._v("GSpd:")]),e._v(" Current speed, calculated by GPS.")]),e._v(" "),a("li",[a("strong",[e._v("Hdg:")]),e._v(" Heading (degrees - North is 0°).")]),e._v(" "),a("li",[a("strong",[e._v("RPM:")]),e._v(" Throttle value if armed, otherwise battery capacity. Note that blade number needs to be set to 12 in Taranis.")]),e._v(" "),a("li",[a("strong",[e._v("Tmp1:")]),e._v(" Flight mode (as for S-Port).")]),e._v(" "),a("li",[a("strong",[e._v("Tmp2:")]),e._v(" GPS information (as for S-Port).")]),e._v(" "),a("li",[a("strong",[e._v("VFAS:")]),e._v(" Actual battery voltage value (Voltage FrSky Ampere Sensor).")]),e._v(" "),a("li",[a("strong",[e._v("Vspd:")]),e._v(" Vertical speed (cm/s).")])]),e._v(" "),a("h2",{attrs:{id:"睿思凯遥测接收机-receivers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#睿思凯遥测接收机-receivers"}},[e._v("#")]),e._v(" 睿思凯遥测接收机 {#receivers}")]),e._v(" "),a("p",[e._v("Pixhawk/PX4 supports D (old) and S (new) FrSky telemetry. The table belows all FrSky receivers that support telemetry via a D/S.PORT (in theory all of these should work).")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Tip")]),e._v(" Note that the X series receivers listed below are recommended (e.g. XSR, X8R). The R and G series have not been tested/validated by the test team, but should work.")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("接收机")]),e._v(" "),a("th",[e._v("范围")]),e._v(" "),a("th",[e._v("集成输出")]),e._v(" "),a("th",[e._v("数字遥测输入")]),e._v(" "),a("th",[e._v("尺寸")]),e._v(" "),a("th",[e._v("重量")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("D4R-II")]),e._v(" "),a("td",[e._v("1.5km")]),e._v(" "),a("td",[e._v("CPPM (8)")]),e._v(" "),a("td",[e._v("D.Port")]),e._v(" "),a("td",[e._v("40x22.5x6mm")]),e._v(" "),a("td",[e._v("5.8g")])]),e._v(" "),a("tr",[a("td",[e._v("D8R-XP")]),e._v(" "),a("td",[e._v("1.5km")]),e._v(" "),a("td",[e._v("CPPM (8)")]),e._v(" "),a("td",[e._v("D.Port")]),e._v(" "),a("td",[e._v("55x25x14mm")]),e._v(" "),a("td",[e._v("12.4g")])]),e._v(" "),a("tr",[a("td",[e._v("D8R-II Plus")]),e._v(" "),a("td",[e._v("1.5km")]),e._v(" "),a("td",[e._v("否")]),e._v(" "),a("td",[e._v("D.Port")]),e._v(" "),a("td",[e._v("55x25x14mm")]),e._v(" "),a("td",[e._v("12.4g")])]),e._v(" "),a("tr",[a("td",[e._v("X4R")]),e._v(" "),a("td",[e._v("1.5km")]),e._v(" "),a("td",[e._v("CPPM (8)")]),e._v(" "),a("td",[e._v("Smart Port")]),e._v(" "),a("td",[e._v("40x22.5x6mm")]),e._v(" "),a("td",[e._v("5.8g")])]),e._v(" "),a("tr",[a("td",[e._v("X4R-SB")]),e._v(" "),a("td",[e._v("1.5km")]),e._v(" "),a("td",[e._v("S.Bus (16)")]),e._v(" "),a("td",[e._v("Smart Port")]),e._v(" "),a("td",[e._v("40x22.5x6mm")]),e._v(" "),a("td",[e._v("5.8g")])]),e._v(" "),a("tr",[a("td",[e._v("X6R / S6R")]),e._v(" "),a("td",[e._v("1.5km")]),e._v(" "),a("td",[e._v("S.Bus (16)")]),e._v(" "),a("td",[e._v("Smart Port")]),e._v(" "),a("td",[e._v("47.42×23.84×14.7mm")]),e._v(" "),a("td",[e._v("15.4g")])]),e._v(" "),a("tr",[a("td",[e._v("X8R / S8R")]),e._v(" "),a("td",[e._v("1.5km")]),e._v(" "),a("td",[e._v("S.Bus (16)")]),e._v(" "),a("td",[e._v("Smart Port")]),e._v(" "),a("td",[e._v("46.25 x 26.6 x 14.2mm")]),e._v(" "),a("td",[e._v("16.6g")])]),e._v(" "),a("tr",[a("td",[e._v("XSR / XSR-M")]),e._v(" "),a("td",[e._v("1.5km")]),e._v(" "),a("td",[e._v("S.Bus (16) / CPPM (8)")]),e._v(" "),a("td",[e._v("Smart Port")]),e._v(" "),a("td",[e._v("26x19.2x5mm")]),e._v(" "),a("td",[e._v("3.8g")])]),e._v(" "),a("tr",[a("td",[e._v("RX8R")]),e._v(" "),a("td",[e._v("1.5km")]),e._v(" "),a("td",[e._v("S.Bus (16)")]),e._v(" "),a("td",[e._v("Smart Port")]),e._v(" "),a("td",[e._v("46.25x26.6x14.2mm")]),e._v(" "),a("td",[e._v("12.1g")])]),e._v(" "),a("tr",[a("td",[e._v("RX8R PRO")]),e._v(" "),a("td",[e._v("1.5km")]),e._v(" "),a("td",[e._v("S.Bus (16)")]),e._v(" "),a("td",[e._v("Smart Port")]),e._v(" "),a("td",[e._v("46.25x26.6x14.2mm")]),e._v(" "),a("td",[e._v("12.1g")])]),e._v(" "),a("tr",[a("td",[e._v("R-XSR")]),e._v(" "),a("td",[e._v("1.5km")]),e._v(" "),a("td",[e._v("S.Bus (16) / CPPM (8)")]),e._v(" "),a("td",[e._v("Smart Port")]),e._v(" "),a("td",[e._v("16x11x5.4mm")]),e._v(" "),a("td",[e._v("1.5g")])]),e._v(" "),a("tr",[a("td",[e._v("G-RX8")]),e._v(" "),a("td",[e._v("1.5km")]),e._v(" "),a("td",[e._v("S.Bus (16)")]),e._v(" "),a("td",[e._v("Smart Port + integrated vario")]),e._v(" "),a("td",[e._v("55.26"),a("em",[e._v("17")]),e._v("8mm")]),e._v(" "),a("td",[e._v("5.8g")])]),e._v(" "),a("tr",[a("td",[e._v("R9")]),e._v(" "),a("td",[e._v("10km")]),e._v(" "),a("td",[e._v("S.Bus (16)")]),e._v(" "),a("td",[e._v("Smart Port")]),e._v(" "),a("td",[e._v("43.3x26.8x13.9mm")]),e._v(" "),a("td",[e._v("15.8g")])]),e._v(" "),a("tr",[a("td",[e._v("R9 slim")]),e._v(" "),a("td",[e._v("10km")]),e._v(" "),a("td",[e._v("S.Bus (16)")]),e._v(" "),a("td",[e._v("Smart Port")]),e._v(" "),a("td",[e._v("43.3x26.8x13.9mm")]),e._v(" "),a("td",[e._v("15.8g")])])])]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note")]),e._v(" The above table originates from http://www.redsilico.com/frsky-receiver-chart and FrSky "),a("a",{attrs:{href:"https://www.frsky-rc.com/product-category/receivers/",target:"_blank",rel:"noopener noreferrer"}},[e._v("product documentation"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"ready-made-cables-ready-made-cable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ready-made-cables-ready-made-cable"}},[e._v("#")]),e._v(" Ready-Made Cables {#ready_made_cable}")]),e._v(" "),a("p",[e._v("Ready-made cables for use with Pixhawk FMUv4 and earlier (except for Pixracer) are available from:")]),e._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"http://www.craftandtheoryllc.com/telemetry-cable",target:"_blank",rel:"noopener noreferrer"}},[e._v("Craft and Theory"),a("OutboundLink")],1),e._v(". Versions are available with DF-13 compatible "),a("em",[e._v("PicoBlade connectors")]),e._v(" (for FMUv2/3DR Pixhawk, FMUv2/HKPilot32) and "),a("em",[e._v("JST-GH connectors")]),e._v(' (for FMUv3/Pixhawk 2 "The Cube" and FMUv4/PixRacer v1).')]),e._v(" "),a("p",[a("a",{attrs:{href:"http://www.craftandtheoryllc.com/telemetry-cable",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:r(1049),alt:"Purchase cable here from Craft and Theory"}}),a("OutboundLink")],1)])])]),e._v(" "),a("h2",{attrs:{id:"diy-cables-diy-cables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#diy-cables-diy-cables"}},[e._v("#")]),e._v(" DIY Cables {#diy_cables}")]),e._v(" "),a("p",[e._v("It is possible to create your own adapter cables. You will need connectors that are appropriate for your autopilot (e.g. "),a("em",[e._v("JST-GH connectors")]),e._v(' for FMUv3/Pixhawk 2 "The Cube" and FMUv4/PixRacer v1, and DF-13 compatible '),a("em",[e._v("PicoBlade connectors")]),e._v(" for older autopilots).")]),e._v(" "),a("p",[e._v("The Pixracer includes electronics for converting between S.PORT and UART signals, but for other boards you will need a UART to S.PORT adapter. These can be sourced from:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.frsky-rc.com/product/ful-1/",target:"_blank",rel:"noopener noreferrer"}},[e._v("FrSky FUL-1"),a("OutboundLink")],1),e._v(": "),a("a",{attrs:{href:"https://www.unmannedtechshop.co.uk/frsky-transmitter-receiver-upgrade-adapter-ful-1/",target:"_blank",rel:"noopener noreferrer"}},[e._v("unmannedtech.co.uk"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("SPC: "),a("a",{attrs:{href:"http://www.getfpv.com/frsky-smart-port-converter-cable.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("getfpv.com"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://www.unmannedtechshop.co.uk/frsky-smart-port-converter-spc/",target:"_blank",rel:"noopener noreferrer"}},[e._v("unmannedtechshop.co.uk"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("More information about the connections for different boards is given below.")]),e._v(" "),a("h3",{attrs:{id:"pixracer-to-s-port-receivers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pixracer-to-s-port-receivers"}},[e._v("#")]),e._v(" Pixracer to S-port Receivers")]),e._v(" "),a("p",[e._v("Connect the Pixracer FrSky TX and RX lines together (solder the wires together) to the X series receiver's S.port pin. GND need not be attached as this will have been done when attaching to S.Bus (normal RC connection).")]),e._v(" "),a("p",[e._v("The S-port connection is shown below (using the provided I/O Connector).")]),e._v(" "),a("p",[a("img",{attrs:{src:r(320),alt:"Grau b Pixracer FrSkyS.Port Connection"}})]),e._v(" "),a("p",[a("img",{attrs:{src:r(339),alt:"Pixracer FrSkyS.Port Connection"}})]),e._v(" "),a("h3",{attrs:{id:"pixracer-to-d-port-receivers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pixracer-to-d-port-receivers"}},[e._v("#")]),e._v(" Pixracer to D-port Receivers")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Tip")]),e._v(" The vast majority of users now prefer to use S.PORT.")])]),e._v(" "),a("p",[e._v("Connect the Pixracer FrSky TX line (FS out) to the receiver's RX line. Connect the Pixracer FrSky RX line (FS in) to the receivers TX line. GND need not be connected as this will have been done when attaching to RC/SBus (for normal RC).")]),e._v(" "),a("h3",{attrs:{id:"pixhawk-pro"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-pro"}},[e._v("#")]),e._v(" Pixhawk Pro")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk3_pro.html"}},[e._v("Pixhawk 3 Pro")]),e._v(" can be connected to TELEM4 (no additional software configuration is needed). You will need to connect via a UART to S.PORT adapter board, or a "),a("a",{attrs:{href:"#ready_made_cable"}},[e._v("ready-made cable")]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"pixhawk-fmuv5-and-later"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-fmuv5-and-later"}},[e._v("#")]),e._v(" Pixhawk FMUv5 and later")]),e._v(" "),a("p",[e._v("Simply attach one of the UART's TX pins to the SPort inverted or uninverted pin (PX4 will auto-detect and handle either type).")]),e._v(" "),a("h3",{attrs:{id:"other-boards-pixhawk-v2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-boards-pixhawk-v2"}},[e._v("#")]),e._v(" Other Boards {#pixhawk_v2}")]),e._v(" "),a("p",[e._v("Most other boards connect to the receiver for FrSky telemetry via the TELEM2 UART. This includes, for example: "),a("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk.html"}},[e._v("Pixhawk 1")]),e._v(", "),a("RouterLink",{attrs:{to:"/zh/flight_controller/mro_pixhawk.html"}},[e._v("mRo Pixhawk")]),e._v(", Pixhawk2.")],1),e._v(" "),a("p",[e._v("You will need to connect via a UART to S.PORT adapter board, or a "),a("a",{attrs:{href:"#ready_made_cable"}},[e._v("ready-made cable")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"additional-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#additional-information"}},[e._v("#")]),e._v(" Additional Information")]),e._v(" "),a("p",[e._v("For additional information, see the following links:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/Clooney82/MavLink_FrSkySPort/wiki/1.2.-FrSky-Taranis-Telemetry",target:"_blank",rel:"noopener noreferrer"}},[e._v("FrSky Taranis 遥测回传"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.youtube.com/watch?v=x14DyvOU0Vc",target:"_blank",rel:"noopener noreferrer"}},[e._v("Taranis X9D: 遥测回传设置"),a("OutboundLink")],1),e._v(" (视频教程)")]),e._v(" "),a("li",[a("a",{attrs:{href:"http://discuss.px4.io/t/px4-frsky-telemetry-setup-with-pixhawk2-and-x8r-receiver/6362",target:"_blank",rel:"noopener noreferrer"}},[e._v("使用Pixhawk2 和 X8R 接收机进行Px4 FrSky 遥测回传设置 "),a("OutboundLink")],1),e._v(" (DIY 转接线)")])])])}),[],!1,null,null,null);t.default=o.exports},320:function(e,t,r){e.exports=r.p+"assets/img/grau_b_pixracer_frskys.port_connection.4f4548a6.jpg"},339:function(e,t,r){e.exports=r.p+"assets/img/pixracer_FrSkyTelemetry.e4e73cd1.jpg"}}]);