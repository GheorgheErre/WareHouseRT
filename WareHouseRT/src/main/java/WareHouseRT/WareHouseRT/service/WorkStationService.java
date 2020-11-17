package WareHouseRT.WareHouseRT.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import WareHouseRT.WareHouseRT.beans.Article;
import WareHouseRT.WareHouseRT.beans.Cable;
import WareHouseRT.WareHouseRT.beans.Cellphone;
import WareHouseRT.WareHouseRT.beans.Desktop;
import WareHouseRT.WareHouseRT.beans.DockingStation;
import WareHouseRT.WareHouseRT.beans.GraphicTablet;
import WareHouseRT.WareHouseRT.beans.Keyboard;
import WareHouseRT.WareHouseRT.beans.Laptop;
import WareHouseRT.WareHouseRT.beans.Monitor;
import WareHouseRT.WareHouseRT.beans.Mouse;
import WareHouseRT.WareHouseRT.beans.Token;
import WareHouseRT.WareHouseRT.beans.WorkStation;
import WareHouseRT.WareHouseRT.payload.request.HistoricRequest;
import WareHouseRT.WareHouseRT.repository.WorkStationRepository;

@Service
public class WorkStationService {

	@Autowired
	private WorkStationRepository repo;
	@Autowired
	private LaptopService laptopService;
	@Autowired
	private DesktopService desktopService;
	@Autowired
	private MonitorService monitorService;
	@Autowired
	private KeyboardService keyboardService;
	@Autowired
	private MouseService mouseService;
	@Autowired
	private DockingStationService dockingStationService;
	@Autowired
	private TokenService tokenService;
	@Autowired
	private GraphicTabletService graphicTabletService;
	@Autowired
	private CableService cableService;
	@Autowired
	private CellphoneService cellphoneService;

	@Autowired
	private SequenceGeneratorService sequenceService;

	@Autowired
	private CreateIdentifierService createIdentifier;
	
	@Autowired
	private HistoricMovementsService movementsService;

	public void saveOrUpdate(WorkStation entity) {


		if (repo.findById(entity.getId()).isPresent()) {
			update(entity);
		} else
			save(entity);

		System.out.println("hey");

	}

	public void save(WorkStation entity) {
		entity.setId(sequenceService.getNextSequence(WorkStation.SEQUENCE_NAME));
		// entity.setIdentifier(createIdentifier.createIdentifier("CPU"));
		repo.save(entity);
	}

	public void update(WorkStation entity) {
		repo.save(entity);
	}

	public void delete(WorkStation entity) {
		repo.delete(entity);
	}

	public WorkStation findWorkstation(String office, int numero) {
		return repo.findByOfficeAndNumero(office, numero);
	}
	

	public List<WorkStation> findAll() {
		return repo.findAll();

	}

	public long count() {
		return repo.count();
	}

}
