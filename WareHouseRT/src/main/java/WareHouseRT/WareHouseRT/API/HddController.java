package WareHouseRT.WareHouseRT.API;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import WareHouseRT.WareHouseRT.beans.HDD;
import WareHouseRT.WareHouseRT.service.HDDService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class HddController {

	@Autowired
	private HDDService service;
	
	@PostMapping("/saveHdd")
	public void save(@RequestBody HDD hdd) {
		service.save(hdd);
	}
	@GetMapping("/findAllHdd")
	public List<HDD> findAll() {
		return service.findAll();
	}

}
