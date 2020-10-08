(window.webpackJsonp=window.webpackJsonp||[]).push([[460],{1663:function(t,_,e){"use strict";e.r(_);var a=e(19),r=Object(a.a)({},(function(){var t=this,_=t.$createElement,e=t._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"vtol后转换调参"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vtol后转换调参"}},[t._v("#")]),t._v(" VTOL后转换调参")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("Note")]),t._v(" 以下的某些特性只在PX4的1.7版本可用，并且现在只在实验性的开发分支上有。")])]),t._v(" "),e("p",[t._v("当一个VTOL飞机进行后转换时（从固定翼模式转换到多旋翼模式），多旋翼需要先减速才能取得比较好的控制效果。 在PX4的1.7版本以及现在的开发者分支上，当飞行器的水平速度达到多旋翼巡航速度（"),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_XY_CRUISE"}},[t._v("MPC_XY_CRUISE")]),t._v("）或者后转换时间到达设定值（"),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#VT_B_TRANS_DUR"}},[t._v("VT_B_TRANS_DUR")]),t._v("）的时候，飞行器的动力将完全切换到四旋翼模式。")],1),t._v(" "),e("h2",{attrs:{id:"后转换持续时间"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#后转换持续时间"}},[t._v("#")]),t._v(" 后转换持续时间")]),t._v(" "),e("p",[t._v("把后转换持续时间设长一点 ("),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#VT_B_TRANS_DUR"}},[t._v("VT_B_TRANS_DUR")]),t._v(") 可以给飞行器更长的时间来减速。 在这期间VTOL将会关掉它的固定翼电机并且在滑翔时逐渐打开四个旋翼电机。 这个时间设的越大，飞行器尝试通过滑翔来减速的时间就会越长。 要注意的是，这段时间飞行器会只控高度，不控位置，所以可能有会漂移现象。")],1),t._v(" "),e("h2",{attrs:{id:"设置期望的减速加速度"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置期望的减速加速度"}},[t._v("#")]),t._v(" 设置期望的减速加速度")]),t._v(" "),e("p",[t._v("When flying missions that make use of a "),e("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_NAV_VTOL_LAND",target:"_blank",rel:"noopener noreferrer"}},[t._v("VTOL_LAND"),e("OutboundLink")],1),t._v(" waypoint the autopilot will attempt to calculate the proper distance at which to initiate the back-transition. 它通过当前速度（取自地速）和期望减速加速度来计算这个距离。 要让飞行器在后转换时更加接近降落点，你可以调整期望减速加速度（"),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#VT_B_DEC_MSS"}},[t._v("VT_B_DEC_MSS")]),t._v("）参数 确保你的后转换持续时间足够长，可以让飞行器在超时前达到预期的位置。")],1),t._v(" "),e("h2",{attrs:{id:"应用空气制动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#应用空气制动"}},[t._v("#")]),t._v(" 应用空气制动")]),t._v(" "),e("p",[t._v("如果你的飞行器支持空气制动，并且你选的机型也支持空气制动，那么你就可以选择后转换的空气制动位置（"),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#VT_B_REV_OUT"}},[t._v("VT_B_REV_OUT")]),t._v(")。 这个值的范围是从0到1，因此0.7也就代表了70%的输出。")],1),t._v(" "),e("h2",{attrs:{id:"用固定翼电机进行反向推力"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用固定翼电机进行反向推力"}},[t._v("#")]),t._v(" 用固定翼电机进行反向推力")]),t._v(" "),e("p",[t._v("为了获得尽可能短的后转换距离，PX4支持通过反转固定翼电机lai'jin'xing'sha'che来进行刹车。 要使用这一特性，我么首先需要一个支持电机反转的电调。")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("注意")]),t._v(" 一般的固定翼螺旋桨不会优化反转的性能，所以如果如果把螺旋桨的反向推力设的太高的话可能会失速。")])]),t._v(" "),e("p",[t._v("一般来讲一个有反向功能的电调可以通过两种方式来实现反向推力。")]),t._v(" "),e("h3",{attrs:{id:"用油门缩放功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用油门缩放功能"}},[t._v("#")]),t._v(" 用油门缩放功能")]),t._v(" "),e("p",[t._v("一般来讲油门杆是只用于前向推力的。")]),t._v(" "),e("p",[t._v("电调可以把0推力设为50%油门，把前向推力设到50%油门以上而把反向推力设到50%以下。 我们可以对机型进行设置来让它"),e("em",[t._v("只")]),t._v("在后转换期间进行这样的油门缩放，这样我们在转换期间就可以实现反向推力了。")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("警告")]),t._v(" 后转换期间对3D油门缩放的支持需要在机型内有相应的"),e("em",[t._v("代码")]),t._v(" 。")])]),t._v(" "),e("p",[t._v("通过设置参数 "),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#VT_B_TRANS_THR"}},[t._v("VT_B_TRANS_THR")]),t._v("（设置为0到-1之间的一个负值），可以设置后转换期间的负推力。")],1),t._v(" "),e("h3",{attrs:{id:"用一个通道来控制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用一个通道来控制"}},[t._v("#")]),t._v(" 用一个通道来控制")]),t._v(" "),e("p",[t._v("ESCs that use a separate control channel to control the motor direction (e.g. "),e("a",{attrs:{href:"http://a.hobbywing.com/category.php?id=44&filter_attr=6345.6346",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hobbywing Platinum series"),e("OutboundLink")],1),t._v(") can use the airbrakes channel to apply reverse thrust during back-transition.")]),t._v(" "),e("p",[t._v("已经配置好支持这种方法的机型(比如DeltaQuad 机型) 可以通过把"),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#VT_B_REV_OUT"}},[t._v("VT_B_REV_OUT")]),t._v(" 设置为1，并把"),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#VT_B_TRANS_THR"}},[t._v("VT_B_TRANS_THR")]),t._v("设置到你想要的油门上来激活反向推力功能。 这是一个从0到1的值，0.7代表70%油门")],1),t._v(" "),e("h2",{attrs:{id:"典型设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#典型设置"}},[t._v("#")]),t._v(" 典型设置")]),t._v(" "),e("p",[t._v("下面这个例子用了上述的大多数功能：")]),t._v(" "),e("ul",[e("li",[t._v("机型: 任何支持反向推力的VTOL机型 (例如 DeltaQuad)")]),t._v(" "),e("li",[t._v("电调: 支持推力反向的固定翼电调(例如 Hobbywing Platinum Pro 60A)")]),t._v(" "),e("li",[t._v("估计减速加速度 （单位m/s/s） "),e("code",[t._v("VT_B_DEC_MSS")]),t._v(": 2.5")]),t._v(" "),e("li",[t._v("后转换持续时间，（单位是秒） "),e("code",[t._v("VT_B_TRANS_DUR")]),t._v(": 10")]),t._v(" "),e("li",[t._v("激活后转换的推力反向控制通道 "),e("code",[t._v("VT_B_REV_OUT")]),t._v(": 1.0")]),t._v(" "),e("li",[t._v("在推力反向时使用70%的推力 "),e("code",[t._v("VT_B_TRANS_THR")]),t._v(": 0.7")])])])}),[],!1,null,null,null);_.default=r.exports}}]);