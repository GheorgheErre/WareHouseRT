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

import WareHouseRT.WareHouseRT.beans.CPU;
import WareHouseRT.WareHouseRT.service.CpuService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class CpuController {

	@Autowired
	private CpuService service;

	@PostMapping("/saveCpu")
	public void save(@RequestBody CPU cpu) {
		service.save(cpu);
	}

	@GetMapping("/findAllCpu")
	 @PreAuthorize("hasRole('ADMIN')")
	public List<CPU> findAll() {
		return service.findAll();
	}

	@GetMapping("/countCpu")
	@PreAuthorize("hasRole('ADMIN')")
	public long count() {
		return service.count();
	}
}
