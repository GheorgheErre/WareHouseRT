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

import WareHouseRT.WareHouseRT.beans.SSD;
import WareHouseRT.WareHouseRT.payload.request.HistoricRequest;
import WareHouseRT.WareHouseRT.service.HistoricDeleteService;
import WareHouseRT.WareHouseRT.service.HistoricMovementsService;
import WareHouseRT.WareHouseRT.service.SsdService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class SsdController {

	@Autowired
	private SsdService service;
	
	@Autowired
	private HistoricDeleteService deleteService;
	
	@Autowired
	private HistoricMovementsService movementsService;
	
	@PostMapping("/saveOrUpdateSsd")
	public SSD saveOrUpdate(@RequestBody  HistoricRequest historicRequest) {
		String tipoAzione="Aggiunta Prodotto";

		SSD s = service.saveOrUpdate((SSD) historicRequest.getProduct());
		historicRequest.setProduct(s);
		
		movementsService.save(historicRequest, tipoAzione);
		return s;
	}

	@PostMapping("/deleteSsd")
	public void delete(@RequestBody HistoricRequest historicRequest) {
		deleteService.save(historicRequest);
		movementsService.updateMovementsOfProduct(historicRequest);
		service.delete((SSD) historicRequest.getProduct());
	}

	@GetMapping("/findSsd")
	public Optional<SSD> findByID(@RequestBody SSD ssd) {
		return service.findByID(ssd.getId());
	}

	@GetMapping("findAllSsd")
	public List<SSD> findAll() {
		return service.findAll();
	}

	@GetMapping("/countSsd")
	public long count() {
		return service.count();
	}

	@PostMapping("/moveSsdToWarehouse")
	public void moveToWarehouse(@RequestBody HistoricRequest historicRequest){
		
		String tipoAzione="Movimento Prodotto verso Magazzino";
		movementsService.save(historicRequest, tipoAzione);
		service.saveOrUpdate((SSD) historicRequest.getProduct());
	};
	
	@PostMapping("/moveSsdFromWarehouse")
	public void moveFromWarehouse(@RequestBody HistoricRequest historicRequest){
		
		String tipoAzione="Movimento Prodotto verso Workstation";
		movementsService.save(historicRequest, tipoAzione);
		service.saveOrUpdate((SSD) historicRequest.getProduct());
	};

}
