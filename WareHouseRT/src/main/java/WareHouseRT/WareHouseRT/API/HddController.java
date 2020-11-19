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

import WareHouseRT.WareHouseRT.beans.HDD;
import WareHouseRT.WareHouseRT.payload.request.HistoricRequest;
import WareHouseRT.WareHouseRT.service.HDDService;
import WareHouseRT.WareHouseRT.service.HistoricDeleteService;
import WareHouseRT.WareHouseRT.service.HistoricMovementsService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class HddController {

	@Autowired
	private HDDService service;
	
	@Autowired
	private HistoricDeleteService deleteService;
	
	@Autowired
	private HistoricMovementsService movementsService;
	
	@PostMapping("/saveOrUpdateHdd")
	public HDD saveOrUpdate(@RequestBody HistoricRequest historicRequest) {
		return service.saveOrUpdate((HDD) historicRequest.getProduct(), historicRequest.getNote());
	}
	
	@PostMapping("/deleteHdd")
	public void delete(@RequestBody HistoricRequest historicRequest) {
		deleteService.save(historicRequest);
		service.delete((HDD) historicRequest.getProduct());
	}
	
	@GetMapping("/findHdd")
	public Optional<HDD> findByID(@RequestBody HDD hdd ) {
		return service.findByID(hdd.getId());
	}
	
	@GetMapping("/findAllHdd")
	public List<HDD> findAll() {
		return service.findAll();
	}
	
	
	@GetMapping("/countHdd")
	public long count() {
		return service.count();
	}

	@PostMapping("/moveHddToWarehouse")
	public void moveToWarehouse(@RequestBody HistoricRequest historicRequest){
		
		String tipoAzione="Movimento Prodotto verso Magazzino";
		movementsService.save(historicRequest.getProduct(), historicRequest.getNote(), tipoAzione);
		service.changeLocation((HDD) historicRequest.getProduct());
	};
	
	@PostMapping("/moveHddFromWarehouse")
	public void moveFromWarehouse(@RequestBody HistoricRequest historicRequest){
		
		String tipoAzione="Movimento Prodotto verso Workstation";
		movementsService.save(historicRequest.getProduct(), historicRequest.getNote(), tipoAzione);
		service.changeLocation((HDD) historicRequest.getProduct());
	};
}
