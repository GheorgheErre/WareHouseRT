package WareHouseRT.WareHouseRT.API;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import WareHouseRT.WareHouseRT.beans.HistoricDelete;
import WareHouseRT.WareHouseRT.service.HistoricDeleteService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class HistoricDeleteController {

	@Autowired
	private HistoricDeleteService service;
	
	@GetMapping("/findAllHistoryDelete")
	public List<HistoricDelete> findAll() {
		return service.findAll();
	}
	
	@GetMapping("/findHistoryDelete")
	public Optional<HistoricDelete> findByID(@RequestBody HistoricDelete historicDelete ) {
		return service.findByID(historicDelete.getId());
	}
}
