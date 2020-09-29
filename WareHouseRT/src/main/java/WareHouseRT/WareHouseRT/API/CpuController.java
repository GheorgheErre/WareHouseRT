package WareHouseRT.WareHouseRT.API;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import WareHouseRT.WareHouseRT.beans.CPU;
import WareHouseRT.WareHouseRT.service.CpuService;

@RestController
public class CpuController {

	@Autowired(required =false )
	private CpuService service;
	
	@PostMapping("/saveCpu")
	public void save(CPU cpu) {
		service.save(cpu);
	}
	
	@RequestMapping("/prova")
	public void prova() {
		System.out.println("ciao");
	}
	
}
