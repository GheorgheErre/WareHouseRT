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
import WareHouseRT.WareHouseRT.beans.GenericArticle;
import WareHouseRT.WareHouseRT.payload.request.HistoricRequest;
import WareHouseRT.WareHouseRT.service.GenericArticleService;
import WareHouseRT.WareHouseRT.service.HistoricDeleteService;
import WareHouseRT.WareHouseRT.service.HistoricMovementsService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class GenericArticleController {
	@Autowired
	private GenericArticleService service;
	@Autowired
	private HistoricDeleteService deleteService;
	@Autowired
	private HistoricMovementsService movementsService;

	
	@PostMapping("/saveOrUpdateGenericArticle")
	public void saveOrUpdate(@RequestBody HistoricRequest historicRequest) {
		String tipoAzione="Aggiunta Prodotto";
		movementsService.save(historicRequest, tipoAzione);
		service.saveOrUpdate((GenericArticle) historicRequest.getProduct());
	}
	
	@PostMapping("/deleteGenericArticle")
	public void delete(@RequestBody HistoricRequest historicRequest) {
		deleteService.save(historicRequest);
		service.delete((GenericArticle) historicRequest.getProduct());
	}
	
	@GetMapping("/findGenericArticle")
	public Optional<GenericArticle> findByID(@RequestBody GenericArticle genericArticle ) {
		return service.findByID(genericArticle.getId());
	}
	
	@GetMapping("/findAllGenericArticle")
	public List<GenericArticle> findAll() {
		return service.findAll();
	}
	@GetMapping("/countGenericArticle")
	public long count() {
		return service.count();
	}
	

	@PostMapping("/moveGenericArticleToWarehouse")
	public void moveToWarehouse(@RequestBody HistoricRequest historicRequest){
		
		String tipoAzione="Movimento Prodotto verso Magazzino";
		movementsService.save(historicRequest, tipoAzione);
		service.saveOrUpdate((GenericArticle) historicRequest.getProduct());
	};
	
	@PostMapping("/moveGenericArticleFromWarehouse")
	public void moveFromWarehouse(@RequestBody HistoricRequest historicRequest){
		
		String tipoAzione="Movimento Prodotto verso Workstation";
		movementsService.save(historicRequest, tipoAzione);
		service.saveOrUpdate((GenericArticle) historicRequest.getProduct());
	};
	
}
