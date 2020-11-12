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

import WareHouseRT.WareHouseRT.beans.Cellphone;
import WareHouseRT.WareHouseRT.payload.request.DeleteRequest;
import WareHouseRT.WareHouseRT.service.CellphoneService;
import WareHouseRT.WareHouseRT.service.HistoricDeleteService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class CellphoneController {
	@Autowired
	private CellphoneService service;
	
	@Autowired
	private HistoricDeleteService deleteService;

	@PostMapping("/saveOrUpdateCellphone")
	public void saveOrUpdate(@RequestBody Cellphone cellphone) {
		service.saveOrUpdate(cellphone);
	}
	
	@PostMapping("/deleteCellphone")
	public void delete(@RequestBody DeleteRequest deleteRequest) {
		deleteService.save(deleteRequest);
		service.delete((Cellphone) deleteRequest.getProduct());
	}
	
	
	@GetMapping("/findCellphone")
	public Optional<Cellphone> findByID(@RequestBody Cellphone cellphone ) {
		return service.findByID(cellphone.getId());
	}

	@GetMapping("/findAllCellphone")
	public List<Cellphone> findAll() {
		return service.findAll();
	}
	
	@GetMapping("/countCellphone")
	public long count() {
		return service.count();
	}

}
