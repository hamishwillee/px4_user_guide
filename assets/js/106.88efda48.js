(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{1525:function(t,e,r){"use strict";r.r(e);var a=r(19),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"esp8266-wifi-模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#esp8266-wifi-模块"}},[t._v("#")]),t._v(" ESP8266 WiFi 模块")]),t._v(" "),a("p",[t._v("ESP8266 是一款低成本且易于使用的 Wi-Fi 模块，具有完整的 TCP/IP 协议栈和微控制器功能。 It can be used with any Pixhawk series controller.")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Tip")]),t._v(" ESP8266是 "),a("em",[t._v("事实上的")]),t._v(" 默认WiFi模块，用于 "),a("RouterLink",{attrs:{to:"/zh/flight_controller/pixracer.html"}},[t._v("Pixracer")]),t._v(" (通常与其捆绑在一起)。")],1)]),t._v(" "),a("h2",{attrs:{id:"购买地点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#购买地点"}},[t._v("#")]),t._v(" 购买地点")]),t._v(" "),a("p",[t._v("该模块是现成的。 下面列出了一些供应商。")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.sparkfun.com/products/13678",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sparkfun"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://us.gearbest.com/boards-shields/pp_009604906563.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("GearBeast"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"模块设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块设置"}},[t._v("#")]),t._v(" 模块设置")]),t._v(" "),a("p",[t._v("ESP8266固件具有以下 "),a("em",[t._v("工厂")]),t._v(" 设置：")]),t._v(" "),a("ul",[a("li",[t._v("SSID: PixRacer")]),t._v(" "),a("li",[t._v("Password: pixracer")]),t._v(" "),a("li",[t._v("WiFi Channel: 11")]),t._v(" "),a("li",[t._v("UART speed 921600")])]),t._v(" "),a("h3",{attrs:{id:"从源文件编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从源文件编译"}},[t._v("#")]),t._v(" 从源文件编译")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/dogmaphobic/mavesp8266",target:"_blank",rel:"noopener noreferrer"}},[t._v("固件仓库"),a("OutboundLink")],1),t._v(" 包含编译和下载固件所需的所有指令和工具。")]),t._v(" "),a("h3",{attrs:{id:"预编译二进制文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预编译二进制文件"}},[t._v("#")]),t._v(" 预编译二进制文件")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://www.grubba.com/mavesp8266/firmware-1.2.2.bin",target:"_blank",rel:"noopener noreferrer"}},[t._v("MavLink ESP8266 Firmware V 1.2.2"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"更新固件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新固件"}},[t._v("#")]),t._v(" 更新固件")]),t._v(" "),a("p",[t._v("如果您安装了 1.0.4 或更高版本的固件，则可以通过使用 ESP 的 "),a("em",[t._v("Over The Air Update")]),t._v(" 特性进行更新。 Just connect to its AP WiFi link and browse to: "),a("code",[t._v("http://192.168.4.1/update")]),t._v(". 然后，您可以选择上面下载的固件文件，并将其上传到 WiFi 模块。")]),t._v(" "),a("h3",{attrs:{id:"flashing-the-esp8266-firmware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flashing-the-esp8266-firmware"}},[t._v("#")]),t._v(" Flashing the ESP8266 Firmware")]),t._v(" "),a("p",[t._v("在下载之前，请确保在 "),a("em",[t._v("Flash Mode")]),t._v(" 中启动 ESP8266，如下所述。 如果您克隆了 "),a("a",{attrs:{href:"https://github.com/dogmaphobic/mavesp8266",target:"_blank",rel:"noopener noreferrer"}},[t._v("MavESP8266"),a("OutboundLink")],1),t._v("存储库，您可以使用提供的 "),a("a",{attrs:{href:"http://platformio.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("PlatformIO"),a("OutboundLink")],1),t._v(" 工具和环境编译和下载固件。 如果下载了上面预先编译的固件，请下载 "),a("a",{attrs:{href:"https://github.com/espressif/esptool",target:"_blank",rel:"noopener noreferrer"}},[t._v("esptool"),a("OutboundLink")],1),t._v(" 实用程序，并使用下面的命令行：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("esptool.py --baud 921600 --port /dev/your_serial_port write_flash 0x00000 firmware_xxxxx.bin\n")])])]),a("p",[t._v("其中：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("firmware_xxxxx.bin")]),t._v(" 是您上面下载的固件")]),t._v(" "),a("li",[a("strong",[t._v("your_serial_port")]),t._v(" 是ESP 8266连接到的串行端口的名称 (例如 "),a("code",[t._v("/dev/cu.usbmodem")]),t._v(") 。")])]),t._v(" "),a("h3",{attrs:{id:"下载固件接线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载固件接线"}},[t._v("#")]),t._v(" 下载固件接线")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Warning")]),t._v(" ESP8266 必须仅以 3.3 伏特供电。")])]),t._v(" "),a("p",[t._v("将 ESP8266 设置为 "),a("em",[t._v("Flash Mode")]),t._v(" 有多种方法，但并非所有 USB/UART 适配器都为自动模式切换提供了所有必要的引脚。 为了以 "),a("em",[t._v("Flash Mode")]),t._v(" 启动 ESP8266，必须将 GPIO-0 引脚设置为低(GND)，必须将 CH_PD 引脚设置为高(VCC)。 这就是我自己的设置：")]),t._v(" "),a("p",[a("img",{attrs:{src:r(700),alt:"eSP8266 下载图"}})]),t._v(" "),a("p",[t._v("我制作了一条电缆，其中 RX、TX、VCC 和 GND 可以从 FTDI 适配器直接连接到 ESP8266。 我为 ESP8266 留下了两条空闲线，并连接到 GPIO-0 和 CH_PD ，这样我可以通过把它们分别连接到 GND 和 VCC 而在正常或在 Flash Mode 下启动 ESP8266。")]),t._v(" "),a("h3",{attrs:{id:"esp8266-esp-01-引脚图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#esp8266-esp-01-引脚图"}},[t._v("#")]),t._v(" ESP8266 (ESP-01) 引脚图")]),t._v(" "),a("p",[a("img",{attrs:{src:r(701),alt:"eSP8266 无线模块引脚图"}})]),t._v(" "),a("h3",{attrs:{id:"flashing-diagram-using-an-ftdi-usb-uart-adapter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flashing-diagram-using-an-ftdi-usb-uart-adapter"}},[t._v("#")]),t._v(" Flashing Diagram using an FTDI USB/UART Adapter")]),t._v(" "),a("p",[a("img",{attrs:{src:r(702),alt:"eSP8266 下载"}})]),t._v(" "),a("h2",{attrs:{id:"pixhawk-px4-setup-configuration-px4-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-px4-setup-configuration-px4-config"}},[t._v("#")]),t._v(" Pixhawk/PX4 Setup & Configuration {#px4_config}")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Tip")]),t._v(" If using PX4 1.8.2 (and earlier) you should connect the ESP8266 to TELEM2 and configure the port by "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[t._v("setting the parameter")]),t._v(" "),a("code",[t._v("SYS_COMPANION")]),t._v(" to 1921600 (remember to reboot after setting the parameter). The following instructions assume you are using PX4 versions after 1.8.2")],1)]),t._v(" "),a("p",[t._v("Connect your ESP8266 to your Pixhawk-series flight controller (e.g. Pixracer) on any free UART.")]),t._v(" "),a("p",[t._v("Connect the flight controller to your ground station via USB (as WiFi is not yet fully set up).")]),t._v(" "),a("p",[t._v("Using "),a("em",[t._v("QGroundControl")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/config/firmware.html"}},[t._v("Load recent PX4 firwmare")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/peripherals/serial_configuration.html"}},[t._v("Configure the serial port")]),t._v(" used to connect the ESP8266. Remember to set the baud rate to 921600 in order to match the value set for the ESP8266.")],1)]),t._v(" "),a("p",[t._v("Once the firmware (port) is set up you can remove the physical USB connection between the ground station and the vehicle.")]),t._v(" "),a("h2",{attrs:{id:"connect-via-esp8266-to-qgc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connect-via-esp8266-to-qgc"}},[t._v("#")]),t._v(" Connect via ESP8266 to QGC")]),t._v(" "),a("p",[t._v("On your wifi-enabled "),a("em",[t._v("QGroundControl")]),t._v(" ground station computer/tablet, find and connect to the open wireless network for your ESP8266.")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("By default the ESP8266 network is named "),a("strong",[t._v("PixRacer")]),t._v(" and the default password is "),a("strong",[t._v("pixracer")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("On Windows, the connection settings will look like this:")]),t._v(" "),a("p",[a("img",{attrs:{src:r(703),alt:"Windows Network Setup: Connection"}})]),t._v(" "),a("p",[a("img",{attrs:{src:r(704),alt:"Windows Network Setup: Security"}})])])]),t._v(" "),a("p",[t._v("QGC automatically starts its UDP link on boot. Once your computer/tablet is connected to the "),a("strong",[t._v("PixRacer")]),t._v(" WiFi Access Point, it will automatically make the connection.")]),t._v(" "),a("p",[t._v("You should now see HUD movement on your QGC computer via wireless link and be able to view the summary panel for the ESP8266 WiFi Bridge (as shown below).")]),t._v(" "),a("p",[a("img",{attrs:{src:r(705),alt:"QGC Summary showing Wifi Bridge"}})]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Tip")]),t._v(" If you have any problem connecting, see "),a("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/Support/troubleshooting_qgc.html#waiting_for_connection",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGC Installation/Configuration Problems"),a("OutboundLink")],1),t._v(".")])])])}),[],!1,null,null,null);e.default=o.exports},700:function(t,e,r){t.exports=r.p+"assets/img/esp8266_flashing_rig.900b6050.jpg"},701:function(t,e,r){t.exports=r.p+"assets/img/esp8266_pinout.4c1f434c.jpg"},702:function(t,e,r){t.exports=r.p+"assets/img/esp8266_flashing_ftdi.bc982baa.jpg"},703:function(t,e,r){t.exports=r.p+"assets/img/pixracer_network_setup_connection_windows.4b6c2413.png"},704:function(t,e,r){t.exports=r.p+"assets/img/pixracer_network_setup_security_windows.646da5eb.png"},705:function(t,e,r){t.exports=r.p+"assets/img/wifi_bridge.5e243a79.png"}}]);