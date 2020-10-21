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

import WareHouseRT.WareHouseRT.beans.RAM;
import WareHouseRT.WareHouseRT.service.RamService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class RamController {

	@Autowired
	private RamService service;

	@PostMapping("/saveOrUpdateRam")
	public void saveOrUpdate(@RequestBody RAM ram) {
		service.saveOrUpdate(ram);
	}
	
	@PostMapping("/deleteRam")
	public void delete(@RequestBody RAM ram) {
		service.delete(ram);
	}
	
	@GetMapping("/findRam")
	public Optional<RAM> findByID(@RequestBody RAM ram ) {
		return service.findByID(ram.getId());
	}

	@GetMapping("findAllRam")
	public List<RAM> findAll() {
		return service.findAll();
	}

	@GetMapping("/countRam")
	public long count() {
		return service.count();
	}
}
