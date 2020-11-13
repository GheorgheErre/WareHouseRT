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

import WareHouseRT.WareHouseRT.beans.Cable;
import WareHouseRT.WareHouseRT.beans.DockingStation;
import WareHouseRT.WareHouseRT.beans.GPU;
import WareHouseRT.WareHouseRT.payload.request.HistoricRequest;
import WareHouseRT.WareHouseRT.service.GpuService;
import WareHouseRT.WareHouseRT.service.HistoricDeleteService;
import WareHouseRT.WareHouseRT.service.HistoricMovementsService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class GpuController {

	@Autowired
	private GpuService service;

	@Autowired
	private HistoricDeleteService deleteService;
	
	@Autowired
	private HistoricMovementsService movementsService;
	
	@PostMapping("/saveOrUpdateGpu")
	public void saveOrUpdate(@RequestBody HistoricRequest historicRequest) {
		String tipoAzione = "Aggiunta Prodotto";
		movementsService.save(historicRequest, tipoAzione);
		service.saveOrUpdate((GPU) historicRequest.getProduct());
	}

	@PostMapping("/deleteGpu")
	public void delete(@RequestBody HistoricRequest historicRequest) {
	
		deleteService.save(historicRequest);
		movementsService.updateMovementsOfProduct(historicRequest);
		service.delete((GPU) historicRequest.getProduct());
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
	

	@PostMapping("/moveCableToWarehouse")
	public void moveToWarehouse(@RequestBody HistoricRequest historicRequest){
		
		String tipoAzione="Movimento Prodotto verso Magazzino";
		movementsService.save(historicRequest, tipoAzione);
		service.saveOrUpdate((GPU) historicRequest.getProduct());
	};
	
	@PostMapping("/moveCableFromWarehouse")
	public void moveFromWarehouse(@RequestBody HistoricRequest historicRequest){
		
		String tipoAzione="Movimento Prodotto verso Workstation";
		movementsService.save(historicRequest, tipoAzione);
		service.saveOrUpdate((GPU) historicRequest.getProduct());
	};
}
