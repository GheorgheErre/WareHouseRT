package WareHouseRT.WareHouseRT.API;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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
	
	@PostMapping("/saveOrUpdateLaptop")
	public void saveOrUpdate(@RequestBody Laptop  laptop) {
		service.saveOrUpdate(laptop);
	}
	
	@PostMapping("/deleteLaptop")
	public void delete(@RequestBody Laptop laptop) {
		service.delete(laptop);
	}
	
	@GetMapping("/findLaptop")
	public Optional<Laptop> findByID(@RequestBody Laptop laptop ) {
		return service.findByID(laptop.getId());
	}
	
	@GetMapping("/findAllLaptop")
	public List<Laptop> findAll() {
		return service.findAll();
	}
	
	@GetMapping("/countLaptop")
	public long count() {
		return service.count();
	}


}
