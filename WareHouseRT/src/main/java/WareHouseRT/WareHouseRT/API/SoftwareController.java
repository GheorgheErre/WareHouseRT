package WareHouseRT.WareHouseRT.API;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import WareHouseRT.WareHouseRT.beans.Software;
import WareHouseRT.WareHouseRT.service.SoftwareService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class SoftwareController {
	@Autowired
	private SoftwareService service;

	@PostMapping("/saveOrUpdateSoftware")
	public void saveOrUpdate(@RequestBody Software software) {
		service.saveOrUpdate(software);
	}
	
	@PostMapping("/deleteSoftware")
	public void delete(@RequestBody Software software) {
		service.delete(software);
	}
	
	@GetMapping("/findSoftware")
	public Optional<Software> findByID(@RequestBody Software software ) {
		return service.findByID(software.getId());
	}

	@GetMapping("/findAllSoftware")
	public List<Software> findAll() {
		return service.findAll();
	}

	@GetMapping("/countSoftware")
	public long count() {
		return service.count();
	}

}
