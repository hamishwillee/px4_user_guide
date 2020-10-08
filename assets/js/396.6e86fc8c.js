(window.webpackJsonp=window.webpackJsonp||[]).push([[396],{1382:function(e,t,i){"use strict";i.r(t);var r=i(19),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"vtol-without-an-airspeed-sensor"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#vtol-without-an-airspeed-sensor"}},[e._v("#")]),e._v(" VTOL Without an Airspeed Sensor")]),e._v(" "),i("blockquote",[i("p",[i("strong",[e._v("Warning")]),e._v(" Warning: the use of an airspeed sensor is advised.\nSupport for VTOL's without an airspeed sensor is considered experimental\nand should only be attempted by experienced pilots.")])]),e._v(" "),i("p",[e._v("Fixed wings use airspeed sensors to determine the speed at which the airplane is moving through the air.\nDepending on wind this could vary from groundspeed.\nEvery airplane has a minimum airspeed below which the airplane will stall.\nIn mild weather conditions and with settings significantly above stall speed a VTOL can operate without the use of an airspeed sensor.\nThe settings should also be applicable to non-VTOL fixed wings but this is currently untested.")]),e._v(" "),i("p",[e._v("This guide will outline the parameter settings required to bypass the airspeed sensor for VTOL planes.")]),e._v(" "),i("h2",{attrs:{id:"preparation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#preparation"}},[e._v("#")]),e._v(" Preparation")]),e._v(" "),i("p",[e._v("Before attempting to eliminate an airspeed sensor you should first determine a safe throttle level.\nAlso the duration for a front transition needs to be known.\nTo do this you can either perform a reference flight with an airspeed sensor or fly the vehicle manually.\nIn both cases the reference flight should be performed in very low wind conditions.")]),e._v(" "),i("p",[e._v("The flight should be performed at a speed that would be sufficient to fly in high wind conditions and should consist of:")]),e._v(" "),i("ul",[i("li",[e._v("Successful front transition")]),e._v(" "),i("li",[e._v("A straight and level flight")]),e._v(" "),i("li",[e._v("An aggressive turn")]),e._v(" "),i("li",[e._v("A quick ascend to a higher altitude")])]),e._v(" "),i("h2",{attrs:{id:"examining-the-log"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#examining-the-log"}},[e._v("#")]),e._v(" Examining the Log")]),e._v(" "),i("p",[e._v("After the reference flight download the log and use "),i("RouterLink",{attrs:{to:"/en/log/flight_log_analysis.html#flightplot"}},[e._v("FlightPlot")]),e._v(" (or another analysis tool) to examine the log.\nPlot the altitude ("),i("code",[e._v("GPOS.Alt")]),e._v("), thrust ("),i("code",[e._v("ATC1.Thrust")]),e._v("), groundspeed (Expression: "),i("code",[e._v("sqrt(GPS.VelN\\^2 + GPS.VelE\\^2)")]),e._v("), pitch ("),i("code",[e._v("ATT.Pitch")]),e._v(") and roll ("),i("code",[e._v("AT.Roll")]),e._v(").")],1),e._v(" "),i("p",[e._v("Examine the throttle level (thrust) when the vehicle is level (no or little pitch and roll),\nduring the ascend (increasing altitude) and when the vehicle is banking (more roll).\nThe initial value to use as cruise speed should be the highest thrust applied during a roll or ascend,\nthe thrust during level flight should be considered the minimum value if you decide to further tune down your speed.")]),e._v(" "),i("p",[e._v("Also take note of the time it took for a front transition to complete.\nThis will be used to set the minimum transition time. For safety reasons you should add +- 30% to this time.")]),e._v(" "),i("p",[e._v("Finally take note of the groundspeed during cruise flight.\nThis can be used to tune your throttle setting after the first flight without an airspeed sensor.")]),e._v(" "),i("h2",{attrs:{id:"setting-the-parameters"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#setting-the-parameters"}},[e._v("#")]),e._v(" Setting the Parameters")]),e._v(" "),i("p",[e._v("To bypass the flight checks you need to set the circuit breaker for the airspeed sensor ("),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#CBRK_AIRSPD_CHK"}},[e._v("CBRK_AIRSPD_CHK")]),e._v(") to 162128.")],1),e._v(" "),i("blockquote",[i("p",[i("strong",[e._v("Note")]),e._v(" Enabling "),i("code",[e._v("CBRK_AIRSPD_CHK")]),e._v(" will prevent the sensor driver from starting and prevent calibrarion (i.e. it does more than just bypassing flight checks).")])]),e._v(" "),i("p",[e._v("To tell the flight controller that it is fling without an airspeed sensor you need to set the airspeed mode to 'Airspeed disabled' ("),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_ARSP_MODE"}},[e._v("FW_ARSP_MODE=1")]),e._v(").")],1),e._v(" "),i("p",[e._v("Set the cruise throttle ("),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_THR_CRUISE"}},[e._v("FW_THR_CRUISE")]),e._v(") to the percentage as determined from the log of the reference flight.\nNote that QGC scales this from 1..100 and the thrust value from the log is scaled from 0..1.\nSo a thrust of 0.65 should be entered as 65.\nFor safety reasons it is recommended to add +- 10% throttle to the determined value for testing a first flight.")],1),e._v(" "),i("p",[e._v("Set the minimum front transition time ("),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#VT_TRANS_MIN_TM"}},[e._v("VT_TRANS_MIN_TM")]),e._v(") to the number of seconds determined from the reference flight and add +- 30% for safety.")],1),e._v(" "),i("h3",{attrs:{id:"optional-recommended-parameters"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#optional-recommended-parameters"}},[e._v("#")]),e._v(" Optional Recommended Parameters")]),e._v(" "),i("p",[e._v("Because the risk of stalling is real, it is recommended to set the 'fixed wing minimum altitude' aka 'QuadChute' ("),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#VT_FW_MIN_ALT"}},[e._v("VT_FW_MIN_ALT")]),e._v(").\nThis will cause the VTOL to transition back to multicopter mode and initiate the "),i("RouterLink",{attrs:{to:"/en/flight_modes/return.html"}},[e._v("Return mode")]),e._v(" below a certain altitude.\nYou could set this to 15 or 20 meters to give the multicopter time to recover from a stall.")],1),e._v(" "),i("p",[e._v("The position estimator tested for this mode is EKF2, you can set this by changing the "),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SYS_MC_EST_GROUP"}},[e._v("SYS_MC_EST_GROUP")]),e._v(".")],1),e._v(" "),i("h2",{attrs:{id:"first-flight-without-airspeed-sensor"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#first-flight-without-airspeed-sensor"}},[e._v("#")]),e._v(" First Flight Without Airspeed Sensor")]),e._v(" "),i("p",[e._v("The values apply to a position controlled flight (like "),i("RouterLink",{attrs:{to:"/en/flight_modes/hold.html"}},[e._v("Hold mode")]),e._v(" or "),i("RouterLink",{attrs:{to:"/en/flight_modes/mission.html"}},[e._v("Mission mode")]),e._v(" or Mission mode).\nIt is therefor recommended that a mission is configured at a safe altitude, approximately 10m above the QuadChute threshold.\nLike for the reference flight, this flight should be performed in very low wind conditions.\nFor the first flight the following is recommended:")],1),e._v(" "),i("ul",[i("li",[e._v("Stay at one altitude")]),e._v(" "),i("li",[e._v("Set the waypoints wide enough and in such a fashion that no sharp turns are required")]),e._v(" "),i("li",[e._v("Keep the mission small enough that it remains in sight should a manual override be required.")]),e._v(" "),i("li",[e._v("If the airspeed is very high, consider performing a manual back transition by switching to Altitude mode.")])]),e._v(" "),i("p",[e._v("If the mission finished successfully you should proceed to examine the log for the following:")]),e._v(" "),i("ul",[i("li",[e._v("The groundspeed should be considerably above the groundspeed from the reference flight.")]),e._v(" "),i("li",[e._v("The altitude should not have been significantly lower than the reference flight.")]),e._v(" "),i("li",[e._v("The pitch angle should not have consistently been different from the reference flight.")])]),e._v(" "),i("p",[e._v("If all these conditions have been met you can start to tune down the cruise throttle in small steps until the groundspeed matches that of the reference flight.")]),e._v(" "),i("h2",{attrs:{id:"quick-overview-of-relevant-parameters"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#quick-overview-of-relevant-parameters"}},[e._v("#")]),e._v(" QUICK OVERVIEW OF RELEVANT PARAMETERS")]),e._v(" "),i("ul",[i("li",[i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_ARSP_MODE"}},[e._v("FW_ARSP_MODE")]),e._v(": Declare invalid (2)")],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#CBRK_AIRSPD_CHK"}},[e._v("CBRK_AIRSPD_CHK")]),e._v(": 162128")],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SYS_MC_EST_GROUP"}},[e._v("SYS_MC_EST_GROUP")]),e._v(": EKF2 (2)")],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_THR_CRUISE"}},[e._v("FW_THR_CRUISE")]),e._v(": determined (e.g. 70%)")],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#VT_TRANS_MIN_TM"}},[e._v("VT_TRANS_MIN_TM")]),e._v(": determined (e.g. 10 seconds)")],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#VT_FW_MIN_ALT"}},[e._v("VT_FW_MIN_ALT")]),e._v(": 15")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);