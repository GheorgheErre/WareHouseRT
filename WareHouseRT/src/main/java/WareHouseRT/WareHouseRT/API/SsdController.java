package WareHouseRT.WareHouseRT.API;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import WareHouseRT.WareHouseRT.beans.SSD;
import WareHouseRT.WareHouseRT.service.SsdService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class SsdController {

	@Autowired
	private SsdService service;
	
	@PostMapping("/saveSsd")
	public void save(@RequestBody SSD ssd) {
		service.save(ssd);
	}
}
