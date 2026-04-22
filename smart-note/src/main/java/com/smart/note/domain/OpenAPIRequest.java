package com.smart.note.domain;

public class OpenAPIRequest {

	private String model;
	
	private String input;
	
	private Double temperature;
	
	private Integer max_output_tokens;

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public String getInput() {
		return input;
	}

	public void setInput(String input) {
		this.input = input;
	}

	public Double getTemperature() {
		return temperature;
	}

	public void setTemperature(Double temperature) {
		this.temperature = temperature;
	}

	public Integer getMax_output_tokens() {
		return max_output_tokens;
	}

	public void setMax_output_tokens(Integer max_output_tokens) {
		this.max_output_tokens = max_output_tokens;
	}
	
	
}
