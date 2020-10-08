(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{1512:function(e,t,r){"use strict";r.r(t);var o=r(19),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"rtk-gps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rtk-gps"}},[e._v("#")]),e._v(" RTK GPS")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Real_Time_Kinematic",target:"_blank",rel:"noopener noreferrer"}},[e._v("Real Time Kinematic (RTK)"),o("OutboundLink")],1),e._v(" increases the accuracy of GNSS/GPS systems to centimeter-level.\nRTK allows PX4 to be used in applications like precision surveying, where pinpoint accuracy is essential.")]),e._v(" "),o("p",[e._v("You will need:")]),e._v(" "),o("ul",[o("li",[e._v("A pair of (supported) "),o("a",{attrs:{href:"#supported-rtk-devices"}},[e._v("RTK GPS devices")]),e._v(' (a "base" for the ground station and a "rover" for the vehicle)')]),e._v(" "),o("li",[e._v("A "),o("em",[e._v("laptop/PC")]),e._v(" with QGroundControl (QGroundControl for Android/iOS do not support RTK)")]),e._v(" "),o("li",[e._v("A vehicle with a WiFi or Telemetry radio link to the laptop")])]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Note")]),e._v(" "),o("em",[e._v("QGroundControl")]),e._v(" can theoretically enable RTK GPS for multiple vehicles (provided they each have a rover module).\nAt time of writing this use case has not been tested.")])]),e._v(" "),o("h2",{attrs:{id:"supported-rtk-devices"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#supported-rtk-devices"}},[e._v("#")]),e._v(" Supported RTK Devices")]),e._v(" "),o("p",[e._v("PX4 supports the "),o("a",{attrs:{href:"https://www.u-blox.com/en/product/neo-m8p",target:"_blank",rel:"noopener noreferrer"}},[e._v("u-blox M8P"),o("OutboundLink")],1),e._v(", "),o("a",{attrs:{href:"https://www.u-blox.com/en/product/zed-f9p-module",target:"_blank",rel:"noopener noreferrer"}},[e._v("u-blox F9P"),o("OutboundLink")],1),e._v(" and the "),o("a",{attrs:{href:"https://www.trimble.com/Precision-GNSS/MB-Two-Board.aspx",target:"_blank",rel:"noopener noreferrer"}},[e._v("Trimble MB-Two"),o("OutboundLink")],1),e._v(" GPS and products that incorporate it.")]),e._v(" "),o("p",[e._v("The following RTK-compatible devices have been tested.")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/en/gps_compass/rtk_gps_cuav_c-rtk.html"}},[e._v("CUAV C-RTK GPS")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/en/gps_compass/rtk_gps_drotek_xl.html"}},[e._v("Drotek XL RTK GPS")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/en/gps_compass/rtk_gps_fem_mini2.html"}},[e._v("Femtones MINI2 Receiver")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/en/gps_compass/rtk_gps_freefly.html"}},[e._v("Freefly RTK GPS")]),e._v(" (F9P)")],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/en/gps_compass/rtk_gps_hex_hereplus.html"}},[e._v("Here+ RTK GPS")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/en/gps_compass/rtk_gps_holybro_h-rtk-f9p.html"}},[e._v("Holybro H-RTK F9P GNSS")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/en/gps_compass/rtk_gps_holybro_h-rtk-m8p.html"}},[e._v("Holybro H-RTK M8P GNSS")])],1),e._v(" "),o("li",[o("a",{attrs:{href:"https://www.sparkfun.com/products/15136",target:"_blank",rel:"noopener noreferrer"}},[e._v("SparkFun GPS-RTK2 Board - ZED-F9P"),o("OutboundLink")],1),e._v(" (www.sparkfun.com)")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://store-drotek.com/911-1010-sirius-rtk-gnss-rover-f9p.html#/158-sensor-no_magnetometer",target:"_blank",rel:"noopener noreferrer"}},[e._v("SIRIUS RTK GNSS ROVER (F9P)"),o("OutboundLink")],1),e._v(" (store-drotek.com)")]),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/en/gps_compass/rtk_gps_trimble_mb_two.html"}},[e._v("Trimble MB-Two")])],1)]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Note")]),e._v(" Some RTK modules can only be used in a particular role (base or rover), while others can be used interchangeably.")])]),e._v(" "),o("h2",{attrs:{id:"hardware-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hardware-setup"}},[e._v("#")]),e._v(" Hardware setup")]),e._v(" "),o("h3",{attrs:{id:"rover-rtk-module-vehicle"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rover-rtk-module-vehicle"}},[e._v("#")]),e._v(" Rover RTK Module (Vehicle)")]),e._v(" "),o("p",[e._v("Connect the vehicle-based module to the flight controller's GPS port (in the same way as any other GPS module).")]),e._v(" "),o("p",[e._v("The actual cables/connectors required will depend on the flight controller and selected RTK module (see "),o("a",{attrs:{href:"#supported-rtk-devices"}},[e._v("documentation for the selected device")]),e._v(" for more information).")]),e._v(" "),o("h3",{attrs:{id:"base-rtk-module-ground"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#base-rtk-module-ground"}},[e._v("#")]),e._v(" Base RTK Module (Ground)")]),e._v(" "),o("p",[e._v("Connect the base module to "),o("em",[e._v("QGroundControl")]),e._v(" via USB.\nThe base module must not be moved while it is being used.")]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Tip")]),e._v(" Choose a position where it won't need to be moved, has a clear view of the sky, and is well separated from any buildings.\nOften it is helpful to elevate the base GPS, by using a tripod or mounting it on a roof.")])]),e._v(" "),o("h3",{attrs:{id:"telemetry-radio-wifi"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#telemetry-radio-wifi"}},[e._v("#")]),e._v(" Telemetry Radio/WiFi")]),e._v(" "),o("p",[e._v("The vehicle and ground control laptop must be connected via "),o("RouterLink",{attrs:{to:"/en/telemetry/"}},[e._v("wifi or a radio telemetry link")]),e._v(".")],1),e._v(" "),o("p",[e._v("The link "),o("em",[e._v("must")]),e._v(" use the MAVLink2 protocol as it makes more efficient use of the channel.\nThis should be set by default, but if not, follow the "),o("a",{attrs:{href:"#mavlink2"}},[e._v("MAVLink2 configuration instructions")]),e._v(" below.")]),e._v(" "),o("h2",{attrs:{id:"rtk-connection-process"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rtk-connection-process"}},[e._v("#")]),e._v(" RTK Connection Process")]),e._v(" "),o("p",[e._v("The RTK GPS connection is essentially plug and play:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Start "),o("em",[e._v("QGroundControl")]),e._v(" and attach the base RTK GPS via USB to the ground station. The device is recognized automatically.")])]),e._v(" "),o("li",[o("p",[e._v("Start the vehicle and make sure it is connected to "),o("em",[e._v("QGroundControl")]),e._v(".")]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Tip")]),e._v(" An RTK GPS status icon is displayed in the top icon bar while an RTK GPS device is connected (in addition to the normal GPS status icon).\nThe icon is red while RTK is being set up, and then changes to white once RTK GPS is active.\nYou can click the icon to see the current state and RTK accuracy.")])])]),e._v(" "),o("li",[o("p",[o("em",[e._v("QGroundControl")]),e._v(' then starts the RTK setup process (known as "Survey-In").')]),e._v(" "),o("p",[e._v("Survey-In is a startup procedure to get an accurate position estimate of the base station.\nThe process typically takes several minutes (it ends after reaching the minimum time and accuracy specified in the "),o("a",{attrs:{href:"#rtk-gps-settings"}},[e._v("RTK settings")]),e._v(").")]),e._v(" "),o("p",[e._v("You can track the progress by clicking the RTK GPS status icon.")]),e._v(" "),o("img",{attrs:{src:r(645),width:"200px",title:"survey-in"}})]),e._v(" "),o("li",[o("p",[e._v("Once Survey-in completes:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("The RTK GPS icon changes to white and "),o("em",[e._v("QGroundControl")]),e._v(" starts to stream position data to the vehicle:")]),e._v(" "),o("img",{attrs:{src:r(646),width:"200px",title:"RTK streaming"}})]),e._v(" "),o("li",[o("p",[e._v("Vehicle GPS switches to RTK mode.\nThe new mode is displayed in the "),o("em",[e._v("normal")]),e._v(" GPS status icon ("),o("code",[e._v("3D RTK GPS Lock")]),e._v("):")]),e._v(" "),o("p",[o("img",{attrs:{src:r(647),alt:"RTK GPS Status"}})])])])])]),e._v(" "),o("h2",{attrs:{id:"optional-px4-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#optional-px4-configuration"}},[e._v("#")]),e._v(" Optional PX4 Configuration")]),e._v(" "),o("p",[e._v("The following settings may need to be changed (using "),o("em",[e._v("QGroundControl")]),e._v(").")]),e._v(" "),o("h3",{attrs:{id:"rtk-gps-settings"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rtk-gps-settings"}},[e._v("#")]),e._v(" RTK GPS settings")]),e._v(" "),o("p",[e._v("The RTK GPS settings are specified in the "),o("em",[e._v("QGroundControl")]),e._v(" "),o("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SettingsView/General.html#rtk_gps",target:"_blank",rel:"noopener noreferrer"}},[e._v("General Settings"),o("OutboundLink")],1),e._v(" ("),o("strong",[e._v("SettingsView > General Settings > RTK GPS")]),e._v(").")]),e._v(" "),o("p",[o("img",{attrs:{src:r(648),alt:"RTK GPS Setup"}})]),e._v(" "),o("p",[e._v('These settings define the minimum duration and minimum accuracy for completing the RTK GPS setup process (known as "Survey-In).')]),e._v(" "),o("p",[o("span")]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Tip")]),e._v(" You can save and reuse a base position in order to save time: perform Survey-In once, select "),o("em",[e._v("Use Specified Base Position")]),e._v(" and press "),o("strong",[e._v("Save Current Base Position")]),e._v(" to copy in the values for the last survey.\nThe values will then persist across QGC reboots until they are changed.")])]),e._v(" "),o("h3",{attrs:{id:"mavlink2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#mavlink2"}},[e._v("#")]),e._v(" MAVLink2")]),e._v(" "),o("p",[e._v("The MAVLink2 protocol must be used because it makes more efficient use of lower-bandwidth channels.\nThis should be enabled by default on recent builds.")]),e._v(" "),o("p",[e._v("To ensure MAVLink2 is used:")]),e._v(" "),o("ul",[o("li",[e._v("Update the telemetry module firmware to the latest version (see "),o("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/Firmware.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("QGroundControl > Setup > Firmware"),o("OutboundLink")],1),e._v(").")]),e._v(" "),o("li",[e._v("Set "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MAV_PROTO_VER"}},[e._v("MAV_PROTO_VER")]),e._v(" to 2 (see "),o("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/Parameters.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("QGroundControl Setup > Parameters"),o("OutboundLink")],1),e._v(")")],1)]),e._v(" "),o("h3",{attrs:{id:"tuning"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#tuning"}},[e._v("#")]),e._v(" Tuning")]),e._v(" "),o("p",[e._v("You may also need to tune some parameters as the default parameters are tuned assuming a GPS accuracy in the order of meters, not centimeters.\nFor example, you can decrease "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_GPS_V_NOISE"}},[e._v("EKF2_GPS_V_NOISE")]),e._v(" and "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_GPS_P_NOISE"}},[e._v("EKF2_GPS_P_NOISE")]),e._v(" to 0.2.")],1),e._v(" "),o("h3",{attrs:{id:"use-rtk-gps-for-yaw"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#use-rtk-gps-for-yaw"}},[e._v("#")]),e._v(" Use RTK GPS for Yaw")]),e._v(" "),o("p",[e._v("Some RTK GPS units (i.e. with multiple antennas) can output a yaw angle, which can be used instead of the heading from the magnetic compass.\nTo enable this, set bit position 7 in "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_AID_MASK"}},[e._v("EKF2_AID_MASK")]),e._v(" to 1 (add 128 to the parameter value).")],1),e._v(" "),o("h3",{attrs:{id:"dual-receivers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dual-receivers"}},[e._v("#")]),e._v(" Dual Receivers")]),e._v(" "),o("p",[e._v("A second GPS receiver can be used as a backup (either RTK or non RTK).\nSee the "),o("RouterLink",{attrs:{to:"/en/advanced_config/tuning_the_ecl_ekf.html#gps"}},[e._v("EKF2 GPS Configuration")]),e._v(" section.")],1),e._v(" "),o("h2",{attrs:{id:"vehicle-setup-example"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#vehicle-setup-example"}},[e._v("#")]),e._v(" Vehicle Setup Example")]),e._v(" "),o("p",[e._v("The airframe build topic "),o("a",{attrs:{href:"https://dev.px4.io/master/en/airframes_multicopter/dji_flamewheel_450.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("DJI Flamewheel 450 with distance sensor and RTK GPS"),o("OutboundLink")],1),e._v(" describes an airframe setup with the Here+ RTK GPS and a Pixhawk 3 Pro.")])])}),[],!1,null,null,null);t.default=a.exports},645:function(e,t,r){e.exports=r.p+"assets/img/qgc_rtk_survey-in.9a497c55.png"},646:function(e,t,r){e.exports=r.p+"assets/img/qgc_rtk_streaming.76200b22.png"},647:function(e,t,r){e.exports=r.p+"assets/img/qgc_rtk_gps_status.ac046992.png"},648:function(e,t,r){e.exports=r.p+"assets/img/settings_view_general_rtk_gps.74da8db3.jpg"}}]);