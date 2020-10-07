package WareHouseRT.WareHouseRT.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import WareHouseRT.WareHouseRT.beans.CPU;
import WareHouseRT.WareHouseRT.beans.Cellphone;
import WareHouseRT.WareHouseRT.repository.CellphoneRepository;

@Service
public class CellphoneService {

	@Autowired
	private CellphoneRepository repo;
	
	@Autowired
	private SequenceGeneratorService sequenceService;
	
	public void save(Cellphone cell) {
		cell.setId(sequenceService.getNextSequence(Cellphone.SEQUENCE_NAME));
		repo.save(cell);
		
	}

	public List<Cellphone> findAll() {
		return repo.findAll();
	}
	
}
