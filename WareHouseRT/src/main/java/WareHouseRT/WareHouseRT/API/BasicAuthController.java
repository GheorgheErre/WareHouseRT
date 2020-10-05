package WareHouseRT.WareHouseRT.API;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import WareHouseRT.WareHouseRT.beans.Authentication;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/api")
public class BasicAuthController {
	
	@RequestMapping("/basicauth")
	public Authentication helloWorldBean() {
		return new Authentication("You are authenticated");
	}

}
