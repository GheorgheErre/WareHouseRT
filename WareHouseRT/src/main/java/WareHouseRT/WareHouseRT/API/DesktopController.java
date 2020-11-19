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

import WareHouseRT.WareHouseRT.beans.Desktop;
import WareHouseRT.WareHouseRT.payload.request.HistoricRequest;
import WareHouseRT.WareHouseRT.service.DesktopService;
import WareHouseRT.WareHouseRT.service.HistoricDeleteService;
import WareHouseRT.WareHouseRT.service.HistoricMovementsService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class DesktopController {

	@Autowired
	private DesktopService service;
	@Autowired
	private HistoricDeleteService deleteService;
	
	@Autowired
	private HistoricMovementsService movementsService;
	
	@PostMapping("/saveOrUpdateDesktop")
	public Desktop saveOrUpdate(@RequestBody HistoricRequest historicRequest) {
		return service.saveOrUpdate((Desktop) historicRequest.getProduct(), historicRequest.getNote());
	}
	
	@PostMapping("/deleteDesktop")
	public void delete(@RequestBody HistoricRequest historicRequest) {
		deleteService.save(historicRequest);
		service.delete((Desktop) historicRequest.getProduct());
	}
	
	@GetMapping("/findDesktop")
	public Optional<Desktop> findByID(@RequestBody Desktop desktop ) {
		return service.findByID(desktop.getId());
	}
	
	@GetMapping("/findAllDesktop")
	public List<Desktop> findAll() {
		return service.findAll();
	}
	@GetMapping("/countDesktop")
	public long count() {
		return service.count();
	}
	

	@PostMapping("/moveDesktopToWarehouse")
	public void moveToWarehouse(@RequestBody HistoricRequest historicRequest){
		
		String tipoAzione="Movimento Prodotto verso Magazzino";
		movementsService.save(historicRequest.getProduct(), historicRequest.getNote(), tipoAzione);
		service.changeLocation((Desktop) historicRequest.getProduct());
	};
	
	@PostMapping("/moveDesktopFromWarehouse")
	public void moveFromWarehouse(@RequestBody HistoricRequest historicRequest){
		
		String tipoAzione="Movimento Prodotto verso Workstation";
		movementsService.save(historicRequest.getProduct(), historicRequest.getNote(), tipoAzione);
		service.changeLocation((Desktop) historicRequest.getProduct());
	};
	

}
