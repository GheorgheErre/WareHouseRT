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

import WareHouseRT.WareHouseRT.beans.RAM;
import WareHouseRT.WareHouseRT.payload.request.HistoricRequest;
import WareHouseRT.WareHouseRT.service.HistoricDeleteService;
import WareHouseRT.WareHouseRT.service.HistoricMovementsService;
import WareHouseRT.WareHouseRT.service.RamService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class RamController {

	@Autowired
	private RamService service;
	
	@Autowired
	private HistoricDeleteService deleteService;

	@Autowired
	private HistoricMovementsService movementsService;
	
	@PostMapping("/saveOrUpdateRam")
	public RAM saveOrUpdate(@RequestBody HistoricRequest historicRequest) {
		String tipoAzione="Aggiunta Prodotto";
	
		RAM r = service.saveOrUpdate((RAM) historicRequest.getProduct());
		historicRequest.setProduct(r);
		
		movementsService.save(historicRequest, tipoAzione);
		return r;
	}
	
	@PostMapping("/deleteRam")
	public void delete(@RequestBody HistoricRequest historicRequest) {
		deleteService.save(historicRequest);
		service.delete((RAM) historicRequest.getProduct());
	}
	
	@GetMapping("/findRam")
	public Optional<RAM> findByID(@RequestBody RAM ram ) {
		return service.findByID(ram.getId());
	}

	@GetMapping("findAllRam")
	public List<RAM> findAll() {
		return service.findAll();
	}

	@GetMapping("/countRam")
	public long count() {
		return service.count();
	}
	
	@PostMapping("/moveRamToWarehouse")
	public void moveToWarehouse(@RequestBody HistoricRequest historicRequest){
		
		String tipoAzione="Movimento Prodotto verso Magazzino";
		movementsService.save(historicRequest, tipoAzione);
		service.saveOrUpdate((RAM) historicRequest.getProduct());
	};
	
	@PostMapping("/moveRamFromWarehouse")
	public void moveFromWarehouse(@RequestBody HistoricRequest historicRequest){
		
		String tipoAzione="Movimento Prodotto verso Workstation";
		movementsService.save(historicRequest, tipoAzione);
		service.saveOrUpdate((RAM) historicRequest.getProduct());
	};
	
}
