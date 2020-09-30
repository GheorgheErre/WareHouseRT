package WareHouseRT.WareHouseRT.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import WareHouseRT.WareHouseRT.beans.MotherBoard;
import WareHouseRT.WareHouseRT.repository.MotherBoardRepository;

@Service
public class MotherBoardService {
	@Autowired
	private MotherBoardRepository repo;
	
	@Autowired
	private SequenceGeneratorService sequenceService;
	
	public void save(MotherBoard motherBoard) {
		motherBoard.setId(sequenceService.getNextSequence(MotherBoard.SEQUENCE_NAME));
		repo.save(motherBoard);
	}
	
}
