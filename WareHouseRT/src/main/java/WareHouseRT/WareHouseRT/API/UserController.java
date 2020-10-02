package WareHouseRT.WareHouseRT.API;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import WareHouseRT.WareHouseRT.beans.User;
import WareHouseRT.WareHouseRT.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class UserController {

	@Autowired
	private UserService service;

	@PostMapping("/registerUser")
	public User registerUser(@RequestBody User user) throws Exception {
		String username = user.getUsername();
		if (username != null && !"".equals(username)) {
			if (service.getUserByUsername(username) != null) {
				throw new Exception("user with " + username + " is already exist");
			}
		}
		return service.save(user);
	}
	
	@PostMapping("/login")
	public User loginUser(@RequestBody User user) throws Exception {
		String username = user.getUsername();
		String password = user.getPassword();
		User userObj = null;
		if(username != null && password != null) {
			userObj = service.getUserByUsernameAndPassword(username, password);
		}
		if(userObj == null) {
			throw new Exception("bad credentials");
		}
		return userObj;
	}

}
