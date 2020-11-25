package WareHouseRT.WareHouseRT.API;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import WareHouseRT.WareHouseRT.beans.ContatoreDDT;
import WareHouseRT.WareHouseRT.service.ContatoreDDTService;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class ContatoreDDTController {
	
	@Autowired
	private ContatoreDDTService service;
	
	
	@GetMapping("/getNumeroDDT")
	public ContatoreDDT getNumeroDDT() {
		
		return service.getNumeroDDT();
	
	}
	
	
	@GetMapping("/incrementaNumeroDDT")
	public ContatoreDDT incrementaDDT() {
		
		return service.saveOrUpdate();
	
	}

}
