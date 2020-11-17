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

import WareHouseRT.WareHouseRT.beans.OperativeSystem;
import WareHouseRT.WareHouseRT.payload.request.HistoricRequest;
import WareHouseRT.WareHouseRT.service.HistoricDeleteService;
import WareHouseRT.WareHouseRT.service.HistoricMovementsService;
import WareHouseRT.WareHouseRT.service.OperativeSystemService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class OperativeSystemController {
	
	@Autowired
	private OperativeSystemService service;
	
	@Autowired
	private HistoricDeleteService deleteService;
	
	@Autowired
	private HistoricMovementsService movementsService;
	
	@PostMapping("/saveOrUpdateOperativeSystem")
	public OperativeSystem saveOrUpdate(@RequestBody HistoricRequest historicRequest) {
		String tipoAzione="Aggiunta Prodotto";
		
		OperativeSystem o = service.saveOrUpdate((OperativeSystem) historicRequest.getProduct());
		historicRequest.setProduct(o);
		
		movementsService.save(historicRequest, tipoAzione);
		return o;
	}
	
	@PostMapping("/deleteOperativeSystem")
	public void delete(@RequestBody HistoricRequest historicRequest) {
		deleteService.save(historicRequest);
		movementsService.updateMovementsOfProduct(historicRequest);
		service.delete((OperativeSystem) historicRequest.getProduct());
	}
	
	@GetMapping("/findOperativeSystem")
	public Optional<OperativeSystem> findByID(@RequestBody OperativeSystem operativeSystem ) {
		return service.findByID(operativeSystem.getId());
	}

	@GetMapping("/findAllOperativeSystem")
	public List<OperativeSystem> findAll() {
		return service.findAll();
	}

	@GetMapping("/countOperativeSystem")
	public long count() {
		return service.count();
	}
	
	@PostMapping("/moveOperativeSystemToWarehouse")
	public void moveToWarehouse(@RequestBody HistoricRequest historicRequest){
		
		String tipoAzione="Movimento Prodotto verso Magazzino";
		movementsService.save(historicRequest, tipoAzione);
		service.saveOrUpdate((OperativeSystem) historicRequest.getProduct());
	};
	
	@PostMapping("/moveOperativeSystemFromWarehouse")
	public void moveFromWarehouse(@RequestBody HistoricRequest historicRequest){
		
		String tipoAzione="Movimento Prodotto verso Workstation";
		movementsService.save(historicRequest, tipoAzione);
		service.saveOrUpdate((OperativeSystem) historicRequest.getProduct());
	};
}
