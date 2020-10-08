(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1068:function(t,e,o){t.exports=o.p+"assets/img/px4_vision_kit_hero.8eef78c9.jpg"},1069:function(t,e,o){t.exports=o.p+"assets/img/warning_power_port.c56d4749.png"},1070:function(t,e,o){t.exports=o.p+"assets/img/px4_vision_schematic_overview.a1281851.jpg"},1071:function(t,e,o){t.exports=o.p+"assets/img/px4_vision_schematic_layered.91fc5d55.png"},1072:function(t,e,o){t.exports=o.p+"assets/img/raise_gps_mast.5081b5cf.jpg"},1073:function(t,e,o){t.exports=o.p+"assets/img/upcore_port_usb1.7d4feac6.png"},1074:function(t,e,o){t.exports=o.p+"assets/img/motor_order_diagram.64560394.png"},1075:function(t,e,o){t.exports=o.p+"assets/img/propeller_directions.4bfa5377.jpg"},1076:function(t,e,o){t.exports=o.p+"assets/img/propeller_nuts.2ad4cf8c.jpg"},1077:function(t,e,o){t.exports=o.p+"assets/img/qgc_console_vision_system_started.254399c4.jpg"},1078:function(t,e,o){t.exports=o.p+"assets/img/upcore_port_usb2.8efb3345.png"},1079:function(t,e,o){t.exports=o.p+"assets/img/usb_jst_cable.77e81012.jpg"},1080:function(t,e,o){t.exports=o.p+"assets/img/upcore_port_hdmi.8ab92b22.png"},1081:function(t,e,o){t.exports=o.p+"assets/img/qgc_airframe_px4_vision_devkit_platform.77e43013.jpg"},1336:function(t,e,o){"use strict";o.r(e);var r=o(19),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"px4-vision-自主无人机开发套件-先行者版"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#px4-vision-自主无人机开发套件-先行者版"}},[t._v("#")]),t._v(" PX4 Vision 自主无人机开发套件（先行者版）")]),t._v(" "),r("p",[r("em",[t._v("PX4视觉自主开发套件")]),t._v("是一个稳定且高性价比的套件，让你能够在自动化无人机上开发计算机视觉。")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1068),alt:"Overview"}})]),t._v(" "),r("p",[t._v("这个套件含有一个几乎到手即飞的碳纤维机架四旋翼，配备 "),r("em",[t._v("Pixhawk 4")]),t._v(" 飞控、"),r("em",[t._v("UP Core")]),t._v("机载计算机，以及"),r("em",[t._v("Structure Core")]),t._v("深度相机。 无人机上启用了用于PX4的"),r("RouterLink",{attrs:{to:"/zh/computer_vision/obstacle_avoidance.html"}},[t._v("避障")]),t._v("和"),r("RouterLink",{attrs:{to:"/zh/computer_vision/collision_prevention.html"}},[t._v("防撞")]),t._v("软件，开箱即用。 开发者可以使用 PX4 避障项目提供的其他功能。 修改现有代码，或尝试全新的功能。")],1),t._v(" "),r("p",[t._v("该指南阐述了无人机准备飞行所需的最少附加步骤（安装遥控器系统和电池等）。 也包括如何起飞，以及如何修改计算机视觉代码。")]),t._v(" "),r("h2",{attrs:{id:"警告-通知"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#警告-通知"}},[t._v("#")]),t._v(" 警告&通知")]),t._v(" "),r("p",[t._v("这个工具包目前是一个“早期用户”版本。 请联系Sale01@holybro.com查询销售情况。")]),t._v(" "),r("h2",{attrs:{id:"开始了解你的开发套件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#开始了解你的开发套件"}},[t._v("#")]),t._v(" 开始了解你的开发套件")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("不要直接使用电源为 "),r("em",[t._v("UP Core")]),t._v(" 计算机供电（可能会摧毁计算机）。 "),r("em",[t._v("UP Core")]),t._v(" 只能使用电池供电。")])]),t._v(" "),r("li",[r("p",[t._v("该开发包使用前置摄像头，（它没有向下或后置深照相机）。 因此，它不能用于测试 "),r("RouterLink",{attrs:{to:"/zh/computer_vision/safe_landing.html"}},[t._v("安全着陆")]),t._v(" 或其他需要下方摄像头的功能。")],1)]),t._v(" "),r("li",[r("p",[t._v("只有在 GPS 工作正常时才能测试任务模式中的自主避障（飞行任务需要使用 GPS 配合）。 防撞功能需要在可获得位置的模式下进行测试，比如GPS或光流有比较好的定位。")])]),t._v(" "),r("li",[r("p",[r("em",[t._v("UP Core")]),t._v(" 只能使用电池供电(请勿卸下 "),r("em",[t._v("UP Core")]),t._v(" 电源安全盖)。")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1069),alt:"Warning - do not connect power port"}})])])]),t._v(" "),r("h2",{attrs:{id:"你需要什么其他的东西"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#你需要什么其他的东西"}},[t._v("#")]),t._v(" 你需要什么其他的东西")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1070),alt:"Schematic Overview"}})]),t._v(" "),r("p",[r("img",{attrs:{src:o(1071),alt:"Schematic Layered"}})]),t._v(" "),r("p",[t._v("该套件中包含了必要的无人机硬件，电池和遥控须要单独购买：")]),t._v(" "),r("ul",[r("li",[t._v("带有如下组件的 PX4 视觉无人机套件：\n"),r("ul",[r("li",[t._v("一个Pixhawk 4飞控（包含定制化的PX4固件）")]),t._v(" "),r("li",[t._v("一个 PMW3901 光流传感器")]),t._v(" "),r("li",[t._v("一个距离传感器")]),t._v(" "),r("li",[t._v("一个 Structure Core 深度相机")]),t._v(" "),r("li",[t._v("一个 "),r("em",[t._v("UP Core")]),t._v(" 计算机（预装 Ubuntu 和 PX4 避障库）\n"),r("ul",[r("li",[t._v("Atom CPU")]),t._v(" "),r("li",[t._v("FTDI UART 连接到飞控")]),t._v(" "),r("li",[r("code",[t._v("USB1")]),t._v("：USB3-A 接口被用来从 USB2.0 储存器启动 PX4 避障环境（连接到 USB3.0 外设可能会导致GPS无法使用）。")]),t._v(" "),r("li",[r("code",[t._v("USB2")]),t._v("：USB 2.0 接口，用于连接 JST-GH 插接件。 可以用于第二个相机，LTE模块等。 （或开发期间使用的键盘/鼠标）。")]),t._v(" "),r("li",[r("code",[t._v("USB3")]),t._v("：USB 2.0 JST-GH 端口连接到深度摄像头")]),t._v(" "),r("li",[r("code",[t._v("HDMI")]),t._v("：HDMI 输出")]),t._v(" "),r("li",[t._v("SD 卡插槽")]),t._v(" "),r("li",[t._v("WiFi（连在外置天线 #1）。 允许计算机进行 WiFi 家庭网络访问/更新。")])])]),t._v(" "),r("li",[t._v("ESP8266 连接到飞控（连在外部天线#2）。 实现与地面站的无线连接。")])])]),t._v(" "),r("li",[t._v("一个预先烧录捆绑软件的 USB2.0 储存棒：\n"),r("ul",[r("li",[t._v("Ubuntu 18.04 LTS")]),t._v(" "),r("li",[t._v("ROS Melodic")]),t._v(" "),r("li",[t._v("Occipital Structure Core 相机 ROS 驱动")]),t._v(" "),r("li",[t._v("MAVROS")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/PX4/avoidance#obstacle-detection-and-avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 避障"),r("OutboundLink")],1)])])]),t._v(" "),r("li",[t._v("各式电缆、推进器和其他配件（可用于附加外设）。")])]),t._v(" "),r("h2",{attrs:{id:"其他注意事项"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#其他注意事项"}},[t._v("#")]),t._v(" 其他注意事项")]),t._v(" "),r("p",[t._v("该套件中包含了必要的无人机硬件，电池和遥控须要单独购买：")]),t._v(" "),r("ul",[r("li",[t._v("电池：\n"),r("ul",[r("li",[t._v("带 XT60 母头的 4S 锂电池")]),t._v(" "),r("li",[t._v("长度小于115毫米（以适合电源插座和 GPS 支架之间的空间）")])])]),t._v(" "),r("li",[t._v("无线电控制系统\n"),r("ul",[r("li",[t._v("可以使用各种 "),r("RouterLink",{attrs:{to:"/zh/getting_started/rc_transmitter_receiver.html"}},[t._v("PX4 兼容的遥控系统")]),t._v("。")],1),t._v(" "),r("li",[t._v("带有 R-XSR 接收机的 "),r("em",[t._v("FrSky Taranis")]),t._v(" 发射机是一个受欢迎的配置。")])])]),t._v(" "),r("li",[t._v("一个 H2.0 头的内六角螺丝刀（用来打开顶部的螺丝来安装接收机）")])]),t._v(" "),r("p",[t._v("此外，用户也需要地面站硬件/软件：")]),t._v(" "),r("ul",[r("li",[t._v("可运行 "),r("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/getting_started/download_and_install.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGC地面站（QGroundControl）"),r("OutboundLink")],1),t._v(" 的笔记本电脑或者平板。")])]),t._v(" "),r("h2",{attrs:{id:"首次使用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#首次使用"}},[t._v("#")]),t._v(" 首次使用")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("将接收机（套件中不包含）固定在无人机上，")]),t._v(" "),r("ul",[r("li",[t._v("使用 H2.0 头的内六角螺丝刀移除/取消顶部板块(在电池进入的地方)。")]),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/assembly/quick_start_pixhawk4.html#radio-control"}},[t._v("将接收器连接到飞控")]),t._v("。")],1),t._v(" "),r("li",[t._v("重新安装上面的外壳。")]),t._v(" "),r("li",[t._v("在无人机背部安装RC 接收器(使用双面胶或其他)。")]),t._v(" "),r("li",[t._v("确保天线无障碍物阻挡并将天线和机架电隔离。例如，在减震板下方或机臂上。")])])]),t._v(" "),r("li",[r("p",[t._v("遥控和接收机配对(如果尚未完成的话)。 配对方法程序取决于接收机和遥控器（读取接收器手册）。")])]),t._v(" "),r("li",[r("p",[t._v("GPS需要高于无人机，并固定到底板。")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1072),alt:"Raise GPS mast"}})])]),t._v(" "),r("li",[r("p",[t._v("将套件中预先烧录好镜像的U盘插入 "),r("em",[t._v("UP Core")]),t._v(" 的端口 "),r("code",[t._v("USB1")]),t._v(" （下面高亮的）")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1073),alt:"UP Core: USB1 Port "}})])]),t._v(" "),r("li",[r("p",[t._v("用充好电的电池的为无人机供电。")]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("Note")]),t._v(" 电池连接前移除螺旋桨。")])])]),t._v(" "),r("li",[r("p",[t._v("使用以下默认凭据将地面站连接到无人机WiFi网络（几秒钟后）：")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("SSID：")]),t._v(" pixhawk4")]),t._v(" "),r("li",[r("strong",[t._v("密码：")]),t._v(" pixhawk4")])]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("提示")]),t._v(" WiFi网络 SSID、密码和其他凭据可以在连接后更改(如果需要), 使用 web 浏览器打开 URL： "),r("code",[t._v("http://192. 68.4.1")]),t._v(" 波特率不得从921600更改。")])])]),t._v(" "),r("li",[r("p",[t._v("在地面站启动 "),r("em",[t._v("QGroundControl")]),t._v("。")])]),t._v(" "),r("li",[r("p",[r("RouterLink",{attrs:{to:"/zh/config/"}},[t._v("配置/校准")]),t._v(" 无人机：")],1),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("Note")]),t._v(" 无人机要进行预先校准(例如使用固件、机架、电池和传感器所有安装)。 您需要校准无线电系统 (您刚刚连接) 并且进行以下的基本检查。")])]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/zh/config/radio.html"}},[t._v("校准遥控")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/config/compass.html"}},[t._v("校准罗盘")])],1)])]),t._v(" "),r("li",[r("p",[t._v("(可选) 在遥控上设置一个 "),r("RouterLink",{attrs:{to:"/zh/config/flight_mode.html"}},[t._v("飞行模式切换开关")]),t._v("。")],1),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("Note")]),t._v(" 模式也可以通过 *QGroundControl</1 >切换")])]),r("p"),t._v(" "),r("p",[t._v("我们推荐的遥控设置为：")])]),r("p"),t._v(" "),r("ul",[r("li",[r("p",[r("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[t._v("定点模式")]),t._v(" - 可以测试防撞的安全手动飞行模型")],1)]),t._v(" "),r("li",[r("p",[r("RouterLink",{attrs:{to:"/zh/flight_modes/mission.html"}},[t._v("任务模式")]),t._v(" - 执行任务并测试避障。")],1)]),t._v(" "),r("li",[r("p",[r("RouterLink",{attrs:{to:"/zh/flight_modes/return.html"}},[t._v("返航模式")]),t._v(" - 安全返回其发射点并降落。")],1)])]),r("p"),t._v(" "),r("ol",[r("li",[r("p",[t._v("螺旋桨按照下面的方向安装：")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1074),alt:"Motor Order Diagram"}})])])]),t._v(" "),r("ul",[r("li",[r("p",[t._v("螺旋桨方向可以从标签中确定："),r("em",[t._v("6045")]),t._v(" (顺时针) 和_6045_"),r("strong",[t._v("R")]),t._v(" (逆时针)。")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1075),alt:"Propeller identification"}})])]),t._v(" "),r("li",[r("p",[t._v("使用随附的螺旋桨螺母将其拧紧：")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1076),alt:"Propeller nuts"}})])])]),t._v(" "),r("h2",{attrs:{id:"测试飞行-带避障-fly-drone"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#测试飞行-带避障-fly-drone"}},[t._v("#")]),t._v(" 测试飞行（带避障） {#fly_drone}")]),t._v(" "),r("p",[t._v("When the vehicle setup described above is complete:")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("连接电池来给无人机供电")])]),t._v(" "),r("li",[r("p",[t._v("等到启动序列完成，并且避障系统已经启动（正在启动过程中时，飞机会拒绝解锁）")]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("Tip")]),t._v(" 从U盘启动/开始的流程大概会要1分钟（从内部存储大概需要30s）")])])]),t._v(" "),r("li",[r("p",[t._v("检查避障系统是否已经正常启动")])])]),t._v(" "),r("ul",[r("li",[r("p",[r("em",[t._v("QGroundControl")]),t._v(" 通知日志显示消息： "),r("strong",[t._v("避障系统已连接")]),t._v("。")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1077),alt:"QGC Log showing avoidance system has started"}})])]),t._v(" "),r("li",[r("p",[t._v("可以在 "),r("em",[t._v("Structure Core")]),t._v(" 摄像头前面看到红色光线。")]),t._v(" "),r("ol",[r("li",[t._v("等待 GPS 的 LED 变成绿色。 这意味着无人机的GPS已定位并且准备好起飞！")])])])]),t._v(" "),r("ol",[r("li",[r("p",[t._v("将地面站与无人机WiFi连接。")])]),t._v(" "),r("li",[r("p",[t._v("找到一个安全的户外位置进行飞行，最好是用树或其他方便的障碍测试PX4视觉。")])]),t._v(" "),r("li",[r("p",[t._v("测试 "),r("RouterLink",{attrs:{to:"/zh/computer_vision/collision_prevention.html"}},[t._v("防止碰撞")]),t._v(", 启用 "),r("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[t._v("位置模式")]),t._v(" 并手动向障碍飞行。 无人机应减速，然后在障碍物距离小于6米时悬停(通过 "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CP_DIST"}},[t._v("CP_DIST")]),t._v(" 参数，距离 "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[t._v("可调整")]),t._v("  )。")],1)]),t._v(" "),r("li",[r("p",[t._v("要测试 "),r("RouterLink",{attrs:{to:"/zh/computer_vision/obstacle_avoidance.html"}},[t._v("避障")]),t._v("，创建一个被障碍阻止的路径。 然后切换到 "),r("RouterLink",{attrs:{to:"/zh/flight_modes/mission.html"}},[t._v("任务模式")]),t._v(" 来运行任务。并观察无人机绕开障碍物，然后返回计划路线。")],1)])]),t._v(" "),r("h2",{attrs:{id:"使用套件开发"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用套件开发"}},[t._v("#")]),t._v(" 使用套件开发")]),t._v(" "),r("p",[t._v("以下各节说明如何将工具包用作开发计算机视觉软件的环境。")]),t._v(" "),r("h3",{attrs:{id:"px4-avoidance-overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#px4-avoidance-overview"}},[t._v("#")]),t._v(" PX4 Avoidance Overview")]),t._v(" "),r("p",[r("em",[t._v("PX4 避障")]),t._v(" 系统由计算机视觉软件组成，这种软件运行在一个配套的计算机上(附着的深度摄像头)，为运行在一个 "),r("em",[t._v("飞控上的 PX4 飞行堆栈提供障碍和/或航线信息")])]),t._v(" "),r("p",[t._v("关于配套计算机视觉/规划软件的文档可以在 github 上找到： "),r("a",{attrs:{href:"https://github.com/PX4/avoidance#obstacle-detection-and-avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4/avoidcen"),r("OutboundLink")],1),t._v("。 该项目提供了许多不同的规划程序实现（打包为ROS节点）：")]),t._v(" "),r("ul",[r("li",[t._v("默认情况下，PX4 Vision Kit运行 "),r("em",[t._v("localplanner")]),t._v(" ，这是您自己的软件的推荐起点。")]),t._v(" "),r("li",[r("em",[t._v("globalplanner")]),t._v(" 尚未用这个工具包测试。")]),t._v(" "),r("li",[t._v("The "),r("em",[t._v("landing planner")]),t._v(" requires a downward facing camera, and cannot used without first modifying the camera mounting.")])]),t._v(" "),r("p",[t._v("PX4 和配套的计算机使用如下接口通过 "),r("a",{attrs:{href:"https://mavlink.io/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink"),r("OutboundLink")],1),t._v(" 交换数据：")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/zh/computer_vision/path_planning_interface.html"}},[t._v("路径规划接口")]),t._v(" - API 用于实现自动模式中的避障功能。")],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/computer_vision/collision_prevention.html"}},[t._v("防撞接口")]),t._v(" - 基于无人机避障的API，在基于障碍地图的手动位置模式下(目前用于防撞)。")],1)]),t._v(" "),r("h3",{attrs:{id:"在上位机上安装镜像-install-image-mission-computer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#在上位机上安装镜像-install-image-mission-computer"}},[t._v("#")]),t._v(" 在上位机上安装镜像 {#install_image_mission_computer}")]),t._v(" "),r("p",[t._v("您可以在 "),r("em",[t._v("UP Core")]),t._v(" 上安装镜像，并从内部内存启动(而不是U盘)。")]),t._v(" "),r("p",[t._v("建议这样做是因为从内部内存启动得更快。 释放USB端口，也能提供比U盘更多的内存。")]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("Note")]),t._v(" 从内部存储器启动大约需要30秒，而从随附的USB2盘启动大约需要一分钟（其他卡可能要花几倍的时间）。")])]),t._v(" "),r("p",[t._v("将USB镜像刷新到UP Core：")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("将预先烧录的USB驱动器插入标有 "),r("code",[t._v("USB1")]),t._v(" 的 "),r("em",[t._v("UP Core")]),t._v(" 端口中。\n2.登录到配套计算机<0> （如上所述）。")])]),r("p"),t._v(" "),r("ul",[r("li",[t._v("打开终端，然后运行以下命令将映像复制到内部存储器（eMMC）。 终端将在刷新过程中提示您一些响应。")])])]),t._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/catkin_ws/src/px4vision_ros\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ./flash_emmc.sh\n")])])]),r("blockquote",[r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[t._v("> **Note** 保存到 *UP Core* 计算机的所有信息将在执行此脚本时被删除\n")])])]),r("ul",[r("li",[r("p",[t._v("拔出U盘。")])]),t._v(" "),r("li",[r("p",[t._v("重启无人机， "),r("em",[t._v("UP Core")]),t._v(" 计算机现在将从内部内存（eMMC）引导。")])])])])]),r("p"),t._v(" "),r("h3",{attrs:{id:"开启上位机-boot-mission-computer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#开启上位机-boot-mission-computer"}},[t._v("#")]),t._v(" 开启上位机 {#boot_mission_computer}")]),t._v(" "),r("p",[t._v("首先插入所提供的 USB2.0 盘 "),r("em",[t._v("UP 核心")]),t._v(" 端口标签 "),r("code",[t._v("USB1")]),t._v(" 然后用4S电池给无人机供电。 避障系统应在大约1分钟内启动(这取决于所提供的U盘)。")]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("提示")]),t._v(" "),r("a",{attrs:{href:"#fly_drone"}},[t._v(" 飞行无人机(带避障)")]),t._v(" 另外解释了如何验证避障系统是否有效。")])]),t._v(" "),r("p",[t._v("如果您已经在机载计算机上安装了 "),r("a",{attrs:{href:"#install_image_mission_computer"}},[t._v("镜像")]),t._v(" 您只需为该无人机供电(即不需要U盘)。 避障系统应在30秒内启动并运行。")]),t._v(" "),r("p",[t._v("机载计算机一旦启动，就可以用作计算机视力开发环境和运行软件的环境。")]),t._v(" "),r("h3",{attrs:{id:"登录到机载计算机-login-mission-computer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#登录到机载计算机-login-mission-computer"}},[t._v("#")]),t._v(" 登录到机载计算机 {#login_mission_computer}")]),t._v(" "),r("p",[t._v("登录到机载计算机:")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("通过端口 "),r("code",[t._v("USB2")]),t._v(" 将键盘和鼠标连接到 "),r("em",[t._v("UP Core")]),t._v("：")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1078),alt:"UP Core：USB2"}})])])]),t._v(" "),r("ul",[r("li",[r("p",[t._v("使用套件中的 USB-JST电缆获取一个 USB A 连接器")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1079),alt:"USB to JST cable"}})])]),t._v(" "),r("li",[r("p",[t._v("如果键盘和鼠标具有单独的接口，则可以将USB集线器连接到电缆。")]),t._v(" "),r("ol",[r("li",[t._v("连接显示器到 "),r("em",[t._v("UP Core")]),t._v(" 的 HDMI 接口。\n"),r("img",{attrs:{src:o(1080),alt:"UP Core: HDMI port"}})])]),t._v(" "),r("p",[t._v("Ubuntu 登录屏幕应显示在显示器上。")])])]),t._v(" "),r("ol",[r("li",[t._v("Login to the "),r("em",[t._v("UP Core")]),t._v(" using the credentials:\n"),r("ul",[r("li",[t._v("**用户名：**px4vision")]),t._v(" "),r("li",[t._v("**密码：**px4vision")])])])]),t._v(" "),r("h3",{attrs:{id:"开发-扩展-px4-避障功能"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#开发-扩展-px4-避障功能"}},[t._v("#")]),t._v(" 开发/扩展 PX4 避障功能")]),t._v(" "),r("p",[t._v("The PX4 Vision’s "),r("em",[t._v("UP Core")]),t._v(" computer provides a complete and fully configured environment for extending PX4 Avoidance software (and more generally, for developing new computer vision algorithms using ROS2). You should develop and test your software on the vehicle, sync it to your own git repository, and share any fixes and improvements with the wider PX4 community on the github "),r("a",{attrs:{href:"https://github.com/PX4/avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4/Avoidance"),r("OutboundLink")],1),t._v(" repo.")]),t._v(" "),r("p",[t._v("The catkin workspace is at "),r("code",[t._v("~/catkin_ws")]),t._v(", and is preconfigured for running the PX4 avoidance local planner. The launch-from-boot file ("),r("code",[t._v("avoidance.launch")]),t._v(") is in the "),r("code",[t._v("px4vision_ros")]),t._v(" package (modify this file to change what planner is launched).")]),t._v(" "),r("p",[t._v("The avoidance package is started on boot. To integrate a different planner, this needs to be disabled.")]),t._v(" "),r("ol",[r("li",[t._v("Disable the avoidance process using the following command:")])]),t._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[t._v("systemctl stop avoidance.service\n")])])]),r("blockquote",[r("p",[t._v("You can simply reboot the machine to restart the service.")]),t._v(" "),r("p",[t._v("Other useful commands are:")])]),t._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# restart service")]),t._v("\nsystemctl start avoidance.service\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# disable service (stop service and do not restart after boot)")]),t._v("\nsystemctl disable avoidance.service\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# enable service (start service and enable restart after boot)")]),t._v("\nsystemctl "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" avoidance.service  \n")])])]),t._v(" "),r("li",[r("p",[t._v("The source code of the obstacle avoidance package can be found in https://github.com/PX4/avoidance which is located in "),r("code",[t._v("~/catkin_ws/src/avoidance")]),t._v(".")])]),t._v(" "),r("li",[r("p",[t._v("Make changes to the code! To get the latest code of avoidance pull the code from the avoidance repo:")]),t._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull origin\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout origin/master\n")])])])]),t._v(" "),r("li",[r("p",[t._v("Build the package")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("catkin build local_planner\n")])])])]),t._v(" "),r("p",[t._v("The ROS workspace is placed in "),r("code",[t._v("~/catkin_ws")]),t._v(". For reference on developing in ROS and using the catkin workspace, see the "),r("a",{attrs:{href:"http://wiki.ros.org/catkin/Tutorials",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROS catkin tutorials"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("h3",{attrs:{id:"开发-px4-固件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#开发-px4-固件"}},[t._v("#")]),t._v(" 开发 PX4 固件")]),t._v(" "),r("p",[t._v("The kit is designed for creating computer vision software that runs on the companion computer, and which integrates with PX4’s flexible path planning and collision prevention interfaces.")]),t._v(" "),r("p",[t._v("You can also modify PX4 itself, and "),r("RouterLink",{attrs:{to:"/zh/config/firmware.html#custom"}},[t._v("install it as custom firmware")]),t._v(":")],1),t._v(" "),r("ul",[r("li",[t._v("You will need to connect "),r("em",[t._v("QGroundControl")]),t._v(" to the kit's "),r("em",[t._v("Pixhawk 4")]),t._v(" "),r("strong",[t._v("via USB")]),t._v(" in order to update firmware.")]),t._v(" "),r("li",[t._v("Select the "),r("em",[t._v("PX4 Vision DevKit")]),t._v(" airframe after loading new firmware: "),r("img",{attrs:{src:o(1081),alt:"Airframe Selection - PX4 Vision DevKit"}})])]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("Note")]),t._v(" Modification of PX4 code is not "),r("em",[t._v("needed")]),t._v(" to meet most computer vision use cases. To discuss the interfaces or how to integrate other features join the PX4 slack channel: #computer-vision.")])]),t._v(" "),r("h2",{attrs:{id:"other-development-resources"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#other-development-resources"}},[t._v("#")]),t._v(" Other Development Resources")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://wiki.up-community.org/Ubuntu",target:"_blank",rel:"noopener noreferrer"}},[r("em",[t._v("UP Core")]),t._v(" Wiki"),r("OutboundLink")],1),t._v(" - companion computer technical information")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://structure.io/developers",target:"_blank",rel:"noopener noreferrer"}},[t._v("Occipital Developer Forum"),r("OutboundLink")],1),t._v(" - "),r("em",[t._v("Structure Core")]),t._v(" camera information")]),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk4.html"}},[t._v("Pixhawk 4 Overview")])],1),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/PX4/avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 Avoidance software/documentation"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/computer_vision/path_planning_interface.html"}},[t._v("Path Planning Interface")])],1)]),t._v(" "),r("h2",{attrs:{id:"how-to-get-technical-support"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-to-get-technical-support"}},[t._v("#")]),t._v(" How to get Technical Support?")]),t._v(" "),r("p",[t._v("For hardware issues, please contact Holybro at: "),r("a",{attrs:{href:"mailto:productservice@holybro.com"}},[t._v("productservice@holybro.com")]),t._v(".")]),t._v(" "),r("p",[t._v("For software issues, use the following "),r("RouterLink",{attrs:{to:"/zh/complete_vehicles/#support"}},[t._v("community support channels")]),t._v(":")],1),t._v(" "),r("ul",[r("li",[t._v("PX4 discuss: "),r("a",{attrs:{href:"https://discuss.px4.io/c/Vision-based-navigation-and-obstacle-avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("Computer Vision"),r("OutboundLink")],1),t._v(" category.")]),t._v(" "),r("li",[t._v("PX4 slack channel: #avoidance")])])])}),[],!1,null,null,null);e.default=i.exports}}]);