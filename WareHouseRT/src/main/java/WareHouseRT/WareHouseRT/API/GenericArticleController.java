package WareHouseRT.WareHouseRT.API;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import WareHouseRT.WareHouseRT.beans.GenericArticle;
import WareHouseRT.WareHouseRT.service.GenericArticleService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class GenericArticleController {
	@Autowired
	private GenericArticleService service;

	@PostMapping("/saveCpu")
	public void save(@RequestBody GenericArticle genericArticle) {
		service.save(genericArticle);
	}
	
	@GetMapping("/findAllCpu")
	public List<GenericArticle> findAll() {
		return service.findAll();
	}
}
