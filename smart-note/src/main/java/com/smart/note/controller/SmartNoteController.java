package com.smart.note.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smart.note.domain.SmartNoteRequest;
import com.smart.note.service.SmartNoteService;

@RestController
@RequestMapping("note")
public class SmartNoteController {

	private SmartNoteService smartNoteService;

	public SmartNoteController(SmartNoteService smartNoteService) {
		this.smartNoteService = smartNoteService;
	}

	@PostMapping(value = "enhanced")
	public String getRefinedNotes(@RequestBody SmartNoteRequest smartNoteRequest) {
		return smartNoteService.getRefinedNoteService(smartNoteRequest);

	}

}
