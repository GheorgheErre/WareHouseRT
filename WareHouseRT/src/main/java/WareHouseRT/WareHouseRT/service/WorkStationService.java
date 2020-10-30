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

	public void saveOrUpdate(WorkStation entity) {

		if (entity.getArticles() != null) {
			for (Article article : entity.getArticles()) {
				saveOrUpdateArticle(article);
			}
		}

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
	
//	public WorkStation findWorkstation(int numero) {
//		return repo.findByNumero(numero);
//	}

	public List<WorkStation> findAll() {
		return repo.findAll();

	}

	public long count() {
		return repo.count();
	}

	public void saveOrUpdateArticle(Article article) {

		switch (article.getClass().getSimpleName()) {

		case "Laptop":
			laptopService.saveOrUpdate((Laptop) article);
			break;
		case "Desktop":
			desktopService.saveOrUpdate((Desktop) article);
			break;
		case "Keyboard":
			keyboardService.saveOrUpdate((Keyboard) article);
			break;
		case "Monitor":
			monitorService.saveOrUpdate((Monitor) article);
			break;
		case "Mouse":
			mouseService.saveOrUpdate((Mouse) article);
			break;
		case "Cable":
			cableService.saveOrUpdate((Cable) article);
			break;
		case "Cellphone":
			cellphoneService.saveOrUpdate((Cellphone) article);
			break;
		case "DockingStation":
			dockingStationService.saveOrUpdate((DockingStation) article);
			break;
		case "GraphicTablet":
			graphicTabletService.saveOrUpdate((GraphicTablet) article);
			break;
		case "Token":
			tokenService.saveOrUpdate((Token) article);
			break;
		}
	}
}
