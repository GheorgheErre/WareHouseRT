package WareHouseRT.WareHouseRT.API;

import java.util.List;

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

	@PostMapping("/saveSoftware")
	public void save(@RequestBody Software software) {
		service.save(software);
	}

	@GetMapping("/findAllSoftware")
	 @PreAuthorize("hasRole('ADMIN')")
	public List<Software> findAll() {
		return service.findAll();
	}

	@GetMapping("/countSoftware")
	@PreAuthorize("hasRole('ADMIN')")
	public long count() {
		return service.count();
	}

}
