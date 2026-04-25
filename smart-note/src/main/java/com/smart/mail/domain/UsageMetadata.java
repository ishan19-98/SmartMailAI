package com.smart.mail.domain;

import java.util.List;

public class UsageMetadata {

	private Integer promptTokenCount;
	
	private Integer candidatesTokenCount;
	
	private Integer totalTokenCount;
	
	private List<PromptTokensDetails> promptTokensDetails;
	
	private Integer thoughtsTokenCount;

	public Integer getPromptTokenCount() {
		return promptTokenCount;
	}

	public void setPromptTokenCount(Integer promptTokenCount) {
		this.promptTokenCount = promptTokenCount;
	}

	public Integer getCandidatesTokenCount() {
		return candidatesTokenCount;
	}

	public void setCandidatesTokenCount(Integer candidatesTokenCount) {
		this.candidatesTokenCount = candidatesTokenCount;
	}

	public Integer getTotalTokenCount() {
		return totalTokenCount;
	}

	public void setTotalTokenCount(Integer totalTokenCount) {
		this.totalTokenCount = totalTokenCount;
	}

	public List<PromptTokensDetails> getPromptTokensDetails() {
		return promptTokensDetails;
	}

	public void setPromptTokensDetails(List<PromptTokensDetails> promptTokensDetails) {
		this.promptTokensDetails = promptTokensDetails;
	}

	public Integer getThoughtsTokenCount() {
		return thoughtsTokenCount;
	}

	public void setThoughtsTokenCount(Integer thoughtsTokenCount) {
		this.thoughtsTokenCount = thoughtsTokenCount;
	}
	
	

}
