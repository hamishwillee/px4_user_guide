(window.webpackJsonp=window.webpackJsonp||[]).push([[316],{1592:function(_,t,v){"use strict";v.r(t);var e=v(19),a=Object(e.a)({},(function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"飞行终止配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#飞行终止配置"}},[_._v("#")]),_._v(" 飞行终止配置")]),_._v(" "),e("p",[e("em",[_._v("飞行终止")]),e("RouterLink",{attrs:{to:"/zh/config/safety.html#failsafe_actions"}},[_._v("故障保护动作")]),_._v("可由"),e("RouterLink",{attrs:{to:"/zh/config/safety.html"}},[_._v("安全检查")]),_._v("（例如任何载具类型或任何飞行模式下的 RC 丢失、违反地理围栏等）或者故障检测器触发。")],1),_._v(" "),e("p",[_._v("当"),e("em",[_._v("飞行终止")]),_._v("激活时，PX4 同时关闭所有控制器，并将所有 PWM 输出设置为其故障保护值。")]),_._v(" "),e("p",[_._v("根据所连接的设备，PWM 故障保护输出可以用来完成以下动作：")]),_._v(" "),e("ul",[e("li",[_._v("展开"),e("RouterLink",{attrs:{to:"/zh/peripherals/parachute.html"}},[_._v("降落伞")]),_._v("。")],1),_._v(" "),e("li",[_._v("伸展可伸缩起落架。")]),_._v(" "),e("li",[_._v("将连接了 PWM 的云台移动到安全的方向（或将它回收）以保护摄像机。")]),_._v(" "),e("li",[_._v("触发一个重启装置，比如安全气囊。")]),_._v(" "),e("li",[_._v("触发警报。")])]),_._v(" "),e("p",[_._v("飞行终止是无法取消的。 在飞行终止触发后，您应尽快拔下电池。 您需要在重启载具或重新上电后才能再次使用。")]),_._v(" "),e("blockquote",[e("p",[e("strong",[_._v("Tip")]),_._v(" PX4 不知道连接了哪些安全设备——它仅仅将一组预设的 PWM 值应用于安全设备的输出。")])]),_._v(" "),e("p",[e("span")]),_._v(" "),e("blockquote",[e("p",[e("strong",[_._v("Tip")]),_._v(" 故障保护值被应用于终端的所有输出。 无法配置基于独立时间（或其他）触发的电机或特定安全装置。")])]),_._v(" "),e("p",[e("span")]),_._v(" "),e("blockquote",[e("p",[e("strong",[_._v("Note")]),_._v(" 这"),e("em",[_._v("不是")]),_._v("一个独立的"),e("em",[_._v("飞行终止系统")]),_._v("。 如果断电或自动驾驶仪完全崩溃，则不会触发故障安全设备。")])]),_._v(" "),e("h2",{attrs:{id:"硬件配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#硬件配置"}},[_._v("#")]),_._v(" 硬件配置")]),_._v(" "),e("p",[_._v("可以使用通过改变 PWM 值触发的任何"),e("em",[_._v("安全装置")]),_._v("（例如"),e("RouterLink",{attrs:{to:"/zh/peripherals/parachute.html"}},[_._v("降落伞")]),_._v("），此外可以连接到任何空闲的 PWM 端口（MAIN 端口和 AUX 端口均可）。")],1),_._v(" "),e("blockquote",[e("p",[e("strong",[_._v("Note")]),_._v(" 如果您使用的是 Pixhawk 系列电路板，则必须单独为伺服导轨供电（通常可利用您无刷电调上的 5V BEC 供电）。")])]),_._v(" "),e("h2",{attrs:{id:"软件配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#软件配置"}},[_._v("#")]),_._v(" 软件配置")]),_._v(" "),e("p",[e("RouterLink",{attrs:{to:"/zh/config/safety.html"}},[_._v("安全")]),_._v("话题解释了如何将"),e("em",[_._v("飞行终止")]),_._v("设置为针对特定故障安全检查而执行的"),e("RouterLink",{attrs:{to:"/zh/config/safety.html#failsafe_actions"}},[_._v("故障保护动作")]),_._v("。")],1),_._v(" "),e("p",[_._v("如果载具翻转（超过一定姿态）或外部自动触发系统（ATS）检测到故障，则"),e("RouterLink",{attrs:{to:"/zh/config/safety.html#failure_detector"}},[_._v("故障检测器")]),_._v("也可以（可选）通过配置来触发飞行终止，如下所示：")],1),_._v(" "),e("ul",[e("li",[_._v("设置 "),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CBRK_FLIGHTTERM"}},[_._v("CBRK_FLIGHTTERM=0")]),_._v(" 启用故障检测器（默认情况下禁用）。")],1),_._v(" "),e("li",[_._v("通过"),e("RouterLink",{attrs:{to:"/zh/config/safety.html#attitude_trigger"}},[_._v("安全 > 故障检测器 > 姿态触发器")]),_._v("可以配置触发"),e("em",[_._v("飞行终止")]),_._v("的姿态极限值。 > "),e("strong",[_._v("Note")]),_._v(" 在"),e("em",[_._v("起飞期间")]),_._v("，超过限制值的姿态将触发"),e("em",[_._v("上锁")]),_._v("（制动电机但不启动降落伞），而不是飞行终止。 无论 "),e("code",[_._v("CBRK_FLIGHTTERM")]),_._v(" 为何值，此选项始终启用。")],1),_._v(" "),e("li",[e("RouterLink",{attrs:{to:"/zh/config/safety.html#external_ats"}},[_._v("通过安全 > 外部自动触发系统（ATS）")]),_._v("可以配置外部触发系统。")],1)]),_._v(" "),e("p",[_._v("对于每个与安全装置相连的 MAIN 输出，其中“n”指 PWM 端口号：")]),_._v(" "),e("ul",[e("li",[_._v("将 "),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#PWM_MAIN_DIS1"}},[_._v("PWM_MAIN_DISn")]),_._v(" 设置为设备的“OFF”PWM值。")],1),_._v(" "),e("li",[_._v("将 "),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#PWM_MAIN_FAIL1"}},[_._v("PWM_MAIN_FAILn")]),_._v(" 设置为设备的“ON”PWM值。")],1)]),_._v(" "),e("p",[_._v("对于每个与安全装置相连的 AUX 输出，其中“n”指 PWM 端口号：")]),_._v(" "),e("ul",[e("li",[_._v("将 "),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#PWM_AUX_DIS1"}},[_._v("PWM_AUX_DISn")]),_._v(" 设置为设备的“OFF”PWM值。")],1),_._v(" "),e("li",[_._v("将 "),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#PWM_AUX_FAIL1"}},[_._v("PWM_AUX_FAILn")]),_._v(" 设置为设备的“ON”PWM值。")],1)]),_._v(" "),e("p",[_._v("最后，设置任意电机的 "),e("code",[_._v("PWM_AUX_FAILn")]),_._v(" and "),e("code",[_._v("PWM_MAIN_FAILn")]),_._v(" PWM值。")]),_._v(" "),e("h2",{attrs:{id:"逻辑图解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#逻辑图解"}},[_._v("#")]),_._v(" 逻辑图解")]),_._v(" "),e("p",[_._v("下图显示了飞行终止的逻辑流程。")]),_._v(" "),e("p",[e("img",{attrs:{src:v(419),alt:"逻辑图解"}})])])}),[],!1,null,null,null);t.default=a.exports},419:function(_,t,v){_.exports=v.p+"assets/img/flight_termination_logic_diagram.094a47f0.png"}}]);