package WareHouseRT.WareHouseRT.API;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import WareHouseRT.WareHouseRT.beans.Laptop;
import WareHouseRT.WareHouseRT.service.LaptopService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class LaptopController {
	
	@Autowired
	private LaptopService service;
	
	@PostMapping("/saveLaptop")
	public void save(@RequestBody Laptop  laptop) {
		service.save(laptop);
	}
}
