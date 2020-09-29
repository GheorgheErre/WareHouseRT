package WareHouseRT.WareHouseRT.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import WareHouseRT.WareHouseRT.beans.Laptop;

@Service
public class LaptopService {

	@Autowired
	private LaptopService repo;
	
	public void save(Laptop laptop) {
		repo.save(laptop);
	}
	
}
