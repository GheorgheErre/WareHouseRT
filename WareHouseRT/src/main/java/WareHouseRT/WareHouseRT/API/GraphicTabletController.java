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

import WareHouseRT.WareHouseRT.beans.DockingStation;
import WareHouseRT.WareHouseRT.beans.GPU;
import WareHouseRT.WareHouseRT.beans.GraphicTablet;
import WareHouseRT.WareHouseRT.payload.request.HistoricRequest;
import WareHouseRT.WareHouseRT.service.GraphicTabletService;
import WareHouseRT.WareHouseRT.service.HistoricDeleteService;
import WareHouseRT.WareHouseRT.service.HistoricMovementsService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class GraphicTabletController {

	@Autowired
	private GraphicTabletService service;

	@Autowired
	private HistoricDeleteService deleteService;
	
	@Autowired
	private HistoricMovementsService movementsService;
	
	@PostMapping("/saveOrUpdateGraphicTablet")
	public void saveOrUpdate(@RequestBody HistoricRequest historicRequest) {
	
		String tipoAzione="Aggiunta Prodotto";
		movementsService.save(historicRequest, tipoAzione);
		service.saveOrUpdate((GraphicTablet) historicRequest.getProduct());
	}
	
	@PostMapping("/deleteGraphicTablet")
	public void delete(@RequestBody HistoricRequest deleteRequest) {
		deleteService.save(deleteRequest);
		service.delete((GraphicTablet) deleteRequest.getProduct());
	}
	
	@GetMapping("/findGraphicTablet")
	public Optional<GraphicTablet> findByID(@RequestBody GraphicTablet graphicTablet ) {
		return service.findByID(graphicTablet.getId());
	}

	@GetMapping("/findAllGraphicTablet")
	public List<GraphicTablet> findAll() {
		return service.findAll();
	}

	@GetMapping("/countGraphicTablet")
	public long count() {
		return service.count();
	}
	
	@PostMapping("/moveGraphicTablet")
	public void move(@RequestBody  HistoricRequest historicRequest){
		
		String tipoAzione="Movimento Prodotto";
		
		movementsService.save(historicRequest, tipoAzione);
		service.saveOrUpdate((GraphicTablet) historicRequest.getProduct());
	};
}
