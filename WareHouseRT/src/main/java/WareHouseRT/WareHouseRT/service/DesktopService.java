package WareHouseRT.WareHouseRT.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import WareHouseRT.WareHouseRT.beans.CPU;
import WareHouseRT.WareHouseRT.beans.Desktop;
import WareHouseRT.WareHouseRT.repository.DesktopRepository;

@Service
public class DesktopService {
	@Autowired
	private DesktopRepository repo;
	
	@Autowired
	private SequenceGeneratorService sequenceService;
	
	public void save(Desktop desktop) {
		desktop.setId(sequenceService.getNextSequence(Desktop.SEQUENCE_NAME));
		repo.save(desktop);
	}

	public List<Desktop> findAll() {
		return repo.findAll();
	}
	
}
