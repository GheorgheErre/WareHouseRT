package WareHouseRT.WareHouseRT.API;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import WareHouseRT.WareHouseRT.beans.RAM;
import WareHouseRT.WareHouseRT.service.RamService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class RamController {
	
	@Autowired
	private RamService service;
	
	@PostMapping("/saveRam")
	public void save(@RequestBody RAM ram) {
		service.save(ram);
	}

}
