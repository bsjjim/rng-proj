package com.lotterental.rng.demo.example.controller;

import java.net.URLDecoder;
import java.util.List;
import java.util.Map;

import com.lotterental.rng.demo.example.service.NexacroMapService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RestApiController {
	
	@Autowired
	private NexacroMapService nexacroMapService;
	
	@SuppressWarnings("deprecation")
	@GetMapping("getrestsample")
	public List<Map<String, Object>> getrestsample(@RequestParam Map<String, Object> map) throws Exception {
		map.put("modNm", URLDecoder.decode((String) map.get("modNm")));
		return nexacroMapService.selectNexacroMapList(map);
	}

	@PostMapping("postrestsample")
	public List<Map<String, Object>> postRestSample(@RequestBody Map<String, Object> map) throws Exception {
		return nexacroMapService.selectNexacroMapList(map);
	}


}
