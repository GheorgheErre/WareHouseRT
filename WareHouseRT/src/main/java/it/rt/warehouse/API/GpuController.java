package it.rt.warehouse.API;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import it.rt.warehouse.beans.GPU;
import it.rt.warehouse.service.GpuService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class GpuController {
	
	@Autowired
	private GpuService service;

	@PostMapping("/saveGpu")
	public void save(GPU gpu) {
		service.save(gpu);
	}

}
