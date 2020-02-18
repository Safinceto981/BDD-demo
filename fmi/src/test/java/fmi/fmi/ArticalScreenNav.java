package fmi.fmi;

import static org.junit.Assert.assertNotNull;

import cucumber.api.java.en.Given;
import fmi.fmi.ui.models.ArticalScreen;
import fmi.fmi.ui.models.CommentScreen;
import fmi.fmi.ui.models.DeleteScreen;


public class ArticalScreenNav {
	

	private static DeleteScreen deleteScreen;
	private static CommentScreen commentScreen;
	@Given("^Потребителя се намира в екрана на статията$")
	public void потребитяле_се_намира_в_началния_екран() throws Throwable {
		commentScreen = new CommentScreen();
	}
	@Given("^Потребителят се намира в екрана на статията$")
	public void потребителят_се_намира_в_началния_екран() throws Throwable {
		deleteScreen = new DeleteScreen();
	}


	public static CommentScreen getArticalIfExists() {
		assertNotNull(commentScreen);
		return commentScreen;
	}

	public static DeleteScreen getArticalIfExists2() {
		assertNotNull(deleteScreen);
		return deleteScreen;
	}


}
