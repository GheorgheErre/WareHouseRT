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
import WareHouseRT.WareHouseRT.beans.PowerSupplie;
import WareHouseRT.WareHouseRT.payload.request.HistoricRequest;
import WareHouseRT.WareHouseRT.service.HistoricDeleteService;
import WareHouseRT.WareHouseRT.service.HistoricMovementsService;
import WareHouseRT.WareHouseRT.service.PowerSupplieService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class PowerSupplieController {

	@Autowired
	private PowerSupplieService service;
	
	@Autowired
	private HistoricDeleteService deleteService;

	@Autowired
	private HistoricMovementsService movementsService;
	
	@PostMapping("/saveOrUpdatePowerSupplie")
	public void saveOrUpdate(@RequestBody HistoricRequest historicRequest) {
		String tipoAzione="Aggiunta Prodotto";
		movementsService.save(historicRequest, tipoAzione);
		service.saveOrUpdate((PowerSupplie) historicRequest.getProduct());
	}
	
	@PostMapping("/deletePowerSupplie")
	public void delete(@RequestBody HistoricRequest historicRequest) {
		deleteService.save(historicRequest);
		movementsService.updateMovementsOfProduct(historicRequest);
		service.delete((PowerSupplie) historicRequest.getProduct());
	}
	
	@GetMapping("/findPowerSupplie")
	public Optional<PowerSupplie> findByID(@RequestBody PowerSupplie powerSupplie ) {
		return service.findByID(powerSupplie.getId());
	}

	@GetMapping("/findAllPowerSupplie")
	public List<PowerSupplie> findAll() {
		return service.findAll();
	}

	@GetMapping("/countPowerSupplie")
	public long count() {
		return service.count();
	}
	
	@PostMapping("/movePowerSupplieToWarehouse")
	public void moveToWarehouse(@RequestBody HistoricRequest historicRequest){
		
		String tipoAzione="Movimento Prodotto verso Magazzino";
		movementsService.save(historicRequest, tipoAzione);
		service.saveOrUpdate((PowerSupplie) historicRequest.getProduct());
	};
	
	@PostMapping("/movePowerSupplieFromWarehouse")
	public void moveFromWarehouse(@RequestBody HistoricRequest historicRequest){
		
		String tipoAzione="Movimento Prodotto verso Workstation";
		movementsService.save(historicRequest, tipoAzione);
		service.saveOrUpdate((PowerSupplie) historicRequest.getProduct());
	};

}
