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
	public GPU saveOrUpdate(@RequestBody HistoricRequest historicRequest) {
		String tipoAzione = "Aggiunta Prodotto";

		GPU g = service.saveOrUpdate((GPU) historicRequest.getProduct());
		historicRequest.setProduct(g);
		
		movementsService.save(historicRequest, tipoAzione);
		return g;

	}

	@PostMapping("/deleteGpu")
	public void delete(@RequestBody HistoricRequest historicRequest) {
	
		deleteService.save(historicRequest);
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
	

	@PostMapping("/moveGpuToWarehouse")
	public void moveToWarehouse(@RequestBody HistoricRequest historicRequest){
		
		String tipoAzione="Movimento Prodotto verso Magazzino";
		movementsService.save(historicRequest, tipoAzione);
		service.saveOrUpdate((GPU) historicRequest.getProduct());
	};
	
	@PostMapping("/moveGpuFromWarehouse")
	public void moveFromWarehouse(@RequestBody HistoricRequest historicRequest){
		
		String tipoAzione="Movimento Prodotto verso Workstation";
		movementsService.save(historicRequest, tipoAzione);
		service.saveOrUpdate((GPU) historicRequest.getProduct());
	};
}
