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

import WareHouseRT.WareHouseRT.beans.GPU;
import WareHouseRT.WareHouseRT.service.GpuService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class GpuController {

	@Autowired
	private GpuService service;

	@PostMapping("/saveOrUpdateGpu")
	public void saveOrUpdate(@RequestBody GPU gpu) {
		service.saveOrUpdate(gpu);
	}

	@PostMapping("/deleteGpu")
	public void delete(@RequestBody GPU gpu) {
		service.delete(gpu);
	}

	@GetMapping("/findGpu")
	public Optional<GPU> findByID(@RequestBody GPU gpu) {
		return service.findByID(gpu.getId());
	}

	@GetMapping("/findAllGpu")
	public List<GPU> findAll() {
		return service.findAll();
	}

	@GetMapping("/countGpu")
	public long count() {
		return service.count();
	}
}
