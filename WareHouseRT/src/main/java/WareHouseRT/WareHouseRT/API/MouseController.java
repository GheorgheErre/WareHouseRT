package WareHouseRT.WareHouseRT.API;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import WareHouseRT.WareHouseRT.beans.Mouse;
import WareHouseRT.WareHouseRT.service.MouseService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class MouseController {
	
	@Autowired
	private MouseService service;
	
	@PostMapping("/saveMouse")
	public void save(@RequestBody Mouse mouse) {
		service.save(mouse);
	}
	
	@GetMapping("/findAllMouse")
	public List<Mouse> findAll() {
		return service.findAll();
	}
	
	@GetMapping("/countMouse")
	public long count() {
		return service.count();
	}


}
