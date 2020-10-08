(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{1310:function(t,e,n){"use strict";n.r(e);var a=n(19),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"esc-calibration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#esc-calibration"}},[t._v("#")]),t._v(" ESC Calibration")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Note")]),t._v(" These instructions are only relevant to "),a("RouterLink",{attrs:{to:"/en/peripherals/pwm_escs_and_servo.html"}},[t._v("PWM ESCs")]),t._v(".")],1)]),t._v(" "),a("p",[t._v("Electronic Speed Controllers (ESCs) regulate motor speed (and direction) based on the PWM input value from the flight controller (FC).\nThe range of inputs to which an ESC will respond is configurable, and the default range can differ even between ESCs of the same model.")]),t._v(" "),a("p",[t._v("This calibration updates all the ESCs with the maximum and minimum PWM input values that will be supplied by the flight controller.\nSubsequently all the ESCs/motors will respond to flight controller input in the same way (across the whole input range).")]),t._v(" "),a("p",[t._v("Calibration is recommended for all ESCs, and in particular for low cost models.")]),t._v(" "),a("h2",{attrs:{id:"preconditions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preconditions"}},[t._v("#")]),t._v(" Preconditions")]),t._v(" "),a("p",[t._v("The system must include a power module (PX4 uses the measured voltage to determine whether or not a battery is connected).")]),t._v(" "),a("h2",{attrs:{id:"steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#steps"}},[t._v("#")]),t._v(" Steps")]),t._v(" "),a("p",[t._v("To calibrate the ESCs:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Remove the propellers.")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Warning")]),t._v(" Never attempt ESC calibration with props on.")]),t._v(" "),a("p",[t._v("The motors should not spin during ESC calibration.\nHowever if an ESC doesn't properly support/detect the calibration sequence then it will respond to the PWM input by running the motor at maximum speed.")])])]),t._v(" "),a("li",[a("p",[t._v("Disconnect the battery and connect the flight controller via USB (only).")])]),t._v(" "),a("li",[a("p",[t._v("Open the "),a("em",[t._v("QGroundControl")]),t._v(" "),a("strong",[t._v("Settings > Power")]),t._v(", then press the "),a("strong",[t._v("Calibrate")]),t._v(" button.")]),t._v(" "),a("p",[a("img",{attrs:{src:n(332),alt:"ESC Calibration step 1"}})])]),t._v(" "),a("li",[a("p",[t._v("Connect the battery when prompted:")]),t._v(" "),a("p",[a("img",{attrs:{src:n(416),alt:"ESC Calibration step 2"}})]),t._v(" "),a("p",[t._v("The calibration will begin automatically:")]),t._v(" "),a("p",[a("img",{attrs:{src:n(417),alt:"ESC Calibration step 3"}})])]),t._v(" "),a("li",[a("p",[t._v("Once the calibration complete you will be prompted to disconnect the battery.")]),t._v(" "),a("p",[a("img",{attrs:{src:n(418),alt:"ESC Calibration step 4"}})])])]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Note")]),t._v(" High-quality controllers come with a factory calibration.\nIn "),a("em",[t._v("theory")]),t._v(" this means that they can be configured by just setting the "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#PWM_MIN"}},[t._v("PWM_MIN")]),t._v(" and "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#PWM_MAX"}},[t._v("PWM_MAX")]),t._v(" parameters to the values provided in the ESC technical specification.\nIn practice the input range may differ even on high quality controllers, which is why calibration is recommended.")],1)])])}),[],!1,null,null,null);e.default=o.exports},332:function(t,e,n){t.exports=n.p+"assets/img/qgc_esc_calibration.efb64b91.png"},416:function(t,e,n){t.exports=n.p+"assets/img/esc_calibration_step_2.a4748456.png"},417:function(t,e,n){t.exports=n.p+"assets/img/esc_calibration_step_3.f0838782.png"},418:function(t,e,n){t.exports=n.p+"assets/img/esc_calibration_step_4.21cea0f6.png"}}]);