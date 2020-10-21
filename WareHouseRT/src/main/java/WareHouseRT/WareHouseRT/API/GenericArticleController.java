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

import WareHouseRT.WareHouseRT.beans.GenericArticle;
import WareHouseRT.WareHouseRT.service.GenericArticleService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class GenericArticleController {
	@Autowired
	private GenericArticleService service;

	@PostMapping("/saveOrUpdateGenericArticle")
	public void saveOrUpdate(@RequestBody GenericArticle genericArticle) {
		service.saveOrUpdate(genericArticle);
	}
	
	@PostMapping("/deleteGenericArticle")
	public void delete(@RequestBody GenericArticle genericArticle) {
		service.delete(genericArticle);
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
}
