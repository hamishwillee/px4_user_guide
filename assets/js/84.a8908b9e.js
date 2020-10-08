(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{1087:function(t,_,e){t.exports=e.p+"assets/img/safety_setup.13d1efc7.png"},1088:function(t,_,e){t.exports=e.p+"assets/img/safety_battery.3ca07fa4.png"},1089:function(t,_,e){t.exports=e.p+"assets/img/safety_rc_loss.af75bf02.png"},1090:function(t,_,e){t.exports=e.p+"assets/img/safety_data_link_loss.bd31108e.png"},1091:function(t,_,e){t.exports=e.p+"assets/img/safety_geofence.e3412dca.png"},1092:function(t,_,e){t.exports=e.p+"assets/img/safety_return_home.ad409241.png"},1093:function(t,_,e){t.exports=e.p+"assets/img/safety_land_mode.abb91378.png"},1263:function(t,_,e){"use strict";e.r(_);var r=e(19),a=Object(r.a)({},(function(){var t=this,_=t.$createElement,r=t._self._c||_;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"安全配置-故障保护"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安全配置-故障保护"}},[t._v("#")]),t._v(" 安全配置（故障保护）")]),t._v(" "),r("p",[t._v("PX4有许多安全功能，可以在发生故障时保护并恢复您的机体：")]),t._v(" "),r("ul",[r("li",[r("em",[t._v("故障保护")]),t._v("允许您指定可以安全飞行的区域和条件，以及在触发故障保护时将执行的"),r("a",{attrs:{href:"#failsafe_actions"}},[t._v("操作")]),t._v("（例如着陆、定点悬停或返回指定点）。 最重要的故障保护设置在 "),r("em",[t._v("QGroundControl")]),t._v(" 的"),r("a",{attrs:{href:"#qgc_safety_setup"}},[t._v("安全设置")]),t._v("页面中配置。 其他设置必须通过"),r("a",{attrs:{href:"#failsafe_other"}},[t._v("参数")]),t._v("页面配置。")]),t._v(" "),r("li",[t._v("遥控器上的安全开关可用于在出现问题时立即制动电机或使机体返航。")])]),t._v(" "),r("h2",{attrs:{id:"故障保护动作-failsafe-actions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#故障保护动作-failsafe-actions"}},[t._v("#")]),t._v(" 故障保护动作 {#failsafe_actions}")]),t._v(" "),r("p",[t._v("每种故障保护措施都定义有自己的一组动作。 部分较为常见的故障保护措施如下：")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("动作")]),t._v(" "),r("th",[t._v("描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("span",{attrs:{id:"action_none"}}),t._v("无/禁用")]),t._v(" "),r("td",[t._v("无动作 (故障保护将被忽略)。")])]),t._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"action_warning"}}),t._v("警告")]),t._v(" "),r("td",[t._v("警告信息将被发送至 "),r("em",[t._v("QGroundControl")]),t._v("。")])]),t._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"action_hold"}}),r("RouterLink",{attrs:{to:"/zh/flight_modes/hold.html"}},[t._v("保持模式")])],1),t._v(" "),r("td",[t._v("机体将进入"),r("em",[t._v("保持模式")]),t._v("。 对于多旋翼飞行器，这意味着飞行器将悬停，而对于固定翼飞行器，飞行器将盘旋。")])]),t._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"action_return"}}),r("RouterLink",{attrs:{to:"/zh/flight_modes/return.html"}},[t._v("返航模式")])],1),t._v(" "),r("td",[t._v("机体将进入"),r("em",[t._v("返航模式")]),t._v("。 返航行为可以在"),r("a",{attrs:{href:"#return_settings"}},[t._v("返回原点设置")]),t._v("（如下文所示）中设置。")])]),t._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"action_land"}}),r("RouterLink",{attrs:{to:"/zh/flight_modes/land.html"}},[t._v("降落模式")])],1),t._v(" "),r("td",[t._v("机体将进入降落模式，并立即执行着陆动作。")])]),t._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"action_flight_termination"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/flight_termination.html"}},[t._v("飞行终止")])],1),t._v(" "),r("td",[t._v("关闭所有控制器并将所有 PWM 输出设置为其故障保护值（例如 "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#PWM_MAIN_FAIL1"}},[t._v("PWM_MAIN_FAILn")]),t._v("，"),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#PWM_AUX_FAIL1"}},[t._v("PWM_AUX_FAILn")]),t._v(" 等输出）。 故障保护输出可用于启动降落伞、起落架或执行其他操作。 对于固定翼飞行器，这可能允许您将机体滑翔至安全位置。")],1)]),t._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"action_lockdown"}}),t._v("锁定")]),t._v(" "),r("td",[t._v("制动发动机（使其上锁）。 这和使用"),r("a",{attrs:{href:"#kill_switch"}},[t._v("急停开关")]),t._v("是一样的。")])])])]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("Note")]),t._v(" 可以通过切换模式从故障保护动作（如果原因已修复）中恢复。 例如，在遥控信号丢失且故障保护导致机体进入"),r("em",[t._v("返航模式")]),t._v("的情况下，如果遥控信号恢复，您可以切换到"),r("em",[t._v("定点模式")]),t._v("并继续飞行。")])]),t._v(" "),r("p",[r("span")]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("Note")]),t._v(" 如果在机体响应一个故障保护时发生另一个故障保护（例如，由于遥控信号丢失而处于返航模式时，电池电量也提示不足），则忽略第二个故障保护的指定触发动作。 相反，此操作由单独的系统级别和机体的特定代码决定。 这可能会导致机体被更改为手动模式，以便用户能够直接管理并收回机体。")])]),t._v(" "),r("h2",{attrs:{id:"qgroundcontrol-安全设置-qgc-safety-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qgroundcontrol-安全设置-qgc-safety-setup"}},[t._v("#")]),t._v(" QGroundControl 安全设置 {#qgc_safety_setup}")]),t._v(" "),r("p",[t._v("通过依次单击 "),r("em",[t._v("QGroundControl")]),t._v(" "),r("strong",[t._v("Gear")]),t._v(" 图标（位于机体设置 - 顶部工具栏），然后单击侧栏中的"),r("strong",[t._v("安全")]),t._v("来访问 "),r("em",[t._v("QGroundControl")]),t._v(" 安全设置页面。 其中包括最重要的故障保护设置（电池故障，遥控信号丢失等）和返航动作的设置（"),r("em",[t._v("返航")]),t._v("和"),r("em",[t._v("降落")]),t._v("）。")]),t._v(" "),r("p",[r("img",{attrs:{src:e(1087),alt:"安全设置（QGC）"}})]),t._v(" "),r("h3",{attrs:{id:"低电量故障保护"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#低电量故障保护"}},[t._v("#")]),t._v(" 低电量故障保护")]),t._v(" "),r("p",[t._v("当电池电量低于一个（或多个警告）水平值时，会触发低电量故障保护。")]),t._v(" "),r("p",[r("img",{attrs:{src:e(1088),alt:"安全 - 电池（QGC）"}})]),t._v(" "),r("p",[t._v("最常见的配置是按上述方式设置参数的值和相应故障保护动作（ "),r("code",[t._v("警告 > 故障安全 > Emergency")]),t._v(")。 通过如此配置，故障保护将触发警告，随后返航，最后在电池电量过低时降落。")]),t._v(" "),r("p",[t._v("也可以在"),r("a",{attrs:{href:"#BAT_CRIT_THR"}},[t._v("电池故障保护等级")]),t._v("达到指定水平时，将"),r("em",[t._v("故障保护动作")]),t._v("设置为警告、返航或降落。")]),t._v(" "),r("p",[t._v("设置和基本参数如下所示。")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("设置")]),t._v(" "),r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("故障保护动作")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_LOW_BAT_ACT"}},[t._v("COM_LOW_BAT_ACT")])],1),t._v(" "),r("td",[t._v("当电池电量过低时，根据下面的每个水平值执行警告、返航、降落三者之一，或分别设置警告、返航或降落。")])]),t._v(" "),r("tr",[r("td",[t._v("电池警告水平")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#BAT_LOW_THR"}},[t._v("BAT_LOW_THR")])],1),t._v(" "),r("td",[t._v("需做出警告（或其他动作）的电量百分比。")])]),t._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"BAT_CRIT_THR"}}),t._v("电池故障保护水平")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#BAT_CRIT_THR"}},[t._v("BAT_CRIT_THR")])],1),t._v(" "),r("td",[t._v("电量低于该百分比则返航（或者执行其他事前选择动作）。")])]),t._v(" "),r("tr",[r("td",[t._v("电量紧急水平")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#BAT_EMERGEN_THR"}},[t._v("BAT_EMERGEN_THR")])],1),t._v(" "),r("td",[t._v("电量低于该百分比则（立即）触发降落动作。")])])])]),t._v(" "),r("h3",{attrs:{id:"遥控信号丢失故障保护-rc-loss-failsafe"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#遥控信号丢失故障保护-rc-loss-failsafe"}},[t._v("#")]),t._v(" 遥控信号丢失故障保护 {#rc_loss_failsafe}")]),t._v(" "),r("p",[t._v("如果遥控传输的通信链路丢失，则触发遥控信号丢失故障保护。")]),t._v(" "),r("p",[r("img",{attrs:{src:e(1089),alt:"安全 - 遥控丢失（QGC）"}})]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("Note")]),t._v(" 为了"),r("em",[t._v("检测遥控信号丢失情况")]),t._v("，可能还需要配置 PX4 和接收机："),r("RouterLink",{attrs:{to:"/zh/config/radio.html#rc_loss_detection"}},[t._v("无线电设置 > 遥控信号丢失检测")]),t._v("。")],1)]),t._v(" "),r("p",[t._v("设置和基本参数如下所示。")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("设置")]),t._v(" "),r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("遥控信号丢失超时")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_RC_LOSS_T"}},[t._v("COM_RC_LOSS_T")])],1),t._v(" "),r("td",[t._v("遥控信号失联后到故障保险触发前的时间。")])]),t._v(" "),r("tr",[r("td",[t._v("故障保护动作")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_RCL_ACT"}},[t._v("NAV_RCL_ACT")])],1),t._v(" "),r("td",[t._v("禁用，悬停，返航，降落，终止，锁定。")])])])]),t._v(" "),r("h3",{attrs:{id:"数据链路丢失故障保护"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据链路丢失故障保护"}},[t._v("#")]),t._v(" 数据链路丢失故障保护")]),t._v(" "),r("p",[t._v("如果在执行任务时数传链路（与地面站的连接）丢失，则会触发数据链路丢失故障保护。")]),t._v(" "),r("p",[r("img",{attrs:{src:e(1090),alt:"安全 - 数据链路丢失（QGC）"}})]),t._v(" "),r("p",[t._v("设置和基本参数如下所示。")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("设置")]),t._v(" "),r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("数据链路丢失超时")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_DL_LOSS_T"}},[t._v("COM_DL_LOSS_T")])],1),t._v(" "),r("td",[t._v("数据连接断开后到故障保护触发之前的时间。")])]),t._v(" "),r("tr",[r("td",[t._v("故障保护动作")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_DLL_ACT"}},[t._v("NAV_DLL_ACT")])],1),t._v(" "),r("td",[t._v("禁用，悬停，返航，降落，终止，锁定。")])])])]),t._v(" "),r("h3",{attrs:{id:"地理围栏故障保护"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#地理围栏故障保护"}},[t._v("#")]),t._v(" 地理围栏故障保护")]),t._v(" "),r("p",[t._v("地理围栏故障保护是一个以初始位置为中心“虚拟”圆柱体。 如果机体在圆柱体的半径以外或在高于圆柱体的高度移动，将触发特定的故障保护动作。")]),t._v(" "),r("p",[r("img",{attrs:{src:e(1091),alt:"安全 - 地理围栏（QGC）"}})]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("Tip")]),t._v(" PX4 单独支持更复杂的地理围栏几何结构，如多个任意多边形和圆形内外的区域，设置操作为："),r("RouterLink",{attrs:{to:"/zh/flying/geofence.html"}},[t._v("飞行 > 地理围栏")]),t._v("。")],1)]),t._v(" "),r("p",[t._v("设置和基本"),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#geofence"}},[t._v("地理围栏参数")]),t._v("如下所示。")],1),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("设置")]),t._v(" "),r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("冲出围栏时的响应动作")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#GF_ACTION"}},[t._v("GF_ACTION")])],1),t._v(" "),r("td",[t._v("None, Warning, Hold mode, Return mode, Terminate, Land.")])]),t._v(" "),r("tr",[r("td",[t._v("最大半径")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#GF_MAX_HOR_DIST"}},[t._v("GF_MAX_HOR_DIST")])],1),t._v(" "),r("td",[t._v("地理围栏圆柱体的水平半径。 如果为 0，则禁用地理围栏。")])]),t._v(" "),r("tr",[r("td",[t._v("最大高度")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#GF_MAX_VER_DIST"}},[t._v("GF_MAX_VER_DIST")])],1),t._v(" "),r("td",[t._v("地理围栏圆柱体的高度。 如果为 0，则禁用地理围栏。")])])])]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("Note")]),t._v(" 通过设置 "),r("code",[t._v("GF_ACTION")]),t._v(" 来终止飞行将导致机体因违反地理围栏而急停。 由于这种情况具有一定的危险性，可以利用 "),r("a",{attrs:{href:"#CBRK_FLIGHTTERM"}},[t._v("CBRK_FLIGHTTERM")]),t._v(" 禁用此功能（需要将其重置为0才能真正关闭系统）。")])]),t._v(" "),r("p",[t._v("如下设置也适用，但不显示在 QGC 用户界面中。")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("设置")]),t._v(" "),r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("地理围栏定高模式")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#GF_ALTMODE"}},[t._v("GF_ALTMODE")])],1),t._v(" "),r("td",[t._v("使用的高度参考值：0 = WGS84，1 = AMSL。")])]),t._v(" "),r("tr",[r("td",[t._v("地理围栏计数限制")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#GF_COUNT"}},[t._v("GF_COUNT")])],1),t._v(" "),r("td",[t._v("设定需要检测到多少次在围栏之外的位置才能触发违反地理围栏的事件。")])]),t._v(" "),r("tr",[r("td",[t._v("地理围栏来源")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#GF_SOURCE"}},[t._v("GF_SOURCE")])],1),t._v(" "),r("td",[t._v("设置定位是来自全局位置估计还是直接来自 GPS 设备。")])]),t._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"CBRK_FLIGHTTERM"}}),t._v("飞行终止断路器")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CBRK_FLIGHTTERM"}},[t._v("CBRK_FLIGHTTERM")])],1),t._v(" "),r("td",[t._v("启用/禁用飞行终止操作（默认禁用）。")])])])]),t._v(" "),r("h3",{attrs:{id:"返航设置-return-settings"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#返航设置-return-settings"}},[t._v("#")]),t._v(" 返航设置 {#return_settings}")]),t._v(" "),r("p",[r("em",[t._v("返航")]),t._v("是一种常见的"),r("a",{attrs:{href:"#failsafe_actions"}},[t._v("故障保护动作")]),t._v("，这将启动"),r("RouterLink",{attrs:{to:"/zh/flight_modes/return.html"}},[t._v("返航模式")]),t._v("，使机体返回起飞位置。 本节说明如何设置返航后的降落/悬停行为。")],1),t._v(" "),r("p",[r("img",{attrs:{src:e(1092),alt:"安全 - 返航设置（QGC）"}})]),t._v(" "),r("p",[t._v("设置和基本地参数如下所示。")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("设置")]),t._v(" "),r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("爬升高度")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RTL_RETURN_ALT"}},[t._v("RTL_RETURN_ALT")])],1),t._v(" "),r("td",[t._v("返航飞行时，机体上升到该最低高度（如果低于）。")])]),t._v(" "),r("tr",[r("td",[t._v("返航行为")]),t._v(" "),r("td"),t._v(" "),r("td",[r("em",[t._v("返航动作")]),t._v("的选择：降落，悬停且不降落，或一定时间后悬停并降落。")])]),t._v(" "),r("tr",[r("td",[t._v("悬停高度")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RTL_DESCEND_ALT"}},[t._v("RTL_DESCEND_ALT")])],1),t._v(" "),r("td",[t._v("如果选择了返航并悬停，您还可以指定机体保持的高度。")])]),t._v(" "),r("tr",[r("td",[t._v("悬停时间")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RTL_LAND_DELAY"}},[t._v("RTL_LAND_DELAY")])],1),t._v(" "),r("td",[t._v("如果选择返航并悬停随后降落，您还可以指定机体将保持悬停多长时间。")])])])]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("Note")]),t._v(" 返航行为由 "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RTL_LAND_DELAY"}},[t._v("RTL_LAND_DELAY")]),t._v(" 定义。 如果该参数为负值，机体将立即着陆。 更多信息可参阅"),r("RouterLink",{attrs:{to:"/zh/flight_modes/return.html"}},[t._v("返航模式")]),t._v("。")],1)]),t._v(" "),r("h3",{attrs:{id:"降落模式设置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#降落模式设置"}},[t._v("#")]),t._v(" 降落模式设置")]),t._v(" "),r("p",[r("em",[t._v("在当前位置降落")]),t._v("是一种常见的"),r("a",{attrs:{href:"#failsafe_actions"}},[t._v("故障保护动作")]),t._v("，采用降落模式启动。 本节介绍何时及是否使载具在降落后自动上锁的设置方式。 对于多旋翼飞机（仅限），您可以另外设置降落速度。")]),t._v(" "),r("p",[r("img",{attrs:{src:e(1093),alt:"安全 - 降落模式设置（QGC）"}})]),t._v(" "),r("p",[t._v("设置和基本参数如下所示。")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("设置")]),t._v(" "),r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("几秒后锁定")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_DISARM_LAND"}},[t._v("COM_DISARM_LAND")])],1),t._v(" "),r("td",[t._v("选中复选框以指定机体在降落后上锁。 该值必须是非零的，但可以是小于一秒的小数。")])]),t._v(" "),r("tr",[r("td",[t._v("降落速率")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_LAND_SPEED"}},[t._v("MPC_LAND_SPEED")])],1),t._v(" "),r("td",[t._v("下降速率（仅限多旋翼）。")])])])]),t._v(" "),r("h2",{attrs:{id:"其他故障保护设置-failsafe-other"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#其他故障保护设置-failsafe-other"}},[t._v("#")]),t._v(" 其他故障保护设置 {#failsafe_other}")]),t._v(" "),r("p",[t._v("本节包含无法通过 QGroundControl 安全设置页面配置的故障保护设置的信息。")]),t._v(" "),r("h3",{attrs:{id:"位置-gps-丢失故障保护"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#位置-gps-丢失故障保护"}},[t._v("#")]),t._v(" 位置（GPS）丢失故障保护")]),t._v(" "),r("p",[t._v("如果在对位置估计有要求的模式下，PX 4位置估计的精度低于要求（这可能是由 GPS 丢失引起的），则会触发位置丢失故障保护。")]),t._v(" "),r("p",[t._v("故障动作由 "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_POSCTL_NAVL"}},[t._v("COM_POSCTL_NAVL")]),t._v(" 控制, 基于遥控控制（和高度信息）是否可用：")],1),t._v(" "),r("ul",[r("li",[r("code",[t._v("0")]),t._v("：遥控控制可用。 如果高度估计值可用，则切换到"),r("em",[t._v("定高模式")]),t._v("，否则为"),r("em",[t._v("自稳模式")]),t._v("。")]),t._v(" "),r("li",[r("code",[t._v("1")]),t._v("：遥控控制"),r("em",[t._v("不")]),t._v("可用。 如果高度估计值可用，则切换到"),r("em",[t._v("降落模式")]),t._v("，否则进入飞行终止。")])]),t._v(" "),r("p",[t._v("此外，固定翼机体还有一个参数（"),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_GPSF_LT"}},[t._v("NAV_GPSF_LT")]),t._v("），用于定义机体在丢失位置到试图降落这段时间内将悬停（盘旋）多长时间。")],1),t._v(" "),r("p",[t._v("以下为所有机体的相关参数(另见 "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#gps-failure-navigation"}},[t._v("GPS 故障导航参数")]),t._v(")：")],1),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_POS_FS_DELAY"}},[t._v("COM_POS_FS_DELAY")])],1),t._v(" "),r("td",[t._v("失去位置后到触发故障保护前的延迟。")])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_POSCTL_NAVL"}},[t._v("COM_POSCTL_NAVL")])],1),t._v(" "),r("td",[t._v("执行任务期间的位置控制导航丢失响应。 值：0——假设使用遥控，1——假设没有遥控。")])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CBRK_VELPOSERR"}},[t._v("CBRK_VELPOSERR")])],1),t._v(" "),r("td",[t._v("用于位置错误检查的断路器（在所有模式下禁用错误检查）。")])])])]),t._v(" "),r("p",[t._v("仅影响固定翼机体的参数：")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_GPSF_LT"}},[t._v("NAV_GPSF_LT")])],1),t._v(" "),r("td",[t._v("悬停时间（以在飞行终止前等待 GPS 恢复）。 设置为 0 以禁用。")])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_GPSF_P"}},[t._v("NAV_GPSF_P")])],1),t._v(" "),r("td",[t._v("以一定的俯仰角盘旋。")])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_GPSF_R"}},[t._v("NAV_GPSF_R")])],1),t._v(" "),r("td",[t._v("以一定的横滚/侧倾角盘旋。")])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_GPSF_TR"}},[t._v("NAV_GPSF_TR")])],1),t._v(" "),r("td",[t._v("盘旋时的油门量。")])])])]),t._v(" "),r("h3",{attrs:{id:"offboard-中断故障保护"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#offboard-中断故障保护"}},[t._v("#")]),t._v(" Offboard 中断故障保护")]),t._v(" "),r("p",[t._v("如果在 Offboard 控制模式下发生 Offboard 通信链路中断，则会触发 "),r("em",[t._v("Offboard 中断故障保护")]),t._v("。 可以根据是否还有可用的遥控连接来指定不同的故障保护行为。")]),t._v(" "),r("p",[t._v("相关参数如下：")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_OF_LOSS_T"}},[t._v("COM_OF_LOSS_T")])],1),t._v(" "),r("td",[t._v("Offboard 连接中断后到触发故障保护前的延迟。")])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_OBL_ACT"}},[t._v("COM_OBL_ACT")])],1),t._v(" "),r("td",[t._v("遥控不可用时的故障保护动作：降落模式、保持模式、返航模式。")])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_OBL_RC_ACT"}},[t._v("COM_OBL_RC_ACT")])],1),t._v(" "),r("td",[t._v("如果遥控可用，则故障保护动作：定点模式、定高模式、手动模式、返航模式、降落模式、保持模式。")])])])]),t._v(" "),r("h3",{attrs:{id:"任务故障保护"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#任务故障保护"}},[t._v("#")]),t._v(" 任务故障保护")]),t._v(" "),r("p",[t._v("任务故障保护检查可防止上一个任务在新的位置起飞，也可防止任务规模超标（航点之间的距离太大）。 故障保护措施指的是任务不会运行。")]),t._v(" "),r("p",[t._v("相关参数如下：")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MIS_DIST_1WP"}},[t._v("MIS_DIST_1WP")])],1),t._v(" "),r("td",[t._v("如果当前航点距离起飞点的距离大于该值，则任务不会启动。 如果值为 0 或小于，则禁用。")])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MIS_DIST_WPS"}},[t._v("MIS_DIST_WPS")])],1),t._v(" "),r("td",[t._v("如果随后两个航点之间的任何距离大于这个数值，则不会开始执行任务。")])])])]),t._v(" "),r("h3",{attrs:{id:"交通规避故障保护"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#交通规避故障保护"}},[t._v("#")]),t._v(" 交通规避故障保护")]),t._v(" "),r("p",[t._v("交通规避故障保护使 PX4 在执行任务期间可以响应转发器的数据（例如来自 "),r("RouterLink",{attrs:{to:"/zh/advanced_features/traffic_avoidance_adsb.html"}},[t._v("ADSB 转发器")]),t._v("）。")],1),t._v(" "),r("p",[t._v("相关参数如下：")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_TRAFF_AVOID"}},[t._v("NAV_TRAFF_AVOID")])],1),t._v(" "),r("td",[t._v("设置故障保护动作：禁用、警告、返航模式、降落模式。")])])])]),t._v(" "),r("h3",{attrs:{id:"自适应-quadchute-故障安全"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#自适应-quadchute-故障安全"}},[t._v("#")]),t._v(" 自适应 QuadChute 故障安全")]),t._v(" "),r("p",[t._v("在固定翼模式下，当推力电机（或空速管）故障使垂直起降机体无法再上升到设定高度时的故障保护。 If triggered, the vehicle will transition to multicopter mode and enter failsafe "),r("RouterLink",{attrs:{to:"/zh/flight_modes/return.html"}},[t._v("Return mode")]),t._v(".")],1),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("Note")]),t._v(" You can pause "),r("em",[t._v("Return mode")]),t._v(" and transition back to fixed wing if desired. Note that if the condition that caused the failsafe still exists, it may trigger again!")])]),t._v(" "),r("p",[t._v("相关参数如下：")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#VT_FW_ALT_ERR"}},[t._v("VT_FW_ALT_ERR")])],1),t._v(" "),r("td",[t._v("固定翼飞行的最大负高度误差。 如果下降的高度超过该值，使实际高度低于设定高度，则机体将切换回多旋翼模式并执行故障保护返航操作。")])])])]),t._v(" "),r("h2",{attrs:{id:"故障检测器-failure-detector"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#故障检测器-failure-detector"}},[t._v("#")]),t._v(" 故障检测器 {#failure_detector}")]),t._v(" "),r("p",[t._v("故障检测器允许机体在意外翻转或收到外部故障检测系统通知时执行保护措施。")]),t._v(" "),r("p",[t._v("During "),r("strong",[t._v("flight")]),t._v(", the failure detector can be used to trigger "),r("RouterLink",{attrs:{to:"/zh/advanced_config/flight_termination.html"}},[t._v("flight termination")]),t._v(" if failure conditions are met, which may then launch a "),r("RouterLink",{attrs:{to:"/zh/peripherals/parachute.html"}},[t._v("parachute")]),t._v(" or perform some other action.")],1),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("Note")]),t._v(" Failure detection during flight is deactivated by default (enable by setting the parameter: "),r("a",{attrs:{href:"#CBRK_FLIGHTTERM"}},[t._v("CBRK_FLIGHTTERM=0")]),t._v(").")])]),t._v(" "),r("p",[t._v("During "),r("strong",[t._v("takeoff")]),t._v(" the failure detector "),r("a",{attrs:{href:"#attitude_trigger"}},[t._v("attitude trigger")]),t._v(" invokes the "),r("a",{attrs:{href:"#action_lockdown"}},[t._v("lockdown action")]),t._v(" if the vehicle flips (lockdown kills the motors but, unlike flight termination, will not launch a parachute or perform other failure actions). Note that this check is "),r("em",[t._v("always enabled on takeoff")]),t._v(", irrespective of the "),r("code",[t._v("CBRK_FLIGHTTERM")]),t._v(" parameter.")]),t._v(" "),r("p",[t._v("故障检测器在所有机体类型和飞行模式下均处于激活状态，但"),r("em",[t._v("预期")]),t._v("会翻转的机体类型除外（即 "),r("RouterLink",{attrs:{to:"/zh/flight_modes/altitude_mc.html"}},[t._v("Acro 特技模式（MC）")]),t._v("，"),r("RouterLink",{attrs:{to:"/zh/flight_modes/altitude_fw.html"}},[t._v("Acro 特技模式（FW）")]),t._v("，"),r("RouterLink",{attrs:{to:"/zh/flight_modes/rattitude_mc.html"}},[t._v("Rattitude 半自稳模式")]),t._v("和 Manual 手动模式（FW））。")],1),r("p"),t._v(" "),r("h3",{attrs:{id:"姿态触发器-attitude-trigger"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#姿态触发器-attitude-trigger"}},[t._v("#")]),t._v(" 姿态触发器 {#attitude_trigger}")]),t._v(" "),r("p",[t._v("如果机体姿态在超过规定时间的情况下超过预定的俯仰和横滚值，则故障检测器可以配置为触发器。")]),t._v(" "),r("p",[t._v("相关参数如下：")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("span",{attrs:{id:"CBRK_FLIGHTTERM"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CBRK_FLIGHTTERM"}},[t._v("CBRK_FLIGHTTERM")])],1),t._v(" "),r("td",[t._v("飞行终止断路器。 从 121212（默认）取消设置，以启用由于故障检测器或 FMU 丢失而导致的飞行终止。")])]),t._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"FD_FAIL_P"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FD_FAIL_P"}},[t._v("FD_FAIL_P")])],1),t._v(" "),r("td",[t._v("最大允许俯仰角（角度制）。")])]),t._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"FD_FAIL_R"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FD_FAIL_R"}},[t._v("FD_FAIL_R")])],1),t._v(" "),r("td",[t._v("最大允许横滚角（角度制）。")])]),t._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"FD_FAIL_P_TTRI"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FD_FAIL_P_TTRI"}},[t._v("FD_FAIL_P_TTRI")])],1),t._v(" "),r("td",[t._v("超过故障检测的 "),r("a",{attrs:{href:"#FD_FAIL_P"}},[t._v("FD_FAIL_P")]),t._v(" 时间（默认为 0.3s）。")])]),t._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"FD_FAIL_R_TTRI"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FD_FAIL_R_TTRI"}},[t._v("FD_FAIL_R_TTRI")])],1),t._v(" "),r("td",[t._v("超过故障检测的 "),r("a",{attrs:{href:"#FD_FAIL_R"}},[t._v("FD_FAIL_R")]),t._v(" 时间（默认为 0.3s）。")])])])]),t._v(" "),r("h3",{attrs:{id:"外部自动触发系统-ats-external-ats"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#外部自动触发系统-ats-external-ats"}},[t._v("#")]),t._v(" 外部自动触发系统（ATS） {#external_ats}")]),t._v(" "),r("p",[r("a",{attrs:{href:"#failure_detector"}},[t._v("故障检测器")]),t._v("在"),r("a",{attrs:{href:"#CBRK_FLIGHTTERM"}},[t._v("启用")]),t._v("的状态下也可以由外部自动触发系统 ATS 触发。 外部触发系统必须连接到飞行控制器的 AUX5 端口（或者是那些没有 AUX 端口的飞控板上的 MAIN5 端口），并使用以下参数进行配置。")]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("Note")]),t._v(" External ATS is required by "),r("a",{attrs:{href:"https://webstore.ansi.org/Standards/ASTM/ASTMF332218",target:"_blank",rel:"noopener noreferrer"}},[t._v("ASTM F3322-18"),r("OutboundLink")],1),t._v(". One example of an ATS device is the "),r("a",{attrs:{href:"https://fruitychutes.com/uav_rpv_drone_recovery_parachutes/sentinel-automatic-trigger-system.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("FruityChutes Sentinel Automatic Trigger System"),r("OutboundLink")],1),t._v(".")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("span",{attrs:{id:"FD_EXT_ATS_EN"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FD_EXT_ATS_EN"}},[t._v("FD_EXT_ATS_EN")])],1),t._v(" "),r("td",[t._v("启用 AUX5 或 MAIN5（取决于飞控板）上的 PWM 输入，以便从外部自动触发系统（ATS）启用故障保护。 默认值：禁用。")])]),t._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"FD_EXT_ATS_TRIG"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FD_EXT_ATS_TRIG"}},[t._v("FD_EXT_ATS_TRIG")])],1),t._v(" "),r("td",[t._v("来自外部自动触发系统的用于接通故障保护的 PWM 阈值。 默认值：1900m/s。")])])])]),t._v(" "),r("h2",{attrs:{id:"应急开关-safety-switch"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#应急开关-safety-switch"}},[t._v("#")]),t._v(" 应急开关 {#safety_switch}")]),t._v(" "),r("p",[t._v("可以配置遥控开关（"),r("em",[t._v("QGroundControl")]),t._v(" "),r("RouterLink",{attrs:{to:"/zh/config/flight_mode.html"}},[t._v("飞行模式设置")]),t._v("的一部分），以便在出现问题或发生紧急情况时及时采取矫正措施；例如，制动所有电机或激活"),r("a",{attrs:{href:"#return_switch"}},[t._v("返航模式")]),t._v("。")],1),t._v(" "),r("p",[t._v("本节列出了可用的应急开关。")]),t._v(" "),r("h3",{attrs:{id:"急停开关-kill-switch"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#急停开关-kill-switch"}},[t._v("#")]),t._v(" 急停开关 {#kill_switch}")]),t._v(" "),r("p",[t._v("急停开关会立即终止所有电机的输出（如果正处于飞行状态，机体将开始降落）！ 如果开关在 5 秒内复位，电机将重启。 5 秒后，机体将自动上锁；您需要再次解锁才能启动电机。")]),t._v(" "),r("h3",{attrs:{id:"解锁-上锁开关-arming-switch"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#解锁-上锁开关-arming-switch"}},[t._v("#")]),t._v(" 解锁/上锁开关 {#arming_switch}")]),t._v(" "),r("p",[t._v("解锁/上锁开关是对默认杆状安全开关机制的"),r("em",[t._v("直接替换")]),t._v("（二者作用相同：确保在电机启动/停止之前有一个需要用户留意的步骤）。 它可能优先于默认机制使用，原因如下：")]),t._v(" "),r("ul",[r("li",[t._v("这种机制偏向于切换动作而不是持续运动。")]),t._v(" "),r("li",[t._v("这种机制可以避免因为某种意外误触而引发的飞行期间解锁/上锁。")]),t._v(" "),r("li",[t._v("这种机制没有延迟（立即作出反应）。")])]),t._v(" "),r("p",[t._v("对于那些"),r("em",[t._v("支持在飞行期间上锁")]),t._v("的飞行模式<1>，解锁/上锁开关会立即上锁（制动）电机。 支持飞行期间上锁的模式如下：")]),r("p"),t._v(" "),r("ul",[r("li",[r("em",[t._v("手动模式")])]),t._v(" "),r("li",[r("em",[t._v("特技模式")])]),t._v(" "),r("li",[r("em",[t._v("自稳模式")])]),t._v(" "),r("li",[r("em",[t._v("半自稳模式")])])]),t._v(" "),r("p",[t._v("对于不支持在飞行期间上锁的模式，在飞行期间会忽略该开关信号，但在检测到着陆后可以使用该开关。 不支持飞行期间上锁的模式包括"),r("em",[t._v("定点模式")]),t._v("和自主模式（例如"),r("em",[t._v("任务模式")]),t._v("、"),r("em",[t._v("降落模式")]),t._v("等）。")]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("Note")]),t._v(" "),r("a",{attrs:{href:"#auto-disarming-timeouts"}},[t._v("Auto disarm timeouts")]),t._v(" (e.g. via "),r("a",{attrs:{href:"#COM_DISARM_LAND"}},[t._v("COM_DISARM_LAND")]),t._v(") are independent of the arm/disarm switch - ie even if the switch is armed the timeouts will still work.")])]),t._v(" "),r("h3",{attrs:{id:"返航开关-return-switch"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#返航开关-return-switch"}},[t._v("#")]),t._v(" 返航开关 {#return_switch}")]),t._v(" "),r("p",[t._v("返航开关可以立即启动"),r("RouterLink",{attrs:{to:"/zh/flight_modes/return.html"}},[t._v("返航模式")]),t._v("。")],1),t._v(" "),r("h2",{attrs:{id:"其他安全设置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#其他安全设置"}},[t._v("#")]),t._v(" 其他安全设置")]),t._v(" "),r("h3",{attrs:{id:"超时自动上锁-auto-disarming-timeouts"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#超时自动上锁-auto-disarming-timeouts"}},[t._v("#")]),t._v(" 超时自动上锁 {#auto-disarming-timeouts}")]),t._v(" "),r("p",[t._v("如果起飞，并且/或者着陆后的响应速度太慢，您可以设置超时自动上锁（上锁会断开电机的电源，导致螺旋桨不会旋转）。")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[t._v("相关参数")]),t._v("显示如下：")],1),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("span",{attrs:{id:"COM_DISARM_LAND"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_DISARM_LAND"}},[t._v("COM_DISARM_LAND")])],1),t._v(" "),r("td",[t._v("降落后自动上锁的超时时间。")])]),t._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"COM_DISARM_PRFLT"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_DISARM_PRFLT"}},[t._v("COM_DISARM_PRFLT")])],1),t._v(" "),r("td",[t._v("如果起飞速度太慢，将启动自动上锁。")])])])]),t._v(" "),r("h2",{attrs:{id:"更多信息"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#更多信息"}},[t._v("#")]),t._v(" 更多信息")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/Safety.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl 用户手册 > 安全设置"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);_.default=a.exports}}]);