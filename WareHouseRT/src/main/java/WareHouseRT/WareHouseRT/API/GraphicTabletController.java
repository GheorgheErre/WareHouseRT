package WareHouseRT.WareHouseRT.API;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import WareHouseRT.WareHouseRT.beans.GraphicTablet;
import WareHouseRT.WareHouseRT.service.GraphicTabletService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class GraphicTabletController {

	@Autowired
	private GraphicTabletService service;

	@PostMapping("/saveGraphicTablet")
	public void save(@RequestBody GraphicTablet graphicTablet) {
		service.save(graphicTablet);
	}

	@GetMapping("/findAllGraphicTablet")
	 @PreAuthorize("hasRole('ADMIN')")
	public List<GraphicTablet> findAll() {
		return service.findAll();
	}

	@GetMapping("/countGraphicTablet")
	@PreAuthorize("hasRole('ADMIN')")
	public long count() {
		return service.count();
	}
}
