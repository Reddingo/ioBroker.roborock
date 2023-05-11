"use strict";

// Roborock S4 Max

const {roborock_vacuum_s4} = require("./roborock_vacuum_s4");

class roborock_vacuum_a19 extends roborock_vacuum_s4 {
        constructor(adapter) {
                super();
                this.adapter = adapter;
                
                this.states.carpet_clean_mode = {
			'{"carpet_clean_mode": 0}': "Avoid",
			'{"carpet_clean_mode": 1}': "Rise",
			'{"carpet_clean_mode": 2}': "Ignore"
		};
                this.states.carpet_mode = {
			'[{"enable":0, "stall_time": 10, "current_low": 400, "current_high": 500, "current_integral": 450}]': "off",
			'[{"enable":1, "stall_time": 10, "current_low": 400, "current_high": 500, "current_integral": 450}]': "on"
		};
                this.states.water_box_custom_mode = {
			"200": "Off",
			"201": "Mild",
			"202": "Moderate",
			"203": "Intense"
		};
                this.setup.deviceStatus.water_box_status = {
			"name": "Water Box Status",
			"type": "number",
			"write": false
		};
        }
}

module.exports = {
        roborock_vacuum_a19: roborock_vacuum_a19,
        extended_robot: roborock_vacuum_a19
};
