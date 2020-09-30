package WareHouseRT.WareHouseRT.API;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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

	@PostMapping("/saveGpu")
	public void save(@RequestBody GPU gpu) {
		service.save(gpu);
	}

}
