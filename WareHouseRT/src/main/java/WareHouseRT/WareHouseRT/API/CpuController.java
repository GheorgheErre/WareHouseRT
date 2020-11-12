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

import WareHouseRT.WareHouseRT.beans.CPU;
import WareHouseRT.WareHouseRT.beans.DockingStation;
import WareHouseRT.WareHouseRT.payload.request.HistoricRequest;
import WareHouseRT.WareHouseRT.service.CpuService;
import WareHouseRT.WareHouseRT.service.HistoricDeleteService;
import WareHouseRT.WareHouseRT.service.HistoricMovementsService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class CpuController {

	@Autowired
	private CpuService service;

	@Autowired
	private HistoricDeleteService deleteService;
	@Autowired
	private HistoricMovementsService movementsService;

	@PostMapping("/saveOrUpdateCpu")
	public void saveOrUpdate(@RequestBody HistoricRequest historicRequest) {
	
		String tipoAzione="Aggiunta Prodotto";
		movementsService.save(historicRequest, tipoAzione);
		service.saveOrUpdate((CPU) historicRequest.getProduct());
	}
	
	@PostMapping("/deleteCpu")
	public void delete(@RequestBody HistoricRequest deleteRequest) {
		deleteService.save(deleteRequest);
		service.delete((CPU) deleteRequest.getProduct());
	}
	
	@GetMapping("/findCpu")
	public Optional<CPU> findByID(@RequestBody CPU cpu ) {
		return service.findByID(cpu.getId());
	}

	@GetMapping("/findAllCpu")
	public List<CPU> findAll() {
		return service.findAll();
	}

	@GetMapping("/countCpu")
	public long count() {
		return service.count();
	}
}
